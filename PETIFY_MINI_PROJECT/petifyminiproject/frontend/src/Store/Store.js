import {configureStore} from '@reduxjs/toolkit'
import  userslice  from './Slice/Userslice'

const store=configureStore({
    reducer:{
        userdata:userslice
    }
})

export default store