import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  username: '',
  email: '',
  isAdmin: false,
  token: '',
  isLoading: false,
  password: '',
  id: 0,
}

const url = ''

// export const getLoginDetails = createAsyncThunk(
//   'login/getLoginDetais',
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

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addLoginDetails: (state, action) => {
      const { email, password } = action.payload
      state.email = email
      state.password = password
    },
  },
  // extraReducers: {
  //   [getLoginDetails.pending]: (state) => {
  //     state.isLoading = true
  //   },
  //   [getLoginDetails.fulfilled]: (state, payload) => {
  //     const { username, email, isAdmin, token, id } = payload
  //     state.isLoading = false
  //     state.username = username
  //     state.email = email
  //     state.isAdmin = isAdmin
  //     state.token = token
  //     state.id = id
  //   },
  //   [getLoginDetails.rejected]: (state) => {
  //     state.isLoading = false
  //   },
  // },
})

export const { addLoginDetails } = loginSlice.actions

export default loginSlice.reducer
