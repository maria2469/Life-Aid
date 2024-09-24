
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Main from "./components/Main/Main"; // Import Main component
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/main" element={<Main />} /> {/* Add Main Route */}
      </Routes>
    </Router>
  );
}

export default App;
