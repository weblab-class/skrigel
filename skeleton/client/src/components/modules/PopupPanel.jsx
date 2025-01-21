import React from "react";
import "../../utilities.css";
import "./PopupPanel.css";

const PopupPanel = ({ selPoint, setSelPoint, setDemoPanelOpen }) => {
  return (
    <div>
      <div>
        <br></br>
        <button className="x-button" onClick={() => setSelPoint(null)}>
          X
        </button>
        <h3>Info about: {selPoint.name}</h3>
        <br></br>
        <p>Address: {selPoint.address + ", " + selPoint.locality}</p>
        <br></br>
        <p>Company: {selPoint.company}</p>
        <hr></hr>
        <button onClick={() => setDemoPanelOpen(true)} className="view-more-button">
          View More Info
        </button>
      </div>
    </div>
  );
};

export default PopupPanel;
