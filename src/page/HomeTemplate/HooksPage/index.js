import React,{useState, useEffect, useMemo, useCallback} from 'react';
import Child from './child';
import CustomHooks from './customHooks';

//khi state chạy lại thì tất cả function này đều chạy lại hết.
export default function HooksPage() {
  //useState tra ve 2 gia tri: phan tu dau tien la gia tri, phan tu thu 2 la phuong thuc.
  // đối số bên trong useState là giá trị default của phần tử thứ 1 trong array.
  const [number, setNumber] =useState(0);

  //tương đương componentDidMount, chạy khi array rỗng.
  useEffect(()=>{
    console.log("useEffect - chạy 1 lần nếu đối số thứ 2 là array rỗng,");
  }, []);

  //tuơng đương componentDidUpdate , chạy khi array != rỗng
  useEffect(()=>{
    console.log("useEffect- componentDidUpdate");
  },[number]);

  //Tương đương với componentWillUnmount, huỷ bỏ đăng ký theo dõi các data bên trong khi component bị huỷ
  useEffect(()=>{
    const interval = setInterval(()=>{
      console.log("hello");
    },1000);

    return()=>{
      clearInterval(interval)
    }

  },[]);

  const countUp = ()=>{
    let i = 0;

    while(i<1000){
      i++
    }
    console.log(i);
    return i;
  }

  //khép lại giá trị
  //Hàm giúp ngăn chặn re-render lại nhiều lần. (khi khác rỗng. như trên)
  const countUpMemo = useMemo(()=>countUp(), []);

  const renderNoti = ()=>{
    console.log("renderNoti");
  }

  //khép lại function
  const renderNotiCallBack =useCallback(renderNoti,[]);

  return (
    <div>
      <h3>Number : {number}</h3>
      <h3>Number Up : {countUpMemo}</h3>
      <button className='btn btn-warning' onClick={()=>{
        setNumber(number +1);
      }}>Click</button>

      <hr/>
      <Child renderNoti={renderNotiCallBack}/>
      <hr/>
      <CustomHooks/>
    </div>
  )
}
