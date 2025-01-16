import { configureStore } from "@reduxjs/toolkit";


export const catalog =(value)=> {
    return {
        type: "catalog",
        payload: value
    }
}

const initialState = {
    auto: {
        items: 300
    },
    // filters: {
    //     status: "all",
    // },
}

const rootReducer = (state = initialState, action) => {
    return state;
}

export const store = configureStore({
    reducer: rootReducer,
});
