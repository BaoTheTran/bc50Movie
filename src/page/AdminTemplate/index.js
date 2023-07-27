import React, { Component } from 'react';
import {Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';

export default class AdminTemplate extends Component {
  render() {
    //kiem tra da login vao he thong chua?
    if(!localStorage.getItem("UserAdmin")){
      //redirect => auth
      return <Navigate to="/auth" replace />
    }

    return (
      <div><Outlet/></div>
    )
  }
}
