import React from "react";

function FilesList(props) {
  return (
    <div className="o-grid-container">
      <div className="o-grid-row">
        {props.files.map((file, index) => (
          <div data-o-grid-colspan="12">
            <div className="demo-cell">
              <div
                className="o-teaser o-teaser--small   "
                data-o-component="o-teaser"
              >
                <div className="o-teaser__content">
                  <h2 id={index} className="o-teaser__heading fileHeading">
                    <a key={index} href={file.file}>
                      <div>{file.title}.pdf</div>
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilesList;
