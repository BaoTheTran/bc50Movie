import { combineReducers } from "redux";
import listMovieReducer from "../page/HomeTemplate/ListMoviePage/duck/reducer";
import detailMovieReducer from "../page/HomeTemplate/detailMovie/duck/reducer";
import { adminReducer } from "../page/AdminTemplate/AuthPage/duck/reducer";

const rootReducer = combineReducers({
    //child reducer
    listMovieReducer,
    detailMovieReducer,
    adminReducer,
})

export default rootReducer;