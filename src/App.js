import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from "./Components/Alert";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type :type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const removeClasses = ()=> {
    document.body.classList.remove ('bg-light');
    document.body.classList.remove ('bg-success');
    document.body.classList.remove ('bg-danger');
    document.body.classList.remove ('bg-warning');
    document.body.classList.remove ('bg-dark');
    }
  const toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add('bg-'+cls);
    // if ( mode === 'light') {
    //   setMode ('dark');
    //   document.body.style.backgroundColor='#042743';
    //   showAlert ("Dark Mode enabled", "success");
    //   // document.title = "TextUtils - Dark mode"
    // }
    // else {
    //   setMode ('light');
    //   document.body.style.backgroundColor = 'white'
    //   showAlert("Light mode enabled", "success");
    //   // document.title = "TextUtils - Light mode"

    // }
    if (cls === 'dark') {
      showAlert("Dark mode enabled", "success");   
      
      // removeClasses();
      setMode ('dark');
      // document.body.style.backgroundColor = '#042743'
    }
    else if (cls === 'light') {
      showAlert("Light mode enabled", "success");
      setMode ('light');


    }
    else if (cls === 'warning') {
      showAlert("Yellow mode enabled", "success");
      setMode ('warning');

    }
    else if (cls === 'danger') {
      showAlert("Red mode enabled", "success");
      setMode ('danger');

    }
    else if (cls === 'success') {
      showAlert("Green mode enabled", "success");
      setMode ('success');

    }else if (cls === 'primary') {
      showAlert("Blue mode enabled", "success");
      setMode ('primary');

    }

   }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode = {mode}/>} />
          <Route path="/" element={<TextForm heading=" Try TextUtils - word counter, character counter, convert cases, remove extra spaces." mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}
// everthing which is written inside the return statement is JSX., app.js = javascript file. JSX is 95% html, in {} = javascript.
export default App;
