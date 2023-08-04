import React, { useEffect } from 'react';
import {Outlet} from "react-router-dom";
import { Navigate , useNavigate } from 'react-router-dom';
import Navbar from './_component/navbar';
import { useDispatch } from 'react-redux';
import { actTryLogin } from './AuthPage/duck/actions';

export default function AdminTemplate(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      dispatch(actTryLogin(navigate));
    }, []);

    //kiem tra da login vao he thong chua?
    if(!localStorage.getItem("UserAdmin")){
      //redirect => auth
      return <Navigate to="/auth" replace />
    }

    

    return (
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    )
}

