import { Botton, Navbar } from "@/components";
import { AppStore } from "@/redux/store";
import { HomeLayout } from "@/styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EmployeeTable } from "./components/EmployeeTable";
export interface AdminHomeInterface {}

const AdminHome: React.FC<AdminHomeInterface> = () => {
  const userLogin = useSelector((store:AppStore) => store.employeLogin);
  return (
    <>
      <Navbar name={userLogin[0].name}/>
      <HomeLayout>
        <h1>Empleados</h1>
        <EmployeeTable />
        <Link to={"/createEmployee"}>
          <Botton name="Nuevo Empleado" />
        </Link>
      </HomeLayout>
    </>
  );
};

export default AdminHome;
