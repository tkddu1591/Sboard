import {createSlice} from "@reduxjs/toolkit";

let banner = createSlice({
    name : 'banner',
    initialState : true,
    reducers : {
        deleteBanner: (state, action) => {
            return false;
        }
    }
})

export const {deleteBanner} = banner.actions;
export {banner}