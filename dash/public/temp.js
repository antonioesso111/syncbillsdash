import React from "react";
import Calendar from "react-select-date";

function MyComponent() {
  return (
      <Calendar 
        onSelect={(date) => console.log(date)}
        selectDateType="range"
        // select-date color
        templateClr="blue"
      />
  );
}

export default MyComponent;