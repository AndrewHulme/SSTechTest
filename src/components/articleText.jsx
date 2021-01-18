import React from "react";

function ArticleText(props) {
  return (
    <div class="o-topper o-topper--centered o-topper--color-paper">
      <div class="o-topper__content">
        <h1 class="o-topper__headline">{props.article.title}</h1>
        <div class="o-topper__standfirst">
          <div dangerouslySetInnerHTML={{ __html: props.article.body }}></div>
        </div>
      </div>

      <div class="o-topper__background"></div>
    </div>
  );
}

export default ArticleText;
