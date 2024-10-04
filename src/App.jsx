import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
// import graduate1 from "./Assets/graduate1.jpg"; // Import your graduate images

import Body from "./components/destructure/Body.jsx";
import Footer from "./components/destructure/Footer.jsx";
import Login from "./components/destructure/Form.jsx";
import Signup from "./components/destructure/Signup.jsx";
import Layout from "./components/destructure/Layout.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/body" element={<Body />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          .
        </Routes>
      </Router>
    </div>
  );
}
export default App;
