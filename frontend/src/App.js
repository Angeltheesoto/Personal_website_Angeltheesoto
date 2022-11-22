// Dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

// Components
import Header from "./views/Header";
import Footer from "./views/Footer";
import Homepage from "./views/Homepage";
import Projectpage from "./views/Projectpage";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Container>
            <Header />
            {/* <Homepage /> */}
            <Route path="/" component={() => <Homepage />} exact />
            <Route path="/project" component={() => <Projectpage />} />
            <Footer />
          </Container>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
