import { Employees } from "@/data";
import React, { useState } from "react";
import "./styles/Login.scss";
import { useNavigate } from "react-router-dom";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const [user, setUser] = useState({ user: "", password: "" });

  const navigate = useNavigate();

  function handleChange(e: any) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    if (user.user === "" || user.password === "") {
      alert("Ingrese todos los campos");
    } else {
      const userLogin = Employees.filter((el) => {
        if (el.user === user.user) {
          return {
            user: el.user,
            password: el.password,
            rol: el.rol,
          };
        }
      });

      const userName = userLogin[0]?.user;
      const userPass = userLogin[0]?.password;
      const userRol = userLogin[0].rol;

      if (userName === user.user && userPass === user.password) {
        if (userRol === "admin") {
          navigate("/adminHome");
        } else {
          navigate('/home')
        }
      } else {
        alert("Usuario o contraseña incorrecto");
      }
    }
  };

  return (
    <div className="container">
      <div className="login">
        <p>Kruger Test</p>
        <label htmlFor="user">User</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Insert User..."
          value={user.user}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
