import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: {},
};
export var scrollRestorationSlice = createSlice({
    name: 'scrollRestorationSlice',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scroll[payload.path] = payload.position;
        },
    },
});
export var scrollRestorationActions = scrollRestorationSlice.actions;
export var scrollRestorationReducer = scrollRestorationSlice.reducer;
