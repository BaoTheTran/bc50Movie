import React from 'react';
import { useColor } from './useColor';
import "./style.css"

export default function Circle() {
    const colorCircle = useColor(2000);

  return (
    <div className='square circle' style={{backgroundColor: colorCircle}}>circle</div>
  )
}
