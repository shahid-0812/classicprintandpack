import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Services from "./pages/services.jsx";
import ContactUs from "./pages/contact-us.jsx";
import Technology from "./pages/technology.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
      {/* <Footer /> */}



    </>
  )
}

export default App
