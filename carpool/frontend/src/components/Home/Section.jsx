import React from "react";
import "./banner.css";
import { UilPlus } from "@iconscout/react-unicons";
import { UilCarSideview } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilCalendarAlt } from "@iconscout/react-unicons";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/carGirl.png";
import img5 from "../../assets/carpool2.jpg";

const Section = () => {
  return (
    <div className="section">
      <div className="imageContainer">
        <div className="overlay">
          <div className="container">
            <h3>FIND YOUR TRIP PARTERNER</h3>
            <h3>and save money with WeGo</h3>
            <div className="inputs">
              <label htmlFor="departure">
                <UilCarSideview />
                <input
                  type="text"
                  name="departure"
                  id="departure"
                  placeholder="Departure"
                />
              </label>
              <label htmlFor="destination">
                <UilLocationPoint />
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Destination"
                />
              </label>
              <label htmlFor="date">
                <UilCalendarAlt />
                <input type="text" name="date" id="date" placeholder="Date" />
              </label>
              <button type="submit">Search</button>
            </div>
            <h2>
              Select your departure and destination and find carpoolers in one
              click
            </h2>
            <div className="images">
              <div className="im1">
                <img src={img1} alt="" />
              </div>
              <div className="im1">
                <img src={img2} alt="" />
              </div>
              <div className="im1">
                <img src={img3} alt="" />
              </div>
              <div className="im1">
                <UilPlus />
              </div>
              <p>More than 10K people are using this app all over Cameroon</p>
            </div>
          </div>
          <div className="carGirl">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-img">
          <img src={img5} alt="" />
        </div>
        <div className="about-text">
          <h3>Recevez jusqu'à 1000frs de Bonus Covoiturage !</h3>
          <p>
            Conducteurs, conductrices, bonne nouvelle : vos bonnes habitudes
            sont récompensées ! Bénéficiez du Bonus Covoiturage en réalisant 3
            covoiturages en 3 mois, voir les conditions d'éligibilité.
          </p>
          <button>En savoir plus</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
