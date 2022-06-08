import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = toolkitRaw.default ?? toolkitRaw;

const initialState = {
    numOfCake:10,
}

 export const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers:{
        ordered: (state)=>{
            state.numOfCake--;
        },
        restocked: (state,action)=>{
            state.numOfCake += action.payload;
        }
    }

})


export const  cakeReducer =  cakeSlice.reducer;
export const  cakeAction = cakeSlice.actions;



