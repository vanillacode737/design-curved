import React from 'react';
import styled from 'styled-components';
import ServiceLayout from './ServiceLayout/Layout';
const Service = () => {
    return (
    <>
        <Container className='container'>
            <ServiceHeader className='row'>
                <ServiceHeading className='col-lg-6 col-12 text-center'>
                    We're a fill-service digital agency.
                </ServiceHeading>
                <ServiceSubHeading className='col-lg-6 col-12 text-center'>
                    At Design Curved, we specialize in bringing even the wildest ideas to life by transforming them into elegant designs, exceptional experiences and memorable brands.
                </ServiceSubHeading>
            </ServiceHeader>
            <ServiceBody>
                <ServiceLayout 
                    imgTitle='/asset/images/serviceLogo.png'
                    title='Design'
                    title2="Brand Identity"
                    title3="user research"
                    title4="UI/UX Design"
                    title5="Mobile Apps Design"
                />
                <ServiceLayout 
                    imgTitle='/asset/images/development-logo.png'
                    title='development'
                    title2="web development"
                    title3="mobile development"
                    title4="webflow development"
                    title5="font-end development"
                />
                <ServiceLayout 
                    imgTitle='/asset/images/serviceLogo.png'
                    title='modern products'
                    title2="web 3.0"
                    title3="education tech"
                    title4="financial tech"
                    title5="sass"
                />
            </ServiceBody>
        </Container>
    </>
    )
}

export default Service;

const Container = styled.div``
const ServiceHeader = styled.div``
const ServiceHeading = styled.h2`
    font-size: 48px;
    font-weight: 600;
    color: #fff;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        font-size: 18px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        font-size: 22px;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        font-size: 22px;
    }
`
const ServiceSubHeading = styled.p`
    color: #fff;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        font-size: 11px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
    }
`
const ServiceBody = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        grid-template-columns: repeat(2, 2fr);
        gap: 10px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        grid-template-columns: repeat(1, 1fr);
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {

    }
`