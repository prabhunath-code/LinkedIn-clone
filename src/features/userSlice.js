import { createSlice } from '@reduxjs/toolkit';

const  initialState ={
  userValue:null
}
export const userSlice = createSlice({
  
  name: 'user',
 initialState,
  
  reducers: {
    login: (state,action) => {
      console.log("actionpayload",action.payload)
      state.userValue=action.payload;
    },
   
    
   logout: (state) => {
      state.userValue=null;
    },
  },
  
});

export const { login,logout } = userSlice.actions;
//selector are used to pull the information


export default userSlice.reducer;
