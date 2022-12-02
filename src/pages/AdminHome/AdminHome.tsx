import { Botton, Navbar } from "@/components";
import { HomeLayout } from "@/styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { EmployeeTable } from "./components/EmployeeTable";
export interface AdminHomeInterface {}

const AdminHome: React.FC<AdminHomeInterface> = () => {
  return (
    <>
      <Navbar />
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
