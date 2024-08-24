import React from "react";

function HogTile({hog, onClick}) {
    return (
        <div className="ui eight wide column" onClick={() => onClick(hog)}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name}/>
        </div>
    );
}

export default HogTile;