import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  username: '',
  email: '',
  isAdmin: false,
  token: '',
  isLoading: false,
  id: 0,
  password: '',
  confirm: '',
}

// const url = ''

// export const getRegisterDetails = createAsyncThunk(
//   'login/getRegisterDetais',
//   async () => {
//     try {
//       const { data } = await axios.post(url, {
//         email: state.email,
//         password: state.password,
//       })
//       return data
//     } catch (error) {
//       return thunkAPI.rejectWithValue('something went wrong')
//     }
//   }
// )

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    addRegisterDetails: (state, action) => {
      const { email, password, confirm, username } = action.payload
      state.email = email
      state.password = password
      state.confirm = confirm
      state.username = username
    },
    // extraReducers: {
    //   [getRegisterDetails.pending]: (state) => {
    //     state.isLoading = true
    //   },
    //   [getRegisterDetails.fulfilled]: (state, payload) => {
    //     // const { username } = payload
    //     // state.username = username
    //     console.log(payload)
    //   },
    //   [getRegisterDetails.rejected]: (state) => {
    //     state.isLoading = false
    //   },
    // },
  },
})

export const { addRegisterDetails } = registerSlice.actions

export default registerSlice.reducer
