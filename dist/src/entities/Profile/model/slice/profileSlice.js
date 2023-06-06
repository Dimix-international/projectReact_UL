import { createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
var initialState = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};
export var profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchProfileData.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
        })
            .addCase(fetchProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var profileActions = profileSlice.actions;
export var profileReducer = profileSlice.reducer;
