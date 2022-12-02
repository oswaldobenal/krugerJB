import "./App.css";
import { AdminHome, CompletePerfil, CreateEmployee, Home, Login } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/createEmployee" element={<CreateEmployee />} />
        <Route path="/completePerfil" element={<CompletePerfil />} />

      </Routes>
    </>
  );
}

export default App;
