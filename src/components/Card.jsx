import React from "react";

export default function Card(props) {

return (
<div className="Card">
<img src={`./${props.Img}`} className="card--image" alt="card image" />
 
<div className="card--info">
   <img src="./location.png" className="card--loc" alt="star" />

</div>

</div>
)
}
