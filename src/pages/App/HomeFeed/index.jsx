import React, { useState, useRef, useEffect } from 'react'
import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper } from "swiper/react";
import { Mousewheel } from 'swiper/modules';
import VideoCard from '../../../components/VideoCard';
import { videoUrls } from "./videos";

export const HomeFeed = (props) => {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);


  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return(
    <SwipeContainer>
      <StyledSwiper 
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {videos.map((video, i) => 
          <VideoCard 
            key={i}
            url={video.url}
            setVideoRef={handleVideoRef(i)}
          />
        )}
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
