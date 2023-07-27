import React ,{useState}from 'react';
import { actAddUser } from './duck/action';
import { useSelector,useDispatch } from 'react-redux';


export default function AddUser() {

  const dispatch = useDispatch();

  const [state,setState]= useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const handleOnchange =(event)=>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name] :value,
    })
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(state);
    dispatch(actAddUser(state))
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 mx-auto'>
                <h3>ADD USER</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="">Tài Khoản</label>
                        <input type="text" className='form-control' 
                        name='taiKhoan'
                        onChange={handleOnchange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Mật Khẩu</label>
                        <input type="text" className='form-control' 
                        name='matKhau' 
                        onChange={handleOnchange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control' 
                        name='email' 
                        onChange={handleOnchange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="">Số điện thoại</label>
                        <input type="text" className='form-control' 
                        name='soDt' 
                        onChange={handleOnchange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="">Mã loại người dùng</label>
                        <select name="maLoaiNguoiDung" id="" className='form-control' onChange={handleOnchange}>
                          <option value="KhachHang">Khách hàng</option>
                          <option value="QuanTri ">Quản trị</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="">Họ tên</label>
                        <input type="text" className='form-control' 
                        name='hoTen' 
                        onChange={handleOnchange}
                        />
                    </div>
                    <button className='btn btn-info'>Đăng nhập</button>
                </form>
            </div>
        </div>
    </div>
  )
}

