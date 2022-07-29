import React, { useState, useEffect } from "react";
import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

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

  const handleAgeSort = () => {
    setSort(!sort)
  }

  let displayedPlaneteers = planeteers.filter((planeteer) => {
    return (planeteer.name.toLowerCase().includes(search.toLowerCase())
      || planeteer.bio.toLowerCase().includes(search.toLowerCase()))
  })

  if (sort === true) {
    displayedPlaneteers = displayedPlaneteers.sort((planeteer1, planeteer2) => {
      return planeteer2.born - planeteer1.born
    })
  }

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} onSort={handleAgeSort} />
      <RandomButton planeteers={planeteers} onAddPlaneteer={handleAddPlaneteer} />
      <PlaneteersContainer planeteers={displayedPlaneteers} />
    </div>
  );
}

export default App;
