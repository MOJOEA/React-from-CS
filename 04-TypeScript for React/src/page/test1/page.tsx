import { useState } from "react";
import { useNavigate } from "react-router-dom";

// เปลี่ยนชื่อตอนนำเข้ามาใช้งานให้สอดคล้องกับไฟล์ Crad
import BoxCrad from "../../components/crad/crad";

function MoviePage() {
  const navigate = useNavigate();
  const [clickText, setClickText] = useState("null text");
  const [inputText, setInputText] = useState("ยังไม่ได้พิมพ์อะไร");

  return (
    <>
      {/* การ์ดใบที่ 1: โหมดปุ่ม สำหรับอัปเดต State ข้อความคลิก */}
      <BoxCrad 
        title="Button Text"
        mode="btn"
        text={clickText} 
        onBtnClick={() => setClickText("This text is from button click")} 
      />

      {/* การ์ดใบที่ 2: โหมดอินพุต สำหรับพิมพ์ข้อความเรียบลูปลงหน้าจอ */}
      <BoxCrad 
        mode="input"
        title="Input Text" 
        text={`mt test: ${inputText}`} 
        onInputChange={(value) => setInputText(value)} 
      />

      {/* การ์ดใบที่ 3: โหมดปุ่ม สำหรับเปลี่ยนหน้า Route ไปยัง /test1/123 */}
      <BoxCrad 
        title="Button Link" 
        mode="btn"
        text="Test route 1" 
        onBtnClick={() => navigate("/test1/123")} 
      />
    </>
  );
}

export default MoviePage;
