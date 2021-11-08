import { useContext, useState } from "react";
import { ModeContext } from "./ModeContext";

const useFetch = (text) => {
  const [response, setResponse] = useState("");
  const { Mode } = useContext(ModeContext);

  if (text !== "") {
    let str = JSON.stringify(Mode);

    let target = str.substring(str.indexOf("S/") + 2, str.lastIndexOf("."));

    let url =
      "https://api.funtranslations.com/translate/" + target + ".json?text=";

    fetch(url + text)
      .then((raw) => {
        return raw.json();
      })
      .then((data) => {
        setResponse(data.contents.translated);
      });
  }

  return response;
};

export default useFetch;
