import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// add all needed icons here
library.add(faTimes, faBars)
function App() {
  return (
    <>
      <div className='App-container'>
      <NavBar />
      <Routes>
        <Route path="/fydp-website" element={<Home />} exact />
        <Route path="/fydp-website/about-us" element={<AboutUs />} />
        <Route path="/fydp-website/blog" element={<Blog />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
