import React from "react";

function Gif({ gif }) {
  const styles = {
    gifContainer: {
      height: "250px",
      width: `${gif.images.downsized_large.width}px`
    },
    bgImg: {
      background: `linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), url(${gif.images.downsized_large.url})`,
      width: "100%",
      height: "100%"
      // backgroundPosition: "center",
      // backgroundImageSize: "cover"
      // backgroundRepeat: "no-repeat"
    }
  };
  return (
    <div className="gif-container" style={styles.gifContainer}>
      <div className="gif-image" style={styles.bgImg} />
      <h3 className="gif-title">{gif.title}</h3>
    </div>
  );
}

export default Gif;
