import React, { useState } from "react";

function SinglePhoto(props) {
  return (
    <img
      className="photo"
      key={props.photo.id}
      src={props.photo.urls.regular}
    />
  );
}

export default SinglePhoto;
