import React from "react";
import { Card } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import { connect } from "react-redux";
const VideoListItem = ({ video}) => {
  const images = [];
  for (let i = 0; i < video.url.length; i++) {
    images.push({ url: video.url[i] });
  }
  console.log(images);
  return (
    <Card
      style={{
        flexBasis: "360px",
        marginBottom: "10px",
        marginTop: "40px",
        marginLeft: "auto",
      }}
    >
      <SimpleImageSlider
        style={{ width: "100%" }}
        width="100%"
        height={260}
        images={images}
      />
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
        <Card.Text>{video.description}</Card.Text>
        {video.privacy === "private" ? (
          <span>
            private
          </span>
        ) : (
          <span>
            public
          </span>
        )}
        <br></br>
        <br></br>
      </Card.Body>
    </Card>
  );
};

export default connect()(VideoListItem);
