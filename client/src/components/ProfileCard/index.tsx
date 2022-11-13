import { Avatar, List } from "antd";
import { ElementType } from "react";
import {
  WhatsAppOutlined,
  MailOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Link } from "react-router-dom";

interface DataType {
  name: string;
  mobile: string;
  img: string;
  id: number;
}

interface ProfileCardCC {
  data: DataType[];
  title: string;
  type?: string;
  _role: string;
}

const ProfileCard: ElementType = ({
  data,
  title,
  type,
  _role,
}: ProfileCardCC) => {
  let subtitle1;
  let subtitle2;

  if (_role === "parent") {
    subtitle1 = type === "students" ? `لديك ` : `يمكنك الوصول إلى`;
    subtitle2 = type === "students" ? `من الأبناء` : `من المدرسين`;
  } else {
    subtitle1 = type === "students" ? `لديك ` : `يمكنك الوصول إلى`;
    subtitle2 = type === "students" ? `من الطلاب` : `من الفصول الدراسية`;
  }

  return (
    <div className="profile_card">
      <div className="card_header">
        <h1>{title}</h1>
        <p>
          {subtitle1}
          <span className="teachers_number"> {data.length} </span> {subtitle2}
        </p>
      </div>
      <div
        id="scrollableDiv"
        style={{
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <div>
          {type === "students" ? (
            <List
            
              dataSource={data}
              renderItem={(item) => (
                <Link to={`/student/${item.id}/classes`}>
                  <List.Item key={item.mobile} className="test">
                    <List.Item.Meta
                      avatar={<Avatar src={item.img} />}
                      title= {item.name}
                      description={item.mobile}
                    />
                    <div className="icons">
                        <MailOutlined /> <WhatsAppOutlined />
                    </div>
                  </List.Item>
                </Link>
              )}
            />
          ) : (
            <List
              dataSource={data}
              renderItem={(item) => (
                <Link to={`/class/${item.id}/stats`}>
                  <List.Item key={item.mobile}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.img} />}
                      title="test"
                      description={item.mobile}
                    />
                    <div className="icons">
                    <AppstoreAddOutlined />
                    </div>
                  </List.Item>
                </Link>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

ProfileCard.defaultProps = {
  type: null,
};

export default ProfileCard;

// {
//   type === "students" ? (
//     <Link
//       to={`/student/${item.id}/classes`}
//       style={{
//         fontSize: "1rem",
//         color: "var(--light-black)",
//       }}
//     >
//       {item.name}
//     </Link>
//   ) : (
//     <Link
//       style={{
//         fontSize: "1rem",
//         color: "var(--light-black)",
//       }}
//     >
//       {item.name}
//     </Link>
//   )
// }
