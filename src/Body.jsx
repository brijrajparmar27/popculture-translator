import { useContext, useState } from "react";
import "./CSS/Body.css";
import { ModeContext } from "./ModeContext";

const Body = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const { Mode, setMode } = useContext(ModeContext);

  const updateText = (e) => {
    setText(e.target.value);
  };

  const getTranslate = () => {

    let str = JSON.stringify(Mode);

    let target = str.substring(str.indexOf("S/") + 2, str.lastIndexOf("."));

    let url = "https://api.funtranslations.com/translate/" + target + ".json?text=";

    fetch(url + text)
      .then((raw) => {
        return raw.json();
      })
      .then((data) => {
        setResponse(data.contents.translated);
      });
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
