import React from 'react';
import NhanVien from './nhanvien';
import SanPham from './sanpham';
import WithCard from './withcard';

//high order component
const WrapperCard = WithCard(NhanVien);

export default function AboutPage() {
  return (
    <div className='container'>
      <WrapperCard/>
    </div>
  )
}

