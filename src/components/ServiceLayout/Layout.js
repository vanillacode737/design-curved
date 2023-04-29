import React from 'react';
import styled from 'styled-components';
const Layout = ({imgTitle, title, title2, title3, title4, title5}) => {
    return (
        <>
            <ServiceItems>
                <ServiceLogo src={imgTitle} />
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceSubTitle>{title2}</ServiceSubTitle>
                <ServiceSubTitle>{title3}</ServiceSubTitle>
                <ServiceSubTitle>{title4}</ServiceSubTitle>
                <ServiceSubTitle>{title5}</ServiceSubTitle>
            </ServiceItems>
        </>
    )
}

export default Layout;

const ServiceItems = styled.div`
    padding: 40px;
    border-radius: 50px;
    background-color: #1C193B;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        padding: 10px;
        border-radius: 10px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        border-radius: 10px;
        padding: 20px;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        border-radius: 10px;
        padding: 20px;
    }
`
const ServiceLogo = styled.img`
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        width: 30px;
    }
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
    }
`
const ServiceTitle = styled.h4`
    margin: 33px 0 30px;
    text-transform: capitalize;
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        margin: 10px 0;
        font-size: 15px;
    }
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        margin: 23px 0 20px;
        font-size: 22px;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        margin: 23px 0 20px;
        font-size: 22px;
    }
`

const ServiceSubTitle = styled.h5`
    margin-bottom: 20px;
    font0-size: 16px;
    text-transform: capitalize;
    color: #fff;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        margin-bottom: 5px;
        font-size: 11px;
    }
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        margin-bottom: 10px;
        font-size: 12px;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        margin-bottom: 10px;
        font-size: 12px;
    }
`