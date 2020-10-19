import React from "react";
// import { Link } from "react-router-dom";
// import ViewButton from "./viewButton.jsx";
import Card from "./card.jsx";

function CardGrid(props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.filteredSearch.map((result) => (
        <Card
          result={result}
          filteredSearch={props.filteredSearch}
          page={props.page}
          schoolId={props.schoolId}
        />
      ))}
    </div>
  );
}

export default CardGrid;
