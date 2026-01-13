import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        {/* <Navbar title="MyApp" about="About Us"/> */}
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <div className="container my-3"> */}

          {/* <AboutUs mode={mode}/>  */}
          {/* 
          <Routes>
            <Route exact path="/about"element={<AboutUs mode={mode} />}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
          </Routes>
        {/* </div> */}
      {/* </Router> */}


      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
