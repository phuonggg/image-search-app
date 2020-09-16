import React, { useState } from "react";
import "./SinglePhoto.css";

const favoriteArr = [];

function SinglePhoto(props) {
  console.log(props);

  return (
    <div className="single-photo-wrapper">
      <img
        className="photo"
        key={props.photo.id}
        src={props.photo.urls.regular}
      />
      <div className="list-btn">
        <button
          className="like-btn btn"
          onClick={() => {
            const idImg = props.photo.id;
            const urlImg = props.photo.urls.regular;
            if (favoriteArr.length > 0) {
              const existItem = favoriteArr.filter((item) => item.id === idImg);
              if (!existItem.length) {
                favoriteArr.push({
                  id: idImg,
                  url: {
                    regular: urlImg,
                  },
                });
              }
            } else {
              favoriteArr.push({
                id: idImg,
                url: {
                  regular: urlImg,
                },
              });
            }
            localStorage.setItem("result", JSON.stringify(favoriteArr));
          }}
        >
          Like
        </button>
        <button className="download-btn btn">Download</button>
      </div>
    </div>
  );
}

export default SinglePhoto;
