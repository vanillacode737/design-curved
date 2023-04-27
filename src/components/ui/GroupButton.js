import React from 'react';
import styled from 'styled-components';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from "react-icons/fa";
const GroupButton = ({leftButton}) => {
  return (
    <>
      <LeftButton className='d-flex justify-content-center align-items-center text-uppercase text-white'>{leftButton}<FaArrowRight className='rightArrow'/></LeftButton>
    </>
  )
}

export default GroupButton;
const LeftButton = styled.a`
  padding: 20px;
  border-radius: 40px;
  background-image: linear-gradient(to right, rgb(254,22,15), rgb(253,94,14));
  cursor: pointer;
`