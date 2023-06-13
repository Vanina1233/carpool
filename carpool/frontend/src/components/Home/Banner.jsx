import React from "react";
import "./banner.css";
import { UilUser } from "@iconscout/react-unicons";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { Outlet, useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="banner">
        <nav className="navBar">
          <ul>
            <li>WeGo</li>
            <li>Carpool</li>
            <li>Daily CarPool</li>
          </ul>
          <div className="search">
            <button>
              <UilSearchAlt />
            </button>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search here"
            />
          </div>
          <div className="account" onClick={() => navigate("/auth")}>
            <UilUser />
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Banner;
