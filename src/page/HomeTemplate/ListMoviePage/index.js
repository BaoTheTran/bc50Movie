import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';

export default class ListMoviePage extends Component {
  constructor(props){
    super(props); 
    this.state={
      loading: false,
      data:null,
      error: null,
    }
  }
  componentDidMount(){
    //call api
    //pending
    this.setState({
      loading: true,
      data:null,
      error: null,
    });

    axios({
      url : "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
      headers: {
        TokenCybersoft :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A",
      },
    })
    .then((res)=>{      
      if(res.data.statusCode === 200){
        console.log(res.data.content);
        this.setState({
          loading: false,
          data:res.data.content,
          error: null,
        });
      }
    })
    .catch((error)=>{
      console.log(error);
      this.setState({
        loading: false,
        data:null,
        error,
      });
    })
  }

  renderListMovie=()=>{
    const {data} =this.state;
    return data?.map((movie)=><MovieItem key={movie.maPhim} movie={movie}/>);
  }

  render() {
    console.log(this.state);
    return (
      <div className='container'>
        <h3>ListMoviePage</h3> 
        <div className="row">
          {this.renderListMovie()}
        </div>
      </div>
    )
  }
}
