import { User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { empLoginSlice, employeeSlice } from "./states";

export interface AppStore {
  employee: User[];
  employeLogin: User[];
}

export default configureStore<AppStore>({
  reducer: {
    employee: employeeSlice.reducer,
    employeLogin: empLoginSlice.reducer,
  },
});
