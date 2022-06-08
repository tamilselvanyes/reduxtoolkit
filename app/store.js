import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = toolkitRaw.default ?? toolkitRaw;
import { cakeReducer } from "../features/cake/cakeSlice.js";


 export const store = configureStore({
    reducer:{
        cake: cakeReducer,
    }
})


