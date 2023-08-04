import React from 'react';
import {NavLink , useNavigate} from "react-router-dom";
import { actLogOut } from '../../AuthPage/duck/actions';
import { useDispatch } from 'react-redux';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/admin/dashboard">Dash Board</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/admin/add-user">Add User</NavLink>
        </li>

        <li className="nav-item">
            <button className='btn btn-info' onClick={()=>{
              dispatch(actLogOut(navigate));
            }}>Log Out</button>
        </li>
        
      </ul>
    </div>
  </nav>
  )
}
