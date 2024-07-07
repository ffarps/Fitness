import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Workouts from './pages/Workouts';
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
