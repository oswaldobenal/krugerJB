import { User } from "@/models";
import store, { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
export interface EmployeeTableInterface {}

const EmployeeTable: React.FC<EmployeeTableInterface> = () => {
  //Optenemos la data desde el LocalStorage
  const stateEmployee = useSelector((store: AppStore) => store.employee);

  const [seletedPeople, setSelectedPeople] = useState<User[]>([]);
  const pageSize = 5;
  const statePeople = stateEmployee.map((emp) => emp);

  const findPerson = (person: User) =>
    !!seletedPeople.find((p) => p.id === person.id);

  const filterPerson = (person: User) =>
    seletedPeople.filter((p) => p.id !== person.id);

  const handleChange = (person: User) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...seletedPeople, person];

    setSelectedPeople(filteredPeople);
  };

  const colums = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "lastname",
      headerName: "Apellido",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "dni",
      headerName: "Ceduda",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "mail",
      headerName: "Email",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "vaccinated",
      headerName: "Estado de vacunacion",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value === true ? "Vacunado": "No vacunado"}</>,
    },
    {
      field: "typeOfVaccine",
      headerName: "Tipo de vacuna",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "date",
      headerName: "Fecha de vacunacion",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      rows={statePeople}
      columns={colums}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default EmployeeTable;
