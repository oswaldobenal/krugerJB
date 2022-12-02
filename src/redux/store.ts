import { User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./states";

export interface AppStore {
  employee: User[];
}

export default configureStore<AppStore>({
  reducer: {
    employee: employeeSlice.reducer,
  },
});
