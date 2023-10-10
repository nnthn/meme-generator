import React from "react";

export default function Star(props){
    const starIcon = props.isfav ? "yes": "no";
    return (
              <h2  onClick={props.handleClick}>
                {starIcon}
              </h2>
    );

}
