import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Body from "./components/destructure/Body.jsx";
import Footer from "./components/destructure/Footer.jsx";
import Form from "./components/destructure/Form.jsx"; 
import Signup from "./components/destructure/Signup.jsx";
import Layout from "./components/destructure/Layout.jsx";
import About from "./components/destructure/About.jsx";
import Contact from "./components/destructure/Contact.jsx";
import Services from "./components/destructure/Services.jsx";
import Team from "./components/destructure/Team.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Body />} /> 
            <Route path="/form" element={<Form />} /> 
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/footer" element={<Footer />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
           
            
            <Route path="/about" element={<About />} /> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;