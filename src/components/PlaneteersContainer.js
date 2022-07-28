import React, { useState, useEffect } from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer() {
  const [planeteers, setPlaneteers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
    .then((res) => res.json())
    .then(setPlaneteers)
  }, [])

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
