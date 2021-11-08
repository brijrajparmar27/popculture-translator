import { useContext, useState } from "react";
import "./CSS/Body.css";
import { ModeContext } from "./ModeContext";
import useFetch from "./useFetch";

const Body = () => {
  const [text, setText] = useState("");
  const [requestTrans,setRequestTrans] = useState("");
  
  const response = useFetch(requestTrans);

  const updateText = (e) => {
    setText(e.target.value);
  };

  const getTranslate = () => {
    setRequestTrans(text);
  };

  return (
    <div className="body">
      <div className="bodycontent">
        <textarea
          onChange={(e) => {
            updateText(e);
          }}
        ></textarea>
        <div className="div_submit">
          <input
            type="button"
            value="Translate"
            className="btn_submit"
            onClick={getTranslate}
          />
        </div>
        <textarea value={response} readOnly></textarea>
      </div>
    </div>
  );
};

export default Body;
