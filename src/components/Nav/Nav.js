import React from "react";
import "./Nav.css";
// import Search from "../Search/Search";
// import Favorite from "../Favorite/Favorite";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link className="nav-style" to="/">
          <li>Search</li>
        </Link>

        <Link to="/favorite">
          <li>Favorite</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
// import React from "react";

// function Nav() {
//   return (
//     <div className="Nav">
//       <p>nav</p>
//     </div>
//   );
// }

// export default Nav;
