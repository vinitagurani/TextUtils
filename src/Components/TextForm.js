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
  const handleCopy = () => {
    console.log ("Copied text");
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is copied", "success");
  }
  const wordCount = () => {
   return text.split(/\s+/).filter((element) => {return element.length !== 0}).length;
  }

  const [text, setText] = useState("");

  let btnStyle = {
    color: props.mode === "light" ? "black" : "white" ,
    backgroundColor :  props.mode === 'light' ? 'lightblue' :
    props.mode === 'dark' ? 'grey' :
    props.mode === 'danger' ? 'red' :
    props.mode === 'success' ? 'green' :
    props.mode === 'warning' ? '#a2600b' :
    'blue' }

  let textStyle = {
    color: props.mode === "dark" ? "white" : "black" ,
    backgroundColor :  props.mode === 'light' ? 'white' :
    props.mode === 'dark' ? 'grey' :
    props.mode === 'danger' ? '#eb7676' :
    props.mode === 'success' ? 'lightgreen' :
    props.mode === 'warning' ? 'yellow' :
    'lightblue'

  }

  return (
    <>
      <div
        // className="container"
        style={{color: props.mode === "light" ? "black" : "white" }}>

        <h2 className="my-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control my-2"
            style={textStyle}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled = {text.length === 0} style={btnStyle}>
            Convert to Uppercase </button>
          <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick} disabled = {text.length === 0} style={btnStyle}>
            Convert to Lowercase </button>
          < button className="btn btn-primary my-1 mx-1" onClick={handleClearClick} disabled = {text.length === 0} style={btnStyle}>
            Clear text </button>
          <button className="btn btn-primary my-1 mx-1" onClick={handleSpacesClick} disabled = {text.length === 0} style={btnStyle}>
            Clear extra spaces </button>
          <button className="btn btn-primary my-1 mx-1" onClick={handleCopy} disabled = {text.length === 0} style={btnStyle}>
            Copy text </button>
        </div>
      </div>
      <div
        className="container my-1"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>Number of words in your paragraph: {wordCount()}</p>
        <p>Number of character in your paragraph: {text.length}</p>
        <p>{0.008 * wordCount()} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Nothing to preview"}</p>
      </div>
    </>
  );
}
