import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react"; // 1. นำเข้า useState เพิ่มเติม

function MoviePage() {
  const navigate = useNavigate();

  function navigateTo(id: string) {
    navigate(`/test3/${id}`);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const textFieldRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  // 2. เปลี่ยนตัวแปรธรรมดาให้เป็น State เพื่อให้ UI ทำการอัปเดตอัตโนมัติเมื่อค่าเปลี่ยน
  const [textToShow, setTextToShow] = useState("Welcome to Demo Page");

  function btnClickHandler() {
    // ดึงค่าล่าสุดจากระบบอินพุตและช่องกรอกของ Material UI
    const inputValue = inputRef.current?.value || "";
    const textFieldValue = textFieldRef.current?.value || "";
    const selectValue = selectRef.current?.value || "";

    console.log("Input Text is " + inputValue);
    console.log("TextField Text is " + textFieldValue);
    console.log("Select Value is " + selectValue);

    // 3. สั่งอัปเดตข้อความบนหน้าจอเมื่อทำการกดปุ่ม Run
    setTextToShow(`Last Input: ${inputValue} | on button: ${textFieldValue} | on select: ${selectValue}`);
  }

  return (
    <>
      {/* ข้อความตรงนี้จะเปลี่ยนทันทีตามสถานะของ State */}
      <Typography variant="h6" sx={{ ml: 2, mt: 2}}>
        {textToShow}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2, // เพิ่มระยะห่างระหว่างปุ่มให้สวยงามขึ้น
          p: 2
        }}
      >
        <input
          ref={inputRef}
          type="text"
        />

        <TextField
          inputRef={textFieldRef}
          size="small"
        />

        <select ref={selectRef}>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>

        <Button variant="contained" onClick={btnClickHandler}>
          Run
        </Button>
      </Box>
    </>
  );
}

export default MoviePage;
