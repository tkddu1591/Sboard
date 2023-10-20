import {createSlice} from "@reduxjs/toolkit";

let orderProducts = createSlice({
    name : 'orderProducts',
    initialState : [],
    reducers : {
        insertOrderProduct(state,action){
            return action.payload
        },
        deleteOrderProduct: (state, action) => {
            const productIdToDelete = action.payload;
            return state.filter(product => product.id !== productIdToDelete);
        },
        deleteAllProduct: (state, action) => {
            return [];
        }
    }
})
let orderTotal=createSlice({
    name : 'orderTotal',
    initialState : {
        totalCount: 0,
        totalProductPrice: 0,
        totalDiscountPrice: 0,
        totalDelivery: 0,
        totalPoint: 0,
        totalOrderPrice: 0,
    },
    reducers: {
        insertOrderTotal(state,action){
            return action.payload
        },
        deleteOrderTotal: (state, action) => {
            return [];
        }
    }
})
export const {insertOrderProduct,deleteOrderProduct,deleteAllProduct} = orderProducts.actions;
export const {insertOrderTotal,deleteOrderTotal} = orderTotal.actions;
export {orderProducts, orderTotal}
