import React from 'react';
import '../App.css';
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
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        padding: 50px 15px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        padding: 80px 15px;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        padding: 60px 15px;
    }

`

const BannerText = styled.div`
    text-align: center;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        font-size: 14px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {

    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {

    }
`

const BannerImgArea = styled.div`
    gap: 20px;
`

const BannerImg = styled.img`
    margin: 20px 0;
    width: 13%;
`