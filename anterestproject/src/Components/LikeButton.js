import * as ReactDOM from 'react-dom';
import React, { useState } from "react";
import "./LikeButton.css";

export default function LikeButton(){
    const [like,setLike]= useState(false);

    return(
    <div className="Like">
    <span className="likebutton" onClick={() => setLike((prevLike) => !prevLike)}>
    Like {like ? <img className="likebutton" src="favpng_heart-font-awesome-font.png" /> : <img className="likebutton" src="favpng_heart-emoji-love-android-oreo-emotion.png" />}
    </span>
    </div>
    );
}