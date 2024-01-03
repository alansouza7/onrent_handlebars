import {createSlice} from '@reduxjs/toolkit'
import { order } from '../../data'
import { toast } from "react-toastify"


//set initial state
const initialState = {
  module: order,
  sideBarSelected: [],
  moduleTitle: "Order", 
  status: false,
  moduleSearched: [],
}



//create an object name is the key and the state
const moduleSlice = createSlice({
  name: 'module', 
  initialState,
  reducers: {
    selectModule: (state, {payload}) =>{
        const moduleSelected = payload.target.value
        const title = payload.target.ariaLabel
        const properties = order.filter(item => item.module === moduleSelected)
        state.module.map(item => item.status = false)

        state.module = properties
        state.moduleTitle = title
        state.moduleValue = moduleSelected
    },
    handleStatus: (state, {payload})=>{
       const name = payload
       const updatedSideBar = state.module.find(item => item.name === name)
       state.module.map(item => item.status = false)
       updatedSideBar.status = true
       
    }, 
    copyToast: ( {payload})=>{
        const input = payload
        navigator.clipboard.writeText(input) 
       toast.success("Copied!")
    }, 
    searchModule: (state, {payload})=>{
       let value = payload.target.value

       const newModule = order.filter(item =>{
        if(value.length === 0){
            state.moduleSearched = []
        } if(value.length > 0){
            return item.input.includes(value)
        }
       })

      state.moduleSearched = newModule
    }

  }
})

export const {selectModule, handleStatus, copyToast, searchModule} = moduleSlice.actions

//export the reducer of that object - it will be used to update the state
export default moduleSlice.reducer