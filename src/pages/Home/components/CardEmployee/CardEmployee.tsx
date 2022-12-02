import { User } from "@/models";
import React from "react";
import "./styles/CardEmployee.scss";
export interface CardEmployeeInterface {}

const CardEmployee: React.FC<User> = ({
  id,
  name,
  lastname,
  dni,
  mail,
  user,
  password,
  rol,
  birth,
  address,
  phone,
  vaccinated,
  typeOfVaccine,
  date,
  dosis,
}) => {
  return (
    <div className="cardemployee">
      <label className="title">ID</label>
      <label>{id}</label>

      <label className="title">Nombre</label>
      <label>{name}</label>

      <label className="title">Apellido</label>
      <label>{lastname}</label>

      <label className="title">Cedula</label>
      <label>{dni}</label>

      <label className="title">Email</label>
      <label>{mail}</label>

      <label className="title">User</label>
      <label>{user}</label>

      <label className="title">Password</label>
      <label>{password}</label>

      <label className="title">Rol</label>
      <label>{rol}</label>

      <label className="title">Fecha de nacimiento</label>
      <label>{birth}</label>

      <label className="title">Direccion</label>
      <label>{address}</label>

      <label className="title">Numero Celular</label>
      <label>{phone}</label>

      <label className="title">Estado de vacunacion</label>
      <label>{vaccinated === true ? "Vacunado" : "No vacunado"}</label>

      <label className="title">Tipo de vacuna</label>
      <label>{typeOfVaccine}</label>

      <label className="title">Fecha de vacunacion</label>
      <label>{date}</label>

      <label className="title">Numero de dosis</label>
      <label>{dosis}</label>
    </div>
  );
};

export default CardEmployee;
