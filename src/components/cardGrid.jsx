import React from "react";
import Card from "./card.jsx";

function CardGrid(props) {
  return (
    <div className="o-grid-container cardGrid">
      <div className="o-grid-row">
        {props.filteredSearch.map((result) => (
          <div key={result.id} data-o-grid-colspan="4">
            <div className="demo-cell">
              <div key={result.id}>
                <Card
                  result={result}
                  page={props.page}
                  schoolId={props.schoolId}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
