import React, { useState } from "react";

function Planeteer({ planeteer }) {
  const { id, name, fromUSA, born, bio, quote, pictureUrl, twitter} = planeteer
  const [showBio, setShowBio] = useState(true)

  const toggleBio = () => {
    setShowBio(showBio => !showBio)
  }

  const date = new Date()
  const year = date.getFullYear()
  let age = year - born

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
          onClick={toggleBio}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{showBio ? 
            `Bio: ${bio}` : `Quote: ${quote}`}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>{fromUSA ? 'USA-based' : 'Working overseas'}</p>
            <p>{`Age: ${age}`}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
