import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { todoSliceReduser } from './todoSlice'

const reducers = combineReducers({
    todo: todoSliceReduser
})

export const store = configureStore({
    reducer: reducers
})