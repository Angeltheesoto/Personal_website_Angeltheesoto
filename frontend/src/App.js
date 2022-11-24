// Dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

// Components
import Header from "./views/Header";
import Footer from "./views/Footer";
import Homepage from "./views/Homepage";
import Projectpage from "./views/Projectpage";
import notes from "./data/notes";
// import ProjectpageTwo from "./views/ProjectpageTwo";
// import ProjectpageThree from "./views/ProjectpageThree";
// import ProjectpageFour from "./views/ProjectpageFour";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/project/:id" element={<Projectpage />} />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
