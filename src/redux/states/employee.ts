import { LocalStorageTypes, User } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User[] = [];

export const employeeSlice = createSlice({
  name: "employee",
  initialState: getLocalStorage(LocalStorageTypes.EMPLOYEE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.EMPLOYEE) as string)
    : initialState,
  reducers: {
    addEmployee: (state, action) => {
      setLocalStorage("employee", state);
      return action.payload;
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
