import React from 'react';
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GroupButton from './ui/GroupButton';
import { FaArrowDown } from "react-icons/fa";
const Home = () => {
  return (
    <>
        <Content>
            <Container className='container'>
                <HomeTitle className='text-white'>
                    We Create Brands, Websites And Application for you.
                </HomeTitle>
                <HomeSubtitle className='text-white text-center'>
                    Modern designand development services are offered by our digital firm for businessses of all sizes.
                </HomeSubtitle>
                <ButtonArea className='d-flex justify-content-center align-items-center'>
                    <GroupButton leftButton='contact us' />
                    <RightButton className='d-flex justify-content-center align-items-center text-uppercase bg-white'>learn more <FaArrowDown className='rightArrow'/></RightButton>
                </ButtonArea>
            </Container>
        </Content>
    </>
  )
}

export default Home;

const Content = styled.div`
`
const Container = styled.div`
    display: flex;
    padding: 60px 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const HomeTitle = styled.h1`
    text-align: center;
    font-size: 60px;
`
const HomeSubtitle = styled.p`
    margin: 20px 0;
`
const ButtonArea = styled.div`
    gap: 10px;
`
const RightButton = styled.div`
    padding: 20px;
    border-radius: 40px;
    color: rgb(253,94,14);
    cursor: pointer;
`