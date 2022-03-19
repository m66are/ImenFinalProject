import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  infos: [{
    name:"test",
    age:"",
    email:"",
    phone:"",
    cv:"",
    lm:""
  }],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    ADDINFO: (state,action) => {
      state.infos=[...state.infos,action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { ADDINFO } = mainSlice.actions

export default mainSlice.reducer