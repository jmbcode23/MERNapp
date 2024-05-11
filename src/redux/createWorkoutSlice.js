import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const createWorkoutSlice = createSlice({
  name: 'addWorkout',
  initialState,
  reducers: {
    handleCreateWorkout: (state) => {
      state.value = true; 
    },
    handleOk: (state) => {
        state.value = false
    },
    handleCancel: (state) => {
        state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { handleCreateWorkout, handleCancel, handleOk } = createWorkoutSlice.actions

export default createWorkoutSlice.reducer