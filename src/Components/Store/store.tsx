import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initstate } from "./state";

const SliceforBasket = createSlice({
    name : "Basket",
    initialState : initstate,
    reducers : {
        add : (state, action) => {
            // console.log(action.payload);
            return state.map(item => {
                
                if (item.id !== action.payload.id) {
                  return item
                }
        
                return {
                  ...item,
                  addedstatus: true
                }
              })
            },
            remove: (state, action) => {
              return state.map(item => {
                if (item.id !== action.payload.id) {
                  return item
                }
        
                return {
                  ...item,
                  addedstatus: false
                }
              })
            }
          }
        })

 const store = configureStore({reducer: SliceforBasket.reducer })
 export const {add , remove} = SliceforBasket.actions
 export {store}