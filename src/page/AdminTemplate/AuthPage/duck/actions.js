import { ADMIN_REQUEST,ADMIN_SUCCESS,ADMIN_FAIL,ADMIN_LOGOUT } from "./constants";
import api from "../../../../utils/apiUtils";

//giả sử BE trả thời gian timeout
const exp = 60*60*1000;

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

                //tính thời gian hết phiên đăng nhập trong tương lai
                const currentTime = new Date().getTime();
                const futureTime = currentTime + exp;

                //setLocalStorage exp 
                localStorage.setItem("futureTime", futureTime)

                //dispatch action timeOut logOut
                dispatch(actTimeOutLogOut(exp,navigate))
                
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

//log Out
export const actLogOut =(navigate)=>{
    //remove localStorage
    localStorage.removeItem("UserAdmin");
    localStorage.removeItem("futureTime");
    //redirect /auth
    navigate("/auth", {replace: true});
    //clear auth Reducer
    return{
        type : ADMIN_LOGOUT,
    }
}

const actTimeOutLogOut =(futureTime,navigate)=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch(actLogOut(navigate));
        },futureTime)
    }
}

export const actTryLogin = (navigate)=>{
    return(dispatch)=>{
        const user = JSON.parse(localStorage.getItem("UserAdmin"));

        //nếu user không tồn tại thì return cho code dừng lại ngay lúc này.
        if(!user) return;

        const futureTime = localStorage.getItem("futureTime");
        const currentTime = new Date().getTime();

        console.log(futureTime);
        console.log(currentTime);

        if(currentTime > futureTime){
            //log out 
            dispatch(actLogOut(navigate))
            return;
        }

        //set timeout
        dispatch(actTimeOutLogOut(futureTime -currentTime ,navigate ));
        dispatch(actAdminSuccess(user))

    };
}


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