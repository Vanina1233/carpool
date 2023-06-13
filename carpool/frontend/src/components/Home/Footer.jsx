import React from "react";
import { Outlet } from "react-router-dom";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagramAlt } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import "./banner.css";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div style={{ height: "40rem", backgroundColor: "#D9DDE1" }}>
        <div className="nav">
          <div className="list">
            <ul>
              <h2>Toutes les catégories</h2>
              <li>
                <a href="/">Tous les trajets covoiturage</a>
              </li>
              <li>
                <a href="/">Toutes les destinations covoiturage</a>
              </li>
              <li>
                <a href="/">Toutes les villes</a>
              </li>
              <li>
                <a href="/">Idées de voyage</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <h2>Trajet covoiture populaires</h2>
              <li>
                <a href="/">Douala → Yaounde</a>
              </li>
              <li>
                <a href="/">Yaounde → Limbe</a>
              </li>
              <li>
                <a href="/">Douala → Limbe</a>
              </li>
              <li>
                <a href="/">Douala → Kribi</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <h2>En savoir plus</h2>
              <li>
                <a href="/">Covoiturage du quotidien</a>
              </li>
              <li>
                <a href="/">Assurance et covoiturage</a>
              </li>
              <li>
                <a href="/">Comment ça marche</a>
              </li>
              <li>
                <a href="/">Qui sommes-nous ?</a>
              </li>
            </ul>
            <p>Langue</p>
            <select name="langue" id="langue">
              <option value="francais">Français</option>
              <option value="anglais">Anglais</option>
            </select>
            <div className="social-icons">
              <UilTwitter />
              <UilFacebook />
              <UilYoutube />
              <UilInstagramAlt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
