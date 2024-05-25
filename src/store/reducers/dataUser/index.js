import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    email: '',
    username: '',
    tokenSession: '',
    timestamp: null,
};

// Create state data user
const dataUser = createSlice({
    name: "dataUser",
    initialState,
    reducers: {
        setDataUser: (_, action) => ({
            ...action.payload,
        }),
        clear: () => ({ ...initialState }), // Corrected typo here
    },
});

// Correct export statements
export const userReducer = dataUser.reducer; 
export const userActions = dataUser.actions;
