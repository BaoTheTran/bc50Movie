import React, { Component } from 'react';
import {Outlet} from "react-router-dom";
import NavBar from './_components/NavBar';
import Footer from './_components/Footer';

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {/* dinh tuyen vao cac component con. */}
        <Outlet/>
        <Footer/>
      </div>
    )
  }
}
