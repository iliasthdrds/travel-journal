import React from "react";

export default function Card(props) {

return (
    <>
<div className="card">
<img src={`./${props.Img}`} className="card--image" alt="card image" />
 
<div className="card--info">
    
   <img src="./location.png" className="card--loc" alt="star" /> 
   <span className="card--loocation" >{props.Location}</span>
  <a className="card--maps" href={props.GoogleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a>

<p className="card--title">{props.Title}</p>
<p className="card--date">{props.Date}</p>
<p className="card--description">{props.Description}</p></div>
</div>
{!props.isLast && <hr className="card--separator" />}
</>
)
}
