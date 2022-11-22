// Dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Components
// import Homepage from "./views/Homepage";
import Essential from "./views/Essential";

function App() {
  return (
    <div className="App">
      {
        <>
          {/* <Homepage /> */}
          <Essential />
        </>
      }
    </div>
  );
}

export default App;
