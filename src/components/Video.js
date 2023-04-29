import React from 'react'
import styled from 'styled-components';

const Video = () => {
    return (
        <>
            <Container className='container'>
                <ImgArea>
                    <VideoImg src='/asset/images/video.jpg' />
                </ImgArea>
            </Container>
        </>
    )
}

export default Video;

const Container = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        padding: 20px 0;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        padding: 20px 0;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        padding: 10px 0;
    }
`

const ImgArea = styled.div`
    position: relative;
    width: 900px;
    height: 400px;
    z-index: 1;
    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: -2px;
        height: 100%;
        width: 100%;
        border-radius: 3px;
        background-color: rgb(253,94,14);
        transform: rotate(-7deg);
        z-index: -1;
        transition: transform ease-in-out .3s;
    }
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        width: 250px;
        height: 150px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        width: 400px;
        height: 250px;
    }
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        width: 800px;
        height: 400px;
    }
`
const VideoImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`