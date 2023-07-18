import React, { Component } from 'react';
import axios from 'axios';

export default class ListMoviePage extends Component {
  componentDidMount(){
    //call api
    axios({
      url : "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {},
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  render() {
    return (
      <div>ListMoviePage</div>
    )
  }
}
