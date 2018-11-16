
import { createReducer } from "../app/common/util/reducerUtil";
import { CREATE,DELETE,UPDATE } from './contants'
const initialState = [
  {
    id: "1",
    fName: "Muhammad",
    lName: "Mazhar"
  },
  {
    id: "2",
    fName: "Akram",
    lName: "Rasheed"
  }, {
    id: "3",
    fName: "Ch",
    lName: "azhrr"
  },
  {
    id: "4",
    fName: "Agthh",
    lName: "Rasheed"
  } ,{
    id: "5",
    fName: "Lara",
    lName: "ereeew"
  },
  {
    id: "6",
    fName: "Zamal",
    lName: "Rasheed"
  }
]

export const create=( state, payload)=>{
  return[...state, Object.assign({}, payload.address)]
} 
export const update=(state, payload)=>{
return[...state.filter(address=>address.id !==payload.address.id), Object.assign({}, payload.address) ]

}
export const deletee=(state , payload)=>{
  return[...state.filter(address=>address.id !== payload.addressId)]
}

export default createReducer(initialState, {
  [CREATE]: create,
  [UPDATE]: update,
  [DELETE]: deletee,
 
});
