import React from 'react';
import styled from "styled-components";
import Loader from '../../../components_global/loaderWaiting';
import { Button, DatePicker ,Space } from 'antd';

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const onChange = (date, dateString) => {
  console.log(date, dateString);
};


export default function HomePage() {
  return (
    <Wrapper>
      <Title>Hello Bao</Title>
      <Loader/>
      <Button type="primary" danger>Primary</Button>
      <Space  direction="vertical">
          <DatePicker onChange={onChange} />
      </Space>
    </Wrapper>
  )
}

