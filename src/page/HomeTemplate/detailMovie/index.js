import React from 'react';
import {useParams} from "react-router-dom";
//day la hooks cua react-router-dom, ko phai cua reactjs

export default function DetailMovie() {
    const params = useParams();
    console.log(params.id);

  return (
    <div>
        <h3>DetailMovie</h3>
    </div>
  )
}
