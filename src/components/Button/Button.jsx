import React from "react";

export default function Button({ onClick }) {
  return (
    <>
      <div>
        <button onClick={onClick} className="button">
          Load More
        </button>
      </div>
    </>
  );
}
