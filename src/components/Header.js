import React, { useState } from 'react';
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [ burger, setBurger ] = useState('transform100');
  return (
    <>
      <Content className='bg-dark'>
        <Container className='container d-flex justify-content-between'>
              <Logo src='/asset/images/logo.png' />
              <NavMenu show={burger} className={burger}>
                  <NavLink className='ms-4'>Home</NavLink>
                  <NavLink className='ms-4'>about us</NavLink>
                  <NavLink className='ms-4'>projects</NavLink>
                  <NavLink className='ms-4'>services</NavLink>
                  <NavLink className='ms-4'>shop</NavLink>
                  <IconsHeader className='d-flex justify-content-center align-items-center'>
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
  z-index: 1;
`
const Container = styled.div`
  padding: 10px 0;
`
const Logo = styled.img``
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media(max-width: 768px) {
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
  @media(max-width: 768px) {
    margin-left: 0;
    &:hover {
      color: #fff;
    }
  }
`
const BarArea = styled.div`
  cursor: pointer;
  font-size: 30px;
`