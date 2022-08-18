import { createSlice } from '@reduxjs/toolkit'

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
    clearMessages: (state) => {
      state.messages = []
    },
  },
})

export const { addMessage, loadMessages, clearMessages } = messageSlice.actions

export default messageSlice.reducer
