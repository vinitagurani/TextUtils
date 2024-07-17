import React, { useState } from "react";

// rfc - then enter
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log ("Uppercase was click");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
      console.log ("lowercase clicked");
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handleClearClick = () => {
      console.log("Clear clicked ");
      setText("");

    }
    const handleOnChange = (event) => {
        console.log ("handleOnChange");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    

  return (
    <>
    <div className="container">
        <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="btn btn-primary my-3" onClick={handleUpClick}> Convert to Uppercase</div>
        <div className="btn btn-primary my-3 mx-3" onClick={handleLoClick}> Convert to Lowercase</div>
        <div className="btn btn-primary my-3" onClick={handleClearClick}> Clear text</div>


      </div>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>Number of words in your paragraph: {text.split(" ").length}</p>
        <p>Number of character in you paragraph: {text.length}</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>  
        <p>{text}</p>
    </div>
    </>
  );
}
