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
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`