import { Routes, Route } from "react-router-dom";
import Signup from "./view/Signup";
import Login from "./view/Login";
import FanProfilepage from "./view/FanProfilepage";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./view/LandingPage";
import ArtistProfilepage from "./view/ArtistProfilepage";

// import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/fan" element={<FanProfilepage />} />
      <Route path="/artist" element={<ArtistProfilepage />} />
    </Routes>
  );
};

export default App;
