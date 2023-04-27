import React from 'react';
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Banner = () => {
  return (
    <>
        <Container className='container'>
            <BannerText className='text-white'>Endoursed by both well-known companies and growing business.</BannerText>
            <BannerImgArea className='d-flex justify-content-center align-items-center'>
                <BannerImg src='/asset/images/ad1.png'/>
                <BannerImg src='/asset/images/ad1.png'/>
                <BannerImg src='/asset/images/ad1.png'/>
                <BannerImg src='/asset/images/ad1.png'/>
                <BannerImg src='/asset/images/ad1.png'/>
            </BannerImgArea>
        </Container>
    </>
  )
}

export default Banner;

const Container = styled.div`
    padding: 100px 0;
`

const BannerText = styled.div`
    text-align: center;
`

const BannerImgArea = styled.div`
    gap: 20px;
`

const BannerImg = styled.img`
    margin: 20px 0;
    width: 13%;
`