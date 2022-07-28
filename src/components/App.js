import React, { useState, useEffect } from "react";
import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
      .then((res) => res.json())
      .then(setPlaneteers)
  }, [])

  const handleAddPlaneteer = (newPlaneteer) => {
    const updatedPlaneteerArray = [...planeteers, newPlaneteer]
    setPlaneteers(updatedPlaneteerArray)
  }

  const handleSearch = (newSearch) => {
    setSearch(newSearch)
  }

  const displayedPlaneteers = planeteers.filter((planeteer) => {
    return (planeteer.name.toLowerCase().includes(search.toLowerCase()) 
    || planeteer.bio.toLowerCase().includes(search.toLowerCase()))
  })

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch}/>
      <RandomButton planeteers={planeteers} onAddPlaneteer={handleAddPlaneteer}/>
      <PlaneteersContainer
        planeteers={displayedPlaneteers}
      />
    </div>
  );
}

export default App;
