import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "myWishList",
    initialState:[],
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlistItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }

})
export const {addToWishList,removeWishlistItem} =wishlistSlice.actions
export default wishlistSlice.reducer