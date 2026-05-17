import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";

function StatePage() {
  let inputRef = useRef<HTMLInputElement>();

  // object stateData used the application
  let stateData = new StateData();
  // object state used for rendering component
  let [state, setState] = useState<StateData>(new StateData());

  function btnClick() {
    stateData.firstname = inputRef.current!.value;
    setState(stateData);
	console.log(`stateData: ${JSON.stringify(stateData)}`);
    console.log(`state: ${JSON.stringify(state)}`);
  }

  return (
    <>
      Demo of useState : {state.firstname}
      <br />
      <TextField size="small" inputRef={inputRef}></TextField>
      <Button variant={"contained"} onClick={btnClick}>
        Set Text
      </Button>
      <br />
      {inputRef.current?.value === "x" ? <>Your text is X</> : <></>}
    </>
  );
}

export default StatePage;

class StateData {
  firstname: string = "";
  lastname: string = "";
  age: number = 0;
  isAdmin: boolean = false;
  mobile = [];
}