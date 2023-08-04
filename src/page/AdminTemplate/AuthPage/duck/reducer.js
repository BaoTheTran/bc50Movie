import { ADMIN_REQUEST,ADMIN_SUCCESS,ADMIN_FAIL ,ADMIN_LOGOUT} from "./constants";

const initialState={
    loading: false,
    data: null,
    error: null,
};

export const adminReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADMIN_REQUEST:{
            state.loading= true;
            state.data= null;
            state.error= null;
            return{...state}
        }

        case ADMIN_SUCCESS:{
            state.loading= false;
            state.data= action.payload;
            state.error= null;
            return{...state}
        }

        case ADMIN_FAIL:{
            state.loading= false;
            state.data= null;
            state.error= action.payload;
            return{...state}
        }

        case ADMIN_LOGOUT:{
            state.loading= false;
            state.data= null;
            state.error= null;
            return{...state}
        }
            
    
        default:
            return {...state}
    }
}