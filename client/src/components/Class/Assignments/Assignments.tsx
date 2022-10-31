import React, { useState, useEffect } from "react";
import { Dropdown, Space, Button, Menu, message, MenuProps, Input } from "antd";
import {
  PlusOutlined,
  FileTextOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import axios from "axios";
// import { useUserData } from "../../../context/AuthContext";
import AddTest from "../../ClassTests/AddTest/AddTest";
import { TeacherAssignmentCard } from "../cards";
import "./Assignments.css";

const { Search } = Input;

const Assignments: React.FC = () => {
  const [assignments, setAssignments] = useState<Array<object>>([]);
  const [addTest, setAddTest] = useState<boolean>(false);
  const [, setAddAssignment] = useState<boolean>(false);

  const classId = 5; // ? This will be passed when the user clicks on some class.
  const role = "teacher";
  const source = axios.CancelToken.source();

  // ? The search function.
  const onSearch = (value: string) =>
    setAssignments((prevValue: any) =>
      prevValue.filter((object: any) => object.title.includes(value))
    );

  // ? Button events
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    if (e.key === "1") {
      setAddAssignment(true);
    } else {
      setAddTest(true);
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "إضافة تكليف",
          key: "1",
          icon: <FileProtectOutlined />,
        },
        {
          label: "إضافة اختبار",
          key: "2",
          icon: <FileTextOutlined />,
        },
      ]}
    />
  );

  useEffect(() => {
    const fetchAssignmentsData = async () => {
      const data = await axios.get(`/api/v1/class/${classId}/assignments`);

      if (data.data.data.count) {
        setAssignments(data.data.data.rows);
      } else {
        setAssignments(data.data.data);
      }
    };

    fetchAssignmentsData();

    return () => source.cancel();
  }, []);

  return (
    <>
      {addTest && <AddTest />}
      <main className="class-assignment">
        <h1 className="assignment-title">التكليفات</h1>
        <section className="assignment-add-search">
          <Search
            placeholder="ابحث عن تكليف"
            className="search"
            onSearch={onSearch}
            enterButton
          />
          <Dropdown overlay={menu} className="dropdown">
            <Button className="dropdown-button">
              <Space>
                <PlusOutlined className="plus-icon" />
                إضافة
              </Space>
            </Button>
          </Dropdown>
        </section>
        {/* {role === "student" && (
          <section className="assignments-box">
            {assignments.map((assignment: any) => (
              <StudentAssignmentCard
                title={assignment.title}
                createdAt={assignment.createdAt}
                description={assignment.description}
              />
            ))}
          </section>
        )} */}
        {role === "teacher" && (
          <section className="assignment-box">
            {assignments.map(() => (
              <TeacherAssignmentCard />
            ))}
          </section>
        )}
      </main>
    </>
  );
};

export default Assignments;
