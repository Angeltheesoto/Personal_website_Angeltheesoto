// Dependencies
import React, { Suspense, useEffect, useState } from "react";
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
  const [envData, setEnvData] = useState();

  // data from mongodb
  const dataUrl = ["/projects", "/api/map_key"];

  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // This fetches data from more than one url and sending it through footer.js to map.js and sending the key there
  useEffect(() => {
    let requests = async () => {
      await axios
        .all(dataUrl.map((promise) => axios.get(promise, config)))
        .then(
          axios.spread((res1, res2) => {
            setHomePageData((prev) => (prev = res1.data));
            setEnvData((prev) => (prev = res2.data));
            if (!localStorage.getItem("homepagedata")) {
              localStorage.setItem("homepagedata", JSON.stringify(res1.data));
            }
          })
        );
    };
    requests();
  }, []);
  // fetch data ----------------------->>>>

  return (
    <div className="App">
      {
        <BrowserRouter>
          <Container>
            <Header />
            <Routes>
              <Route
                path="/"
                element={<Homepage homePageData={homePageData} />}
              />
              <Route
                path="/project/:id"
                element={<Projectpage homePageData={homePageData} />}
              />
            </Routes>
            <Footer envData={envData} />
          </Container>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
