import React from "react";
import mancurtain from "./mancurtain.jpeg"
import { Link } from "react-router-dom";

const Favorite = () => {

    return(
        <div id="favoritePage">Under Construction! <br/>
            <img src={mancurtain} alt="" /> <br />
            <Link to={"/profile"}><button type="profile" className="buttons">
        Back
      </button></Link>
        </div>
    )
}

export default Favorite