import { store } from "./app/store.js";
import {cakeAction} from "./features/cake/cakeSlice.js"
import {icecreamAction} from "./features/icecream/iceSlice.js"



//cake actions

store.dispatch(cakeAction.ordered());
store.dispatch(cakeAction.restocked(20));


//Ice Cream Actions
store.dispatch(icecreamAction.ordered());
store.dispatch(icecreamAction.restocked(50));

