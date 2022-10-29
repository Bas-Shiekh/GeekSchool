import { FC } from "react";
import { Card, Typography } from "antd";
import ClassAvatar from "../../../../assets/class_avatar.png";
import ClassBcg from "../../../../assets/class_bcg.png";
import { ClassCardProps } from "../../../../interfaces/componentsInterface";
import "./ClassCard.css";

const { Title, Text } = Typography;

const ClassCard: FC<ClassCardProps> = ({
  className,
  teacherName,
  assignments,
  tests,
}) => (
  <Card
    id="2"
    bodyStyle={{
      width: "calc((100% - 5rem) / 3)",
      height: "100%",
      direction: "ltr",
      position: "relative",
      fontFamily: `'Poppins', sans-serif`,
    }}
  >
    <Card
      className="first-part"
      bodyStyle={{
        width: "100%",
        height: "8rem",
        backgroundImage: `url(${ClassBcg})`,
        backgroundPosition: "right center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "0.7rem",
        paddingLeft: "6rem",
      }}
    >
      <Title level={3} className="class-name">
        {className}
      </Title>
      <Title level={4} className="teacher-name">
        {teacherName}
      </Title>
    </Card>
    <img className="class-avatar" src={ClassAvatar} alt="class avatar" />
    <Card
      className="assignments-tests"
      bodyStyle={{
        width: "100%",
        height: "15rem",
        overflow: "auto",
      }}
    >
      <Card
        className="assignments"
        bordered={false}
        bodyStyle={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {assignments.map((assignment) => (
          <Card
            id={String(assignment.id)}
            bordered={false}
            className="assignment-row"
            bodyStyle={{
              width: "100%",
              height: "3rem",
              display: "flex",
              padding: "0.3rem 0rem",
              flexDirection: "row-reverse",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "3rem",
              boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Title level={5} className="assignment-title">
              {assignment.title}
            </Title>
            <Text type="secondary" strong className="created-at">
              {assignment.createdAt.split("T")[0]}
            </Text>
            <Text mark className="marked">
              Assignment
            </Text>
          </Card>
        ))}
      </Card>
      <Card
        className="tests"
        bordered={false}
        bodyStyle={{
          paddingTop: "0rem",
          paddingBottom: "0.5rem",
        }}
      >
        {tests.map((test) => (
          <Card
            id={String(test.id)}
            bordered={false}
            className="test-row"
            bodyStyle={{
              width: "100%",
              height: "3rem",
              display: "flex",
              paddingLeft: "0rem",
              flexDirection: "row-reverse",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "3rem",
              boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Title level={5} className="test-title">
              {test.title}
            </Title>
            <Text type="secondary" strong className="created-at">
              {test.date.split("T")[0]}
            </Text>
            <Text mark className="marked">
              Test
            </Text>
          </Card>
        ))}
      </Card>
    </Card>
  </Card>
);

export default ClassCard;
