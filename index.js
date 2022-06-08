import { store } from "./app/store.js";
import {cakeAction} from "./features/cake/cakeSlice.js"


console.log(store.getState());



store.dispatch(cakeAction.ordered());
store.dispatch(cakeAction.restocked(20));

console.log(store.getState())