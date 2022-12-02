import { User, LocalStorageTypes } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User[] = [];

export const empLoginSlice = createSlice({
  name: "employeeLogin",
  initialState: getLocalStorage(LocalStorageTypes.EMPLOYEE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.EMPLOYEE) as string)
    : initialState,
  reducers: {
    setLogin: (state, action) => {
      setLocalStorage("employeeLogin", state);
      return action.payload;
    },
  },
});

export const { setLogin } = empLoginSlice.actions;