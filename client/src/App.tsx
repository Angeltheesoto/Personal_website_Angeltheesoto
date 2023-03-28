import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import axios, { AxiosRequestConfig } from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import NorthIcon from "@mui/icons-material/North";

// Components
import Header from "./views/Header";
import Footer from "./views/Footer";
import Homepage from "./views/homepage/Homepage";
import Projectpage from "./views/projectpage/Projectpage";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Blog from "./components/blog/Blog";
import BlogPage from "./views/blogpage/BlogPage";

function App() {
  // ?fetch data ----------------------->>>>
  const [homePageData, setHomePageData] = useState<any | undefined>();
  const [envData, setEnvData] = useState<string | undefined>(undefined);
  const [showButton, setShowButton] = useState<boolean>();

  // data from mongodb
  const dataUrl = ["/projects", "/api/map_key"];
  const config: AxiosRequestConfig = {
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
            setHomePageData((prev: any) => (prev = res1.data));
            setEnvData((prev) => (prev = res2.data));
            if (!localStorage.getItem("homepagedata")) {
              localStorage.setItem("homepagedata", JSON.stringify(res1.data));
            }
          })
        );
    };
    // This slows down the requests so you can see the loader when fetching project links.
    // const timer = setTimeout(() => {
    //   requests();
    // }, 5000);
    // return () => clearTimeout(timer);

    // Scroll to top button
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 1000 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);

    requests();
  }, []);
  // ?fetch data ----------------------->>>>

  return (
    <div className="App" id="top">
      {
        <BrowserRouter>
          <Helmet>
            <title>Home Page</title>
            <meta
              name="Description"
              content="My personal website showcasing my skills as a software engineer."
            />
            <meta
              name="keywords"
              content="angeltheesoto, Angel Soto, software developer, frontend developer, backend developer, fullstack developer, portfolio"
            />
          </Helmet>
          <div className="header-display"></div>
          <Header />
          <Container>
            {/* This automatically scrolls to top when page url changes */}
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={<Homepage homePageData={homePageData} />}
              />
              <Route
                path="/project/:id"
                element={<Projectpage homePageData={homePageData} />}
              />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
            <Footer envData={envData} />
          </Container>
          {showButton && (
            <div className={showButton ? "show-container" : "none"}>
              <Link to="top" offset={-300}>
                <NorthIcon
                  sx={{
                    fontSize: 50,
                    color: "white",
                    width: "100%",
                  }}
                />
              </Link>
            </div>
          )}
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
