import React from 'react';
import "./style.css";
import styled ,{ keyframes } from "styled-components";

const spin= keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
` 

const Loading = styled.div`
    border-top: 16px solid ${(props)=> (props.$primary? "brown" : "blue")};
    border-right: 16px solid green;
    border-bottom: 16px solid red;
    border-left: 16px solid pink;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
`

export default function Loader() {
  return (
    <Loading $primary > 

    </Loading>
  )
}
