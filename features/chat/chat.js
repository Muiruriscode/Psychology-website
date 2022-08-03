import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  messages: [],
  isLoading: false,
}

const messageSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    loadMessages: (state, action) => {
      state.messages = action.payload
    },
  },
})

export const { addMessage, loadMessages } = messageSlice.actions

export default messageSlice.reducer
