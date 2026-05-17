import { useContext } from "react";
import { AppContext } from "../../shared/AppContext";
import { Button } from "@mui/material";

function ContextPage() {
  let appCtx = useContext(AppContext);
  return (
    <div>
      Context data is {appCtx.text}
      <br />
      <Button variant="contained" onClick={btnClickHandler}>
	      Set Context Data
	  </Button>
    </div>
  );

  function btnClickHandler(){
    appCtx.text = 'My name is Tata';
    console.log(appCtx.text);
    
  }
}
export default ContextPage;