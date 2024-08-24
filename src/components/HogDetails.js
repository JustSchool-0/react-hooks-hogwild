import React from "react";

function HogDetails({hog}) {
    if (!hog) {
        return null;
    }
    return (
        <div className="hog-details">
            <h3>{hog.name}</h3>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight} tons</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
    );
}

export default HogDetails;