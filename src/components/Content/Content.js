import React from "react";
import "./Content.css";

//components
import Ads from "./Ads/Ads";
import Pagination from "./Pagination/Pagination";
import Sidebar from "./Sidebar/Sidebar";
import Updates from "./Updates/Updates";
import Zygor from "./Zygor/Zygor";

function Content() {
  return (
    <div id="container">
      <div id="top">
        <Ads />
      </div>
      <div id="bottom">
        <div id="left-column">
          <Updates />
          <div id="pagination">
            <Pagination />
          </div>
          <div id="zygor">
            <Zygor />
          </div>
        </div>
        <div id="right-column">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Content;
