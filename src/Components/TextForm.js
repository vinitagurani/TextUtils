import React, { useState } from "react";
// import Alert from "../Alert";

// rfc - then enter
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was click");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
  };

  const handleLoClick = () => {
    console.log("lowercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text converted to lowercase", "success");
  };
  const handleClearClick = () => {
    console.log("Clear clicked ");
    setText("");
    props.showAlert("Text is cleared", "success");
  };
  const handleSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert ("Extra spaces are cleared", "success");
  };
  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  };
  const wordCount = () => {
    let count = 0;
    let arr = text.split(" ");
    for (let i = 0;i< arr.length;i++) {
      if (arr[i] !== "") {
        count++;
      }
    }
    return count;
  }

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode === 'light'? 'white':'#042743', color: props.mode === "light" ? "black" : "white" }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <div className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert to Uppercase
          </div>
          <div className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
            Convert to Lowercase
          </div>
          <div className="btn btn-primary my-3" onClick={handleClearClick}>
            Clear text
          </div>
          <div
            className="btn btn-primary my-3 mx-3"
            onClick={handleSpacesClick}
          >
            Clear extra spaces
          </div>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>Number of words in your paragraph: {wordCount()}</p>
        <p>Number of character in you paragraph: {text.length}</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter text to preview"}</p>
      </div>
    </>
  );
}
