import *  as toolkitRaw from "@reduxjs/toolkit"
const  {createSlice} = toolkitRaw.default ?? toolkitRaw;

const initialState = {
    numOfIcecreams: 25,
}


export const iceCreamSlice =  createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state)=>{
            state.numOfIcecreams--;
        },

        restocked: (state,action)=>{
            state.numOfIcecreams += action.payload;
        }
    }
})

export const icecreamReducer = iceCreamSlice.reducer;
export const icecreamAction =  iceCreamSlice.actions;