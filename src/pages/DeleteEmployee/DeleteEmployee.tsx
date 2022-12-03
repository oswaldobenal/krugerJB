import { addEmployee } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { HomeLayout } from "@/styled-components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/DeleteEmployee.scss";
export interface DeleteEmployeeInterface {}

const DeleteEmployee: React.FC<DeleteEmployeeInterface> = () => {
  const navigate = useNavigate();

  const statePeople = useSelector((store: AppStore) => store.employee);

  const dispatch = useDispatch();

  const [dni, setDni] = useState("");

  const handleChange = (e: any) => {
    setDni(e.target.value);
  };

  const eliminar = () => {
		const validacion = statePeople.filter(el => el.dni == dni);
    const newEmployees = statePeople.filter((el) => el.dni !== dni);
    if (validacion.length) {
      dispatch(addEmployee(newEmployees));
      alert("Usuario eliminado exitosamente");
      navigate("/adminHome");
    } else {
      alert("Usuario no encontrado, verifique su DNI");
    }
  };
  return (
    <HomeLayout>
      <div className="deleteemployee">
        <p>Panel de eliminacion</p>
        <input
          type="text"
          placeholder="Ingrese el DNI a eliminar"
          onChange={handleChange}
        />
        <button onClick={eliminar}>Eliminar</button>
        <button onClick={() => navigate("/adminHome")}>Cancelar</button>
      </div>
    </HomeLayout>
  );
};

export default DeleteEmployee;
