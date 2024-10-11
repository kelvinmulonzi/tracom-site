import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
// import graduate1 from "./Assets/graduate1.jpg"; // Import your graduate images

import Body from "./components/destructure/Body.jsx";
import Footer from "./components/destructure/Footer.jsx";
import Login from "./components/destructure/Form.jsx";
import Signup from "./components/destructure/Signup.jsx";
import Layout from "./components/destructure/Layout.jsx";
import About from "./components/destructure/About.jsx";
import PrivateRoute from "./protected route/PrivateRoute.jsx";
import Contact from "./components/destructure/Contact.jsx";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Body />} /> {/* Public route */}
            <Route path="/login" element={<Login />} /> {/* Public route */}
            <Route path="/signup" element={<Signup />} /> {/* Public route */}
            <Route path="/footer" element={<Footer />} /> {/* Public route */}
            <Route path="/contact" element={<Contact />} /> {/* Public route */}
            
            {/* Protected route for /about */}
            <Route path="/about" element={<PrivateRoute element={<About />} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
