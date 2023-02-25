import { Rate } from "antd";
import { card1, card2, card3 } from "../../../assets";
import "./style.css";

const LandingCard = () => (
  <section id="student-feedback">
    <h1>ماذا قال الطلاب عنا</h1>
    <p>
      التعلم هو عملية اكتساب الجديد, او تعديل القائمة, او المعرفة, او السلوكيات,
      او مهارات, او قيم, او تفضيلات{" "}
    </p>
    <div className="feedback-cards">
      <div className="feedback-card">
        <div>
          <img src={card1} alt="person one" />
          <div>
            <h2>محمود حماد</h2>
            <p>طالب اعدادي</p>
            <Rate disabled defaultValue={5} value={5} />
          </div>
        </div>
        <div className="hr" />
        <p>
          {" "}
          كانت تجربة ممتعة، و فرصة جيدة للحصول على التعليم بنظرة جديدة وقرعة
          رائعة جدا
        </p>
      </div>
      <div className="feedback-card">
        <div>
          <img src={card2} alt="person two" />
          <div>
            <h2> باسل الشيخ</h2>
            <p>طالب فاشل</p>
            <Rate disabled defaultValue={5} value={1} />
          </div>
        </div>
        <div className="hr" />
        <p>كانت تجربة ممتعة، و فرصة جيدة للحصول على التعليم بنظرة جديدة</p>
      </div>
      <div className="feedback-card">
        <div>
          <img src={card3} alt="person three" />
          <div>
            <h2>سارة دهمان</h2>
            <p>طالبة ابتدائي</p>
            <Rate disabled defaultValue={5} value={5} />
          </div>
        </div>
        <div className="hr" />
        <p>كانت تجربة رائعة، و فرصة جيدة للحصول على التعليم بنظرة جديدة</p>
      </div>
    </div>
  </section>
);

export default LandingCard;
