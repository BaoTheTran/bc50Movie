import React, {useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
//useSelector ~ mapStateToProps
//useDispatch ~ mapDispatchToProps
import {useParams} from "react-router-dom";
//day la hooks cua react-router-dom, ko phai cua reactjs
import { actFetchDetailMovie } from './duck/actions';
import Loader from '../../../components_global/loader';

function DetailMovie(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const loading = useSelector((state)=>state.detailMovieReducer.loading);
    const data = useSelector((state)=>state.detailMovieReducer.data);

    useEffect(()=>{
        dispatch(actFetchDetailMovie(params.id))
    },[]);

    if(loading) return <Loader/>;


  return (
    <div className='container'>
        <h3>DetailMovie</h3>
        <table className='table'>
            <tbody>
                <tr>
                    <td>Movie</td>
                    <td>{data && data.tenPhim}</td>
                </tr>
                <tr>
                    <td>Des</td>
                    <td>{data && data.moTa}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default DetailMovie;

// export default connect(mapStateToProps,mapDispatchToProps) (DetailMovie);


// const mapStateToProps =(state)=>{
//     return{
//         loading : state.detailMovieReducer.loading,
//         data : state.detailMovieReducer.data,
//     }
// }

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         fetchDetailMovie:(id)=>{
//             dispatch(actFetchDetailMovie(id))
//         }
//     }
// }