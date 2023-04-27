import React from 'react'
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
    // &:hover::before {
    //     left: 0;
    //     transform: rotate(0);
    // }
`
const VideoImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`