import "./App.css";
import About from "./Components/About";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
      {/* passing props */}
      <Navbar title = "TextUtils" />
      <div className="container">
        {/* <TextForm heading = "Enter the text to analyze"></TextForm> */}
        <About></About>
      </div>
    </>
  );
}
// everthing which is written inside the return statement is JSX., app.js = javascript file. JSX is 95% html, in {} = javascript.
export default App;
