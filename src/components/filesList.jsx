import React from "react";
import paperclip from "../images/paperclip.png";

function FilesList(props) {
  return (
    <div className="m-4">
      {props.files.map((file, index) => (
        <a
          key={index}
          href={file.file}
          className="flex items-center rounded overflow-hidden shadow-lg px-6 py-4"
        >
          <img src={paperclip} className="w-10 h-10 mr-4" />
          <div className="text-gray-600">{file.title}.pdf</div>
        </a>
      ))}
    </div>
  );
}

export default FilesList;
