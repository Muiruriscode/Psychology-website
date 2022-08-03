import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  email: '',
  isAdmin: false,
  token: '',
  id: 0,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      const { id, email, username, isAdmin, token } = action.payload
      state.email = email
      state.username = username
      state.id = id
      state.isAdmin = isAdmin
      state.token = token
    },
  },
})

export const { addUserDetails } = userSlice.actions

export default userSlice.reducer
