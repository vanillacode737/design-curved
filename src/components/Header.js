import React, { useState } from 'react';
import styled from 'styled-components';
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [ burger, setBurger ] = useState('transform100');
  return (
    <>
      <Content>
        <Container className='container d-flex justify-content-between'>
              <Logo src='/asset/images/logo.png' />
              <NavMenu show={burger} className={burger}>
                  <NavLink className='ms-lg-4 ms-0 my-2'>Home</NavLink>
                  <NavLink className='ms-lg-4 ms-0 my-2'>about us</NavLink>
                  <NavLink className='ms-lg-4 ms-0 my-2'>projects</NavLink>
                  <NavLink className='ms-lg-4 ms-0 my-2'>services</NavLink>
                  <NavLink className='ms-lg-4 ms-0 my-2'>shop</NavLink>
                  <IconsHeader className='d-lg-flex d-none justify-content-center align-items-center'>
                    <NavLink><FaDribbble/></NavLink>
                    <NavLink><FaBehance/></NavLink>
                    <NavLink><FaInstagram/></NavLink>
                  </IconsHeader>
              </NavMenu>
              <BarArea className='d-lg-none d-block d-flex justify-content-end align-items-center'>
                <FaBars className='text-white' onClick={() => {setBurger((burger === 'transform100') ? 'transform0' : 'transform100')}}/>
              </BarArea>
        </Container>
      </Content>
    </>
  )
}

export default Header;

const Content = styled.div`
  position: relative;
  padding: 0 15px;
  z-index: 1;
`
const Container = styled.div`
  padding: 10px 0;
`
const Logo = styled.img`
// Extra small devices (portrait phones, less than 576px)
  @media(max-width: 575.98px) {
    width: 75px;
  }
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
`
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    display: flex;
    position: absolute;
    padding: 50px 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    transition: transform ease-in-out .3s;
    background-color: rgb(253,94,14);
    z-index: 2;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    position: absolute;
    padding: 50px 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    transition: transform ease-in-out .3s;
    background-color: rgb(253,94,14);
    z-index: 2;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    display: flex;
    padding: 50px 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    background-color: rgb(253,94,14);
    z-index: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform ease-in-out .3s;
  }
`
const IconsHeader = styled.div``
const NavLink = styled.a`
  margin-left: 40px;
  text-transform: uppercase;
  transition: ease-in-out .3s;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: rgb(253,94,14);
  }
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    font-size: 14px;
    &:hover {
      color: #fff;
    }
  }
  
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 14px;
    &:hover {
      color: #fff;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 14px;
    &:hover {
      color: #fff;
    }
  }
`
const BarArea = styled.div`
  cursor: pointer;
  font-size: 30px;
`