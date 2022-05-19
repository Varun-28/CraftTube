import React from "react";
import { Outlet } from "react-router-dom";
import { Drawer } from "../../components/Components";
import "./video.css";

function Video() {
  return (
    <div>
      <Drawer />
      <div className="video-container px-8">
      <Outlet />
      </div>
    </div>
  );
}

export { Video };
