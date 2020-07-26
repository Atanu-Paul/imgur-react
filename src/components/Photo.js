import React from "react";
import { Card } from "react-bootstrap";

const Photo = ({ id }) => {
  return (
    <Card className="photo">
      <Card.Img
        variant="top"
        src={`http://ec2-3-134-253-238.us-east-2.compute.amazonaws.com/photos/${id}`}
        alt="Photo"
      />
    </Card>
  );
};

export default Photo;
