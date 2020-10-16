import React from "react";
import { Link } from "react-router-dom";
// import "../styles/main.css";

function Card(props) {
  return (
    <div key={props.school.id} className="p-4 m-4 bg-gray-200 rounded">
      <h3>{props.school.title}</h3>
      <Link to={`/schools/${props.school.id}/news`}>
        <button className="bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          view >
        </button>
      </Link>{" "}
    </div>
  );
}

export default Card;
