import { User, LocalStorageTypes } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User[] = [];

export const deleteSlice = createSlice({
  name: "employeeDelete",
  initialState: getLocalStorage(LocalStorageTypes.DELETE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.DELETE) as string)
    : initialState,
  reducers: {
    deleteEmployee: (state, action) => {
      setLocalStorage("employeeDelete", state);
      return action.payload;
    },
  },
});

export const { deleteEmployee } = deleteSlice.actions; 