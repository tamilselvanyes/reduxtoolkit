import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = toolkitRaw.default ?? toolkitRaw;
import { cakeReducer } from "../features/cake/cakeSlice.js";
import { icecreamReducer } from '../features/icecream/iceSlice.js';
import pkg from 'redux-logger'
const {createLogger} = pkg;

const logger = createLogger();


 export const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


