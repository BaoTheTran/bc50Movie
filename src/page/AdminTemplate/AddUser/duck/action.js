import * as ActionTypes from "./constants";
import api from "../../../../utils/apiUtils";

export const actAddUser =(user)=>{
    return(dispatch)=>{
        dispatch(actAddUserRequest());

        api.post("QuanLyNguoiDung/ThemNguoiDung",user)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((error)=>{
            dispatch(actAddUserFail(error));
        })
    };
};

const actAddUserRequest=()=>{
    return{
        type: ActionTypes.ADD_USER_REQUEST,
    }
}

const actAddUserSuccess=(data)=>{
    return{
        type: ActionTypes.ADD_USER_SUCCESS,
        payload: data,
    }
}

const actAddUserFail=(error)=>{
    return{
        type: ActionTypes.ADD_USER_FAIL,
        payload: error,
    }
}