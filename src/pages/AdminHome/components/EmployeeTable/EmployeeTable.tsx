import { Employees } from "@/data";
import { User } from "@/models";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
export interface EmployeeTableInterface {}

const EmployeeTable: React.FC<EmployeeTableInterface> = () => {
  const [seletedPeople, setSelectedPeople] = useState<User[]>([]);
  const pageSize = 5;
  const statePeople = Employees.map((employe) => employe);

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
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "lastname",
      headerName: "Lastname",
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
