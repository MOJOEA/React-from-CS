import { Button, TextField } from "@mui/material";
import { useRef, useState, useContext} from "react";

import { AppContext } from "../../shared/AppContext";

function LocalStoragePage() {
  let appCtx = useContext(AppContext);

  let nameRef = useRef<HTMLInputElement>();
  let ageRef = useRef<HTMLInputElement>();
  
  const [state, setState] = useState({
    name: localStorage.getItem("name") || "",
    age: localStorage.getItem("age") || "",
    objStr: localStorage.getItem("objStr") || ""
  });
  //localStorage.clear();
  console.log( JSON.parse(localStorage.getItem("objStr")!));
  
  function changeLocalStorage() {
    localStorage.setItem("name", nameRef.current!.value);
    localStorage.setItem("age", ageRef.current!.value);
    const obj = { name: nameRef.current!.value, age: ageRef.current!.value };
    localStorage.setItem("objStr", JSON.stringify(obj));
    setState({
      name: nameRef.current!.value,
      age: ageRef.current!.value,
      objStr: JSON.stringify(obj) 
    });
  }

  return (
    <>
      Demo LocalStorage Page
      <br />
      <TextField inputRef={nameRef} size="small"></TextField>
      <br />
      <TextField inputRef={ageRef} size="small"></TextField>
      <br />
      <Button variant="contained" onClick={changeLocalStorage}>
        Change Local Storage
      </Button>
      <br />
      {"name: " + state.name}{" "}
      {"age: " + state.age}{" "}
      {"objStr: " + state.objStr}{" "}
      {"appCtx: " + appCtx.text}{" "}
    </>
  );
}
export default LocalStoragePage;
