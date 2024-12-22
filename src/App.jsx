import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import Footer from "./component/Footer.jsx";
import About from "./component/About.jsx";
import Services from "./component/Services.jsx"
import Contact from "./component/Contact.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/service' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
