import { ADMIN_REQUEST,ADMIN_SUCCESS,ADMIN_FAIL } from "./constants";
import api from "../../../../utils/apiUtils";


//call api
export const actFetchAdmin =(user,navigate)=>{
    return(dispatch)=>{
        dispatch(actAdminRequest());
        api.post("QuanLyNguoiDung/DangNhap",user)
        .then((res)=>{
            
            if(res.data.statusCode === 200){
                console.log(res.data);
                const user = res.data.content;
                if(!(user.maLoaiNguoiDung === "QuanTri"))
                //nhớ phủ định điều kiện trên (thay vì đk là khachHang vì tránh phát sinh thêm nhiều loại khách hàng sau này)
                {
                    const error = {
                        response:{
                            data:{
                                content: "Bạn không được cấp quyền truy cập!",
                            },
                        },
                    }
                    //show error
                    //đưa xuống catch
                    return Promise.reject(error)
                }
                
                //QuanTri => Tra ve thong tin nguoi dung
                dispatch(actAdminSuccess(user));
                
                //QuanTri => Luu trang thai login
                //conver JSON => string
                localStorage.setItem("UserAdmin", JSON.stringify(user));

                //Quan Tri => redirect admin/dashboard
                navigate("/admin/dashboard", {replace: true});
            }
        })
        .catch((error)=>{
            dispatch(actAdminFail(error))
            console.log(error.response.data.content);
        })
    };
};


const actAdminRequest=()=>{
    return{
        type: ADMIN_REQUEST,
    }
}

const actAdminSuccess=(data)=>{
    return{
        type: ADMIN_SUCCESS,
        payload: data,
    }
}

const actAdminFail=(error)=>{
    return{
        type: ADMIN_FAIL,
        payload: error,
    }
}