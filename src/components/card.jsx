import React from "react";
import { Link } from "react-router-dom";
import ViewButton from "./viewButton.jsx";

function Card(props) {
  return (
    <div key={props.result.id} className="p-4 m-4 bg-gray-200 rounded">
      <h3>{props.result.title}</h3>

      {props.page === "schoolsList" ? (
        <Link to={`/schools/${props.result.id}/news`}>
          <ViewButton />
        </Link>
      ) : (
        <Link to={`/schools/${props.schoolId}/news/${props.result.id}`}>
          <ViewButton />
        </Link>
      )}
    </div>
  );
}

export default Card;
