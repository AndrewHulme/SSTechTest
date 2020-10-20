import React from "react";

function ArticleText(props) {
  return (
    <div className="p-4 m-4 bg-gray-200 rounded">
      <h3 className="text-2xl font-bold">{props.article.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.article.body }}></div>
    </div>
  );
}

export default ArticleText;
