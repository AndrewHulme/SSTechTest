import React from "react";

function SchoolTitle(props) {
  return (
    <h1 id="schoolTitle" className="o-teaser__heading schoolTitle">
      {props.title}
    </h1>
  );
}

export default SchoolTitle;
