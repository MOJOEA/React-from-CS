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
        title="React" 
        mode="null"
        text="Easy web framework" 
      />

      <MovieCard 
        title="Java" 
        mode="null"
        text="Easy programming language" 
      />

      <MovieCard 
        mode="null"
        text="Programming is easy" 
      />

      <MovieCard 
        title="No Title"
        mode="null"
      />
    </>
  );
}

export default MoviePage;
