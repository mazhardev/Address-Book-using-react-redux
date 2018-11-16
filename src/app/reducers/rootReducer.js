import { combineReducers } from "redux";
import Reducer from "../../features/Reducer";
import { reducer as FormReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr"
const rootReducer = combineReducers({
  test: Reducer,
  form: FormReducer,
  toastr:toastrReducer
});

export default rootReducer;
