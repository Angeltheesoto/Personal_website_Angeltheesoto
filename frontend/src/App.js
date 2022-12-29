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
  // fetch data
  const [homePageData, setHomePageData] = useState();
  const fetchData = async (e) => {
    try {
      const response = await axios.get("http://localhost:5000/projects");
      setHomePageData(response.data);
      console.log("data fetched successfully!");
    } catch (error) {
      console.error(`Data did not fetch. Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
    console.log({ homePageData });
  }, []);

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
