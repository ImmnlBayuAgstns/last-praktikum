import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MenuDetail from "./components/MenuDetail";
import MenuPage from "./components/MenuPage";
import CreateMenu from "./components/CreateMenu";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import { useContext } from "react";
import { LoginContext } from "./components/LoginContext";

function App() {
  const localUsername = localStorage.getItem("username")
  const { username } = useContext(LoginContext)
  return (
    <div className="App">
      <Router>
        {/* ROUTER FOR SWITCHING THE PAGES */}
        <Routes>
          {localUsername ?
            <>
              <Route path="/" index element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/:id" element={<MenuDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/createmenu" element={<CreateMenu />} />
              <Route path="/login" element={username ? <Navigate to={"/"} /> : <Login />} />
              <Route path="/logout" element={username ? <Logout /> : <Navigate to={"/"} />} />
            </> : <>
              <Route path="/login" element={<Login />}></Route>
              <Route index element={<Login />} />
            </>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
