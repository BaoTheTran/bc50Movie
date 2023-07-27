import React, {useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { actFetchAdmin } from './duck/actions';
import { useNavigate, Navigate } from 'react-router-dom';

export default function AuthPage() {
    const dispatch = useDispatch();
    const error = useSelector((state)=>state.adminReducer.error);
    const navigate = useNavigate();

    const [state,setState] = useState({
        taiKhoan: "",
        matKhau: "",
    });

    const handleOnchange =(event)=>{
        const {name,value}=event.target;
        setState({
            ...state,
           [name] : value,
        })
    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(state);
        //goi toi action call api
        dispatch(actFetchAdmin(state,navigate))
    }

    const renderErr=()=>{
        return error && (<div className='alert alert-danger'>${error?.response.data.content}</div>)
    }

    if(localStorage.getItem("UserAdmin")){
        return <Navigate replace to="/admin/dashboard" />
      }

  return (
    <div className='container'>

        <div className='row'>
            <div className='col-md-6 mx-auto'>
                <h3>AuthPage</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="">Tài Khoản</label>
                        <input type="text" className='form-control' onChange={handleOnchange}
                        name ="taiKhoan"
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Mật Khẩu</label>
                        <input type="text" className='form-control'  onChange={handleOnchange}
                        name='matKhau'
                        />
                    </div>
                    {/* {renderErr()} */}
                    {error && (<div className='alert alert-danger'>${error?.response.data.content}</div>)}
                    <button className='btn btn-warning'>Đăng nhập</button>
                </form>
            </div>
        </div>
    </div>
  )
}
