import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MovieCard from "../../components/crad/crad";

function MoviePage() {
  const navigate = useNavigate();
  const [clickText, setClickText] = useState("null text");
  const [inputText, setInputText] = useState("ยังไม่ได้พิมพ์อะไร");

  return (
    <>
      <MovieCard 
        title="Button Text"
        mode="btn"
        text={clickText} 
        onBtnClick={() => setClickText("This text is from button click")} 
      />

      <MovieCard 
        mode="input"
        title="Input Text" 
        text={`mt test: ${inputText}`} 
        onInputChange={(value) => setInputText(value)} 
      />

      <MovieCard 
        title="Button Link" 
        mode="btn"
        text="Test route 1" 
        onBtnClick={() => navigate("/test1/123")} 
      />
    </>
  );
}

export default MoviePage;
