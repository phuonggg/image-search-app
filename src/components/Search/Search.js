import React, { useState } from "react";
import "./Search.css";
import SinglePhoto from "../SinglePhoto/SinglePhoto";

function Search() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  // fetch images from unplash API
  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${value}&orientation=squarish`
    )
      .then((res) => res.json())
      .then((data) => setResult(data.results));
  };
  return (
    <div className="Search">
      <div className="mydiv">
        <input
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => fetchImage()}>Search</button>
      </div>
      <div className="gallery">
        {result.map((photo) => (
          <SinglePhoto photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default Search;
