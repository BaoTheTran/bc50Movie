import { LIST_MOVIE_REQUEST ,LIST_MOVIE_SUCCESS,LIST_MOVIE_FAIL} from "./constants";
import axios from "axios";

//call api
export const actFetchListMovie=()=>{
    return(dispatch)=>{
        dispatch(actListMovieRequest());

        axios({
            url : "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
            method: "GET",
            headers: {
              TokenCybersoft :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A",
            },
          })
          .then((res)=>{
            if(res.data.statusCode === 200){
                dispatch(actListMovieSuccess(res.data.content))
            } 
          })
          .catch((error)=>{
            dispatch(actListMovieFail(error))
          })
    }
}

export const actListMovieRequest =()=>{
    return{
        type : LIST_MOVIE_REQUEST,

    }
}

export const actListMovieSuccess =(data)=>{
    return{
        type : LIST_MOVIE_SUCCESS,
        payload: data,
    }
}

export const actListMovieFail =(error)=>{
    return{
        type : LIST_MOVIE_FAIL,
        payload: error,
    }
}