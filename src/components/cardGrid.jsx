import React from "react";
import Card from "./card.jsx";

function CardGrid(props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.filteredSearch.map((result) => (
        <div key={result.id}>
          <Card result={result} page={props.page} schoolId={props.schoolId} />
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
