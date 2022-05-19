import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="landing-container">
      <div className="flex flex-col items-center landing-content">
        <h1 className="landing-title font-black">CraftTube</h1>
        <h3 className="ffont-light">
          Your one stop destination to learn all types of craft through
          interactive videos.
        </h3>
        <Link to="/video/videolisting">
        <button className="btn btn-primary mt-8 text-md">Explore</button>
        </Link>
      </div>
    </div>
  );
}

export { Home };
