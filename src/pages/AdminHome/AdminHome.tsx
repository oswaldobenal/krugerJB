import { Botton, Navbar } from "@/components";
import { addEmployee, deleteEmployee } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { HomeLayout } from "@/styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EmployeeTable } from "./components/EmployeeTable";
export interface AdminHomeInterface {}

const AdminHome: React.FC<AdminHomeInterface> = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((store: AppStore) => store.employeLogin);

  const listDel = useSelector((store: AppStore) => store.employeDelete);

  const statusEmployee = useSelector((store: AppStore) => store.employee);

  return (
    <>
      <Navbar name={userLogin[0].name} />
      <HomeLayout>
        <h1>Empleados</h1>
        <EmployeeTable />
        <Link to={"/createEmployee"}>
          <Botton name="Nuevo Empleado" />
        </Link>
        <Link to={"/delete"}>
          <button className="button">Eliminar🗑️</button>
        </Link>
        <Link to={"/"}>
          <Botton name="Salir"/>
        </Link>
      </HomeLayout>
    </>
  );
};

export default AdminHome;
