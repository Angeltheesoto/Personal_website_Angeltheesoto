// Dependencies
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";

// Components
import Header from "./views/Header";
import Footer from "./views/Footer";
import Homepage from "./views/Homepage";
import Projectpage from "./views/Projectpage";

function App() {
  // fetch data ----------------------->>>>
  const [homePageData, setHomePageData] = useState();

  // data from mongodb
  const dataUrl = "/projects";
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const getAllData = async () => {
    await axios
      .get(dataUrl, config)
      .then((response) => {
        setHomePageData(response.data);
        // console.log(`Data fetched Successfully: ${homePageData}`);
      })
      .catch((err) => console.log(`New Error: ${err}`));
  };
  useEffect(() => {
    getAllData();
  }, []);
  // fetch data ----------------------->>>>

  return (
    <div className="App">
      {
        <BrowserRouter>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/project/:id"
                element={<Projectpage homePageData={homePageData} />}
              />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
