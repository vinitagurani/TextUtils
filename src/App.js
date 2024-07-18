import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from "./Alert";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
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
    }, 2000);
  }
  const toggleMode = () => {
    if ( mode === 'light') {
      setMode ('dark');
      document.body.style.backgroundColor='#042743';
      showAlert ("Dark Mode enabled", "success");
      document.title = "TextUtils - Dark mode"
    }
    else {
      setMode ('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light mode"

    }
   }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}
// everthing which is written inside the return statement is JSX., app.js = javascript file. JSX is 95% html, in {} = javascript.
export default App;
