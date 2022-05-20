import React from "react";
import { Link } from "react-router-dom";
import emptyImg from "../assets/Empty-bro.png";
import "../styles/components.css"

function Empty({ emptyText }) {
  return (
    <div className="p-4 mx-auto my-8 flex flex-col justify-center items-center">
      <h3 className="font-normal">
        Oops! Your <strong>{emptyText}</strong> is empty.
      </h3>
      <img className="w-96" src={emptyImg} alt="empty-cart" />
      <Link to="/video/videolisting">
        <button className="btn btn-empty">Explore</button>
      </Link>
    </div>
  );
}

export { Empty };
