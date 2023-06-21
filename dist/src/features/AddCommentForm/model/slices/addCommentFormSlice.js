import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    error: undefined,
    text: '',
};
export var addCommentFormSlice = createSlice({
    name: 'addCommentFormSlice',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        },
    },
});
export var addCommentSliceActions = addCommentFormSlice.actions;
export var addCommentSliceReducer = addCommentFormSlice.reducer;
