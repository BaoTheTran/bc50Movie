import {useState,useEffect} from 'react';

const useColor =(sec)=>{
    const [color,setColor] =useState("aqua");

    useEffect(()=>{
        const interval = setInterval(()=>{
            const newColor = Math.floor(Math.random()*999999);
            setColor(`#${newColor}`)
        },sec)

        return()=>{
            clearInterval(interval)
        }
    },[]);

    return color;
}

export {useColor};