import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


// add all needed icons here
library.add(faTimes, faBars)

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/fydp-website" element={<Home />} exact />
      <Route path="/fydp-website/about-us" element={<AboutUs />} />
      <Route path="/fydp-website/blog" element={<Blog />} />
    </Routes>
    </>
  );
}

export default App;
