import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import OurTeam from "../Pages/OurTeam";
import Media from "../Pages/Media";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/haqqımızda" element={<AboutUs />} />
      <Route path="/komandamız" element={<OurTeam />} />
      <Route path="/media" element={<Media />} />
    </Routes>
  );
};

export default Routing;
