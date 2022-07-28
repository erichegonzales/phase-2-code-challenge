import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ planeteers, onAddPlaneteer }) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    // planeteers.map((planeteer) => {
    //   if (planeteer.name === randomPlaneteer.name) alert('Planeteer is already shown')
    //   else updatePlaneteer(randomPlaneteer)
    // })
    updatePlaneteer(randomPlaneteer)
  }

  const updatePlaneteer = (randomPlaneteer) => {
    fetch('http://localhost:8003/planeteers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(randomPlaneteer)
    })
      .then((res) => res.json())
      .then(onAddPlaneteer(randomPlaneteer))
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
