import { configureStore } from '@reduxjs/toolkit'
import createWorkoutReducer from './createWorkoutSlice'

export const store = configureStore({
  reducer: {
    newWorkout: createWorkoutReducer,
  },
})