import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vacancies: [],
    events: [],
    instructors: [],
    courses: [],
    graduates: [],
}

const miscSlice = createSlice({
    name: 'misc',
    initialState,
    reducers: {
        setState: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
    },
});

export const { setState } = miscSlice.actions;
export default miscSlice.reducer;
