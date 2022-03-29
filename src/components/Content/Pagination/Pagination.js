import React from "react";
import "./Pagination.css";

function Pagination() {
  return (
    <div id="pagination-bar">
      <a href="/" id="active">
        1
      </a>
      <a href="/">2</a>
      <a href="/">3</a>
      <a href="/">4</a>
      <a href="/">5</a>
      <a href="/">6</a>
      <a href="/">7</a>
      <a href="/">Next &#x3E;</a>
      <a href="/">Last &#x226B;</a>
    </div>
  );
}

export default Pagination;
