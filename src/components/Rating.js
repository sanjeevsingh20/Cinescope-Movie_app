import React from "react";
import { Circle } from "rc-progress";

const CircleRating = (props) => {
  return (
    <div className="app" style={{ width: "60px" }}>
      <Circle
        percent={props.percentage}
        strokeWidth={10}
        strokeColor={
          props.percentage < 50
            ? "#EA0200"
            : props.percentage > 50 && props.percentage < 70
            ? "#FAA602"
            : "#01A65A"
        }
      />
    </div>
  );
};

export default CircleRating;
