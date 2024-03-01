import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuDetail from "./components/MenuDetail";
import MenuPage from "./components/MenuPage";
import CreateMenu from "./components/CreateMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* FOR SWITCHING THE PAGES */}
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/createmenu" element={<CreateMenu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
