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

  // check if there are images in results in local storage then render favorite images layout
  return results ? (
    <div className="Favorite">
      <p>Click below lists to see favorite images in the list</p>
      <div className="tab">
        <button className="item" onClick={() => dispatch(isAll())}>
          All
        </button>
        <button className="item" onClick={() => dispatch(isPeople())}>
          People
        </button>
        <button className="item" onClick={() => dispatch(isNature())}>
          Natural
        </button>
        <button className="item" onClick={() => dispatch(isThing())}>
          Thing
        </button>
      </div>
      <div className="content">
        <div className="gallery">
          {favoriteList &&
            favoriteList.display &&
            favoriteList.display.map((item) => (
              <div key={item.id} className="favorite-item single-photo-wrapper">
                <img src={item.url.regular} />
                <div className="list-btn">
                  <button>Click below move to list</button>
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
