import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=aSpoum3EQYqeh6GvFKl-fnR0rl21lxMA7y-UH_TWuJw&query=${value}&orientation=squarish`
    )
      .then((res) => res.json())
      .then((data) => setResult(data.results));
  };
  return (
    <div className="Search">
      <div className="mydiv">
        <span>Search</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => fetchImage()}>Search</button>
      </div>
      <div className="gallery">
        {result.map((item) => {
          return <img className="item" key={item.id} src={item.urls.regular} />;
        })}
      </div>
    </div>
  );
}

export default Search;
