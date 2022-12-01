import "./App.css";
import { AdminHome, Home, Login } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminHome" element={<AdminHome />} />

      </Routes>
    </>
  );
}

export default App;
