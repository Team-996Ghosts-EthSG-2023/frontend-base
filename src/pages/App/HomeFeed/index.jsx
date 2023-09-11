import React from 'react'
import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from 'swiper/modules';

export const HomeFeed = (props) => {
  return(
    <SwipeContainer>
      <StyledSwiper 
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <VideoCard style={{background: "red"}}>Slide 1</VideoCard>
        <VideoCard style={{background: "yellow"}}>Slide 2</VideoCard>
        <VideoCard style={{background: "grey"}}>Slide 3</VideoCard>
        <VideoCard style={{background: "green"}}>Slide 4</VideoCard>
        <VideoCard style={{background: "black"}}>Slide 5</VideoCard>
        <VideoCard>Slide 6</VideoCard>
        <VideoCard>Slide 7</VideoCard>
        <VideoCard>Slide 8</VideoCard>
        <VideoCard>Slide 9</VideoCard>
      </StyledSwiper>
    </SwipeContainer>
  )
}

const SwipeContainer = styled.div`
  width: 50%;
  max-width: 50%;
  height: calc(100vh - 64px);
  margin: 0 auto;
`

const StyledSwiper = styled(Swiper)`
	width: 100%;
	height: 100%;
`

const VideoCard = styled(SwiperSlide)`
	text-align: center;
	font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center; 

  
  & video {
    display: block;
    width: 100%;
    height: 100%; 
    object-fit: cover;
  }
`
