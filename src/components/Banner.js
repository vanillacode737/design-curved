import React from 'react';
import styled from 'styled-components';
const Banner = () => {
  return (
    <>
        <Container className='container'>
            <BannerText className='text-white'>Endoursed by both well-known companies and growing business.</BannerText>
            <BannerImgArea className='d-flex justify-content-center align-items-center'>
                <BannerImg src='/asset/images/ad1.png'/>
                <BannerImg src='/asset/images/ad2.png'/>
                <BannerImg src='/asset/images/ad3.png'/>
                <BannerImg src='/asset/images/ad4.png'/>
                <BannerImg src='/asset/images/ad5.png'/>
            </BannerImgArea>
        </Container>
    </>
  )
}

export default Banner;

const Container = styled.div`
    padding: 33px 0 120px;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        padding: 20px 15px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        padding: 50px 15px;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        padding: 60px 0 40px;
    }

`

const BannerText = styled.div`
    margin-bottom: 28px;
    text-align: center;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        margin-bottom: 10px;
        font-size: 10px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        margin-bottom: 15px;
        font-size: 14px;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        margin-bottom: 15px;
        font-size: 18px;
    }
`

const BannerImgArea = styled.div`
    gap: 20px;
`

const BannerImg = styled.img`
    width: 15%;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        font-size: 14px;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        margin-bottom: 10px;
        width: 20%;
    }
`