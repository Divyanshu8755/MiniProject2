import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from 'jwt-decode'
 
const initialState ={
    _id:'',
    postid:'',
    token:''
}
const extractuserinfo=(token)=>{
    try {
        const decodetoken=jwtDecode(token);
        return{
            _id:decodetoken.id
        }
    } catch (error) {
        
        return{
            _id:''
        }
    }
}
export const userslice=createSlice({
    name:'userdata',
    initialState,
    reducers:{
        addtoken:(state,action)=>{
           state.token=action.payload
           const {_id}=extractuserinfo(action.payload)
        //    console.log(_id)
            state._id=_id
        },
        addpostid:(state,action)=>{
            state.postid=action.payload
        }
        ,
        resetstate:()=>initialState
    }
})

export const {addtoken,addpostid}=userslice.actions
export default userslice.reducer