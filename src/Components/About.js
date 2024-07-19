import React from "react";


export default function About(props) {

    // const [mystyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const toggleStyle = ()=> {
    //     if (mystyle.color === 'white') {
    //         setStyle({color: 'black', backgroundColor: 'white'})
    //         setBtnText ("Enable dark mode");
    //     }
    //     else {
    //         setStyle({color: 'white', backgroundColor: '#042743', border : '2px solid white'});
    //         setBtnText ("Enable light mode");
    //     }
    // }
    // const [btnText, setBtnText] = useState("Enable darkmode");

    let mystyle = {
      color : props.mode === 'dark'? 'white': 'black',
      backgroundColor :  props.mode === 'light' ? 'light' :
      props.mode === 'dark' ? 'grey' :
      props.mode === 'danger' ? '#eb7676' :
      props.mode === 'success' ? 'lightgreen' :
      props.mode === 'warning' ? 'yellow' :
      'lightblue' }
    
        

  return (
    <div className="container" style={{ color : props.mode === 'dark'? 'white': 'black',}}>
        <h2 className="my-3">About us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>Welcome to TextUtils. </strong> At TextUtils, we offer a variety of simple yet powerful tools to help you manage and transform your text effortlessly. Whether you need to convert text to uppercase, lowercase, clear your text, copy it, or remove extra spaces, we've got you covered.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              Our Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
                <strong>User-friendly and Efficient:</strong> Convert to Uppercase: Easily transform your text to uppercase for better readability and emphasis.
                Convert to Lowercase: Convert your text to lowercase for a more casual and relaxed tone.
                Clear Text: Quickly clear all text from the input area to start fresh.
                Copy Text: Effortlessly copy your text to the clipboard with a single click.
                Remove Extra Spaces: Clean up your text by removing unnecessary spaces, making it more polished and professional.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Contact
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>Here comes the contact information.</strong> 
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" class="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  );
}
