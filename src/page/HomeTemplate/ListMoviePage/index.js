import React, { Component } from 'react';
import MovieItem from './MovieItem';
import {connect} from "react-redux";
import {actFetchListMovie} from './duck/actions';

class ListMoviePage extends Component {
  // constructor(props){
  //   super(props); 
  //   this.state={
  //     loading: false,
  //     data:null,
  //     error: null,
  //   }
  // }
  componentDidMount(){
    this.props.fetchListMovie();
    //call api
    //pending
    // this.setState({
    //   loading: true,
    //   data:null,
    //   error: null,
    // });
    // this.props.listMovieRequest();
    // axios({
    //   url : "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A",
    //   },
    // })
    // .then((res)=>{      
    //   if(res.data.statusCode === 200){
    //     console.log(res.data.content);
        // this.setState({
        //   loading: false,
        //   data:res.data.content,
        //   error: null,
        // });
    //     this.props.listMovieSuccess(res.data.content);
    //   }
    // })
    // .catch((error)=>{
    //   console.log(error);
    //   // this.setState({
    //   //   loading: false,
    //   //   data:null,
    //   //   error,
    //   // });
    //   this.props.listMovieFail(error);
    // })
  }

  renderListMovie=()=>{
    const {data, loading} =this.props;
    if(loading ) return <div>loading...</div>
    return data?.map((movie)=><MovieItem key={movie.maPhim} movie={movie}/>);
  }

  render() {
    // console.log(this.state);
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

const mapStateToProps =(state)=>{
    return{
      loading :state.listMovieReducer.loading,
      data: state.listMovieReducer.data,
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
      // listMovieRequest : ()=>{
      //   dispatch(actListMovieRequest())
      // },

      // listMovieSuccess : (data)=>{
      //   dispatch(actListMovieSuccess(data))
      // },

      // listMovieFail : (error)=>{
      //   dispatch(actListMovieFail(error))
      // },
      fetchListMovie:()=>{
        dispatch(actFetchListMovie());
      }
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (ListMoviePage);