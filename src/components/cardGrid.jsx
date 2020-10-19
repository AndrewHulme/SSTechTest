import React from "react";
import { Link } from "react-router-dom";

function CardGrid(props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.filteredSearch.map((result) => (
        <div key={result.id} className="p-4 m-4 bg-gray-200 rounded">
          <h3>{result.title}</h3>

          {props.page === "schoolsList" ? (
            <div>
              <Link
                to={{
                  pathname: `/schools/${result.id}/news`,
                }}
              >
                <button className="bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                  view >
                </button>
              </Link>{" "}
            </div>
          ) : (
            <div>
              <Link
                to={{
                  pathname: `/schools/${props.schoolId}/news/${result.id}`,
                }}
              >
                <button className="bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                  view >
                </button>
              </Link>{" "}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
