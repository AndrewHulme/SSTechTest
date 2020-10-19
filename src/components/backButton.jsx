import React from "react";
import { Link } from "react-router-dom";

function BackButton(props) {
  return <Link to={props.url}> back >> </Link>;
}

export default BackButton;
