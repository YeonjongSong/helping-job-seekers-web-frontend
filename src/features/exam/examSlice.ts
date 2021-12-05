import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ExamState {
    value: boolean[];
}

const initialState: ExamState = {
    value: [false, false, false, false, false],
}

export const examSlice = createSlice({
    name: 'exam',
    initialState,
    reducers: {
        turnOn: (state, action: PayloadAction<number>) => {
            state.value[action.payload] = true
        },

        turnOff: (state, action: PayloadAction<number>) => {
            state.value[action.payload] = false
        },
    }
})

export const { turnOn, turnOff } = examSlice.actions;

export const selectExam = (state: RootState) => state.exam.value;

export default examSlice.reducer;