import { CREATE, DELETE, UPDATE } from './contants';
import { toastr } from "react-redux-toastr"


export const update = (address) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE,
      payload: { address }
    })
    toastr.success('Success', 'Contact updated successfully!');
  } catch (error) {
    console.log(error);
    toastr.error('Oops', 'Something went wrong!');
  }
}
export const deletee = (addressId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE,
      payload: { addressId }
    })
    toastr.success('Success', 'Contact deleted successfully!');
  } catch (error) {
    console.log(error);
    toastr.error('Oops', 'Something went wrong!');
  }
}
export const create = (address) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE,
      payload: { address }
    })
    toastr.success('Success', 'Contact added successfully!');
  } catch (error) {
    console.log(error);
    toastr.error('Oops', 'Something went wrong!');
  }
}
//Without redux thunk
// export const update = (address) => {
//   return {
//     type: UPDATE,
//     payload: { address }
//   }
// }