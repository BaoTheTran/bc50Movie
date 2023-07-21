import React , {useState, useEffect} from 'react';
import "./style.css";

export default function Square() {
    const [color, setColor] = useState("brown")
 
    useEffect(()=>{
        const interval = setInterval(()=>{
        const newColor = Math.floor(Math.random() * 999999);
        console.log("newColor", newColor);
        setColor(`#${newColor}`)
        },2000);

        return()=>{
            clearInterval(interval);
        }
    }, [])
  return (
    <div>
        <div className='square' style={{backgroundColor: color}}>Square</div>
    </div>
  )
}
