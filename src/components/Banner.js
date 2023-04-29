import React from 'react';
import styled from 'styled-components';
const Banner = () => {
  return (
    <>
        <Container className='container'>
            <BannerText className='text-white'>Endoursed by both well-known companies and growing business.</BannerText>
            <BannerImgArea className='row justify-content-center align-items-center'>
                <BannerImgItem className='col-lg-2 col-md-3 col-sm-3 col-4'>
                    <BannerImg src='/asset/images/ad1.png'/>
                </BannerImgItem>
                <BannerImgItem className='col-lg-2 col-md-3 col-sm-3 col-4'>
                    <BannerImg src='/asset/images/ad2.png'/>
                </BannerImgItem>
                <BannerImgItem className='col-lg-2 col-md-3 col-sm-3 col-4'>
                    <BannerImg src='/asset/images/ad3.png'/>
                </BannerImgItem>
                <BannerImgItem className='col-lg-2 col-md-3 col-sm-3 col-4'>
                    <BannerImg src='/asset/images/ad4.png'/>
                </BannerImgItem>
                <BannerImgItem className='col-lg-2 offset-lg-0 col-md-3 offset-md-0 col-sm-3 offset-sm-0 offset-1 col-4'>
                    <BannerImg src='/asset/images/ad5.png'/>
                </BannerImgItem>
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
        padding: 20px 0;
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
`
const BannerImgItem = styled.div`
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
    gap: 5px;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
}
`

const BannerImg = styled.img`
    object-fit: cover;
    width: 100%;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        font-size: 14px;
        width: 100%;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        width: 100%;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        margin-bottom: 10px;
    }
`