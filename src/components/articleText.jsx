import React from "react";

function ArticleText(props) {
  return (
    <div className="o-topper o-topper--centered o-topper--color-paper">
      <div className="o-topper__content">
        <h1 id="articleTitle" className="o-topper__headline">
          {props.article.title}
        </h1>
        <div className="o-topper__standfirst">
          <div
            id="articleBody"
            className="bodyText"
            dangerouslySetInnerHTML={{ __html: props.article.body }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ArticleText;
