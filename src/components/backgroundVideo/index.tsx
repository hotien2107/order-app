import React from "react";

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop id="tm-video">
      <source src="/video/wave-cafe-video-bg.mp4" type="video/mp4" />
      Video not support
    </video>
  );
};

export default React.memo(BackgroundVideo);
