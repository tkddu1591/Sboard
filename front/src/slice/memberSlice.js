import {createSlice} from "@reduxjs/toolkit";

let member = createSlice({
    name : 'member',
    initialState : '',
    reducers : {
        insertMember:(state, action) => {
            return action.payload;
        },
        deleteMember: (state, action) => {
            return '';
        }
    }
})

export const {deleteMember, insertMember} = member.actions;
export {member}