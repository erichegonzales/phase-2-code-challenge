import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers }) {

  const planeteerCards = planeteers.map((planeteerObj) => {
    return <Planeteer key={planeteerObj.id} planeteer={planeteerObj} />
  })

  return (
    <ul className="cards">
      {planeteerCards}
    </ul>
  );
}

export default PlaneteersContainer;
