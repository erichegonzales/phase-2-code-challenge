import React from "react";

function Planeteer({ planeteer }) {
  const { id, name, fromUSA, born, bio, quote, pictureUrl, twitter} = planeteer

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{bio}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {fromUSA ? 'USA-based' : 'Working overseas'}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
