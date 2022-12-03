import { User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { deleteSlice, empLoginSlice, employeeSlice } from "./states";

export interface AppStore {
  employee: User[];
  employeLogin: User[];
  employeDelete: User[];
}

export default configureStore<AppStore>({
  reducer: {
    employee: employeeSlice.reducer,
    employeLogin: empLoginSlice.reducer,
    employeDelete: deleteSlice.reducer,
  },
});
