import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  isAll,
  isPeople,
  isNature,
  isThing,
  pushAll,
  pushPeople,
  pushNature,
  pushThing,
} from "../../actions";

import "./Favorite.css";

function Favorite(props) {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite);

  const results = JSON.parse(localStorage.getItem("result"));

  // const initialState = {
  //   isLoaded: false,
  //   all: results,
  //   people: [],
  //   nature: [],
  //   thing: [],
  //   display: results
  // }
  // if (
  //   results &&
  //   results.length > 0 &&
  //   JSON.parse(localStorage.getItem("favoriteCategory")) === null
  // ) {
  //   localStorage.setItem("favoriteCategory", JSON.stringify(initialState))
  // }
  console.log(`favoriteList: `, favoriteList);

  return results ? (
    <div className="Favorite">
      <p>Favorite</p>
      <div className="tab">
        <div className="item" onClick={() => dispatch(isAll())}>
          All
        </div>
        <div className="item" onClick={() => dispatch(isPeople())}>
          People
        </div>
        <div className="item" onClick={() => dispatch(isNature())}>
          Natural
        </div>
        <div className="item" onClick={() => dispatch(isThing())}>
          Thing
        </div>
      </div>
      <div className="content">
        <div className="gallery">
          {favoriteList &&
            favoriteList.display &&
            favoriteList.display.map((item) => (
              <div key={item.id} className="favorite-item single-photo-wrapper">
                <img src={item.url.regular} />
                <div className="list-btn">
                  <button
                    className="people-btn btn"
                    onClick={() => dispatch(pushPeople(item))}
                  >
                    People
                  </button>
                  <button
                    className="people-btn btn"
                    onClick={() => dispatch(pushNature(item))}
                  >
                    Nature
                  </button>
                  <button
                    className="people-btn btn"
                    onClick={() => dispatch(pushThing(item))}
                  >
                    Thing
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  ) : (
    "No favorite photo available"
  );
}

export default connect()(Favorite);
