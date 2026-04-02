import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   setUser:() => {
    // state.isAuthenticated = true;
   }
  }, 
});

export const {setUser} =authSlice.actions;
export default authSlice.reducer;




