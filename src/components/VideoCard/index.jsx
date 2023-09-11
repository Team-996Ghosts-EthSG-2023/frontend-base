import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

function VideoCard(props) {
  const {
    url,
    setVideoRef,
    autoplay,
  } = props;
  const videoRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      videoRef.current.play();
    }
  }, [autoplay]);

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <StyledCard>
      <video
        className="player"
        onClick={onVideoPress}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref);
        }}
        loop
        muted="muted"
        src={url}
      ></video>
    </StyledCard>
  );
}

const StyledCard = styled(SwiperSlide)`
  background: red;
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
`;
// just a workaround. ignore this.
// https://github.com/nolimits4web/swiper/issues/4413#issuecomment-1021387492
VideoCard.displayName = "SwiperSlide";

export default VideoCard;
