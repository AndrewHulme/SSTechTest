import React from "react";
import { Link } from "react-router-dom";
import ViewButton from "./viewButton.jsx";

function Card(props) {
  return (
    <div
      class="o-teaser o-teaser--small   "
      data-o-component="o-teaser"
      key={props.result.id}
    >
      <div class="o-teaser__content">
        <h2 class="o-teaser__heading">
          <a>{props.result.title}</a>
        </h2>

        {props.page === "schoolsList" ? (
          <Link to={`/schools/${props.result.id}/news`}>
            <ViewButton id={props.result.id} />
          </Link>
        ) : (
          <Link to={`/schools/${props.schoolId}/news/${props.result.id}`}>
            <ViewButton id={props.result.id} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
