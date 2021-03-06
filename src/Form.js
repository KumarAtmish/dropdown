import React, { useState } from "react";
import "./styles.css";
import Select from "react-select";
import { states } from "./stateCity";

export default function Form() {
  const [city, setCity] = useState([]);
  const [theState, setTheState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const stateList = Object.keys(states).map((key) => ({
    name: key
  }));

  const handleStateChange = (e) => {
    console.log("Selected state", e);
    const stateSel = e.target.value;
    const citySel = stateSel !== "" ? states[stateSel] : "";

    setTheState(stateSel);
    setCity(citySel);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    console.log("Selected city", e.target.value);
    const citySel = e.target.value;
    setSelectedCity(citySel);
  };

  return (
    <div className="App">
      <h1>Dropdown state and city</h1>

      <div className="Container">
        <select
          name="state"
          onChange={(e) => handleStateChange(e)}
          value={theState}
        >
          {stateList.map((states, key) => (
            <option key={key} value={states.name}>
              {states.name}
            </option>
          ))}
        </select>

        <select
          name="City"
          onChange={(e) => handleCityChange(e)}
          value={selectedCity}
        >
          <option value="">Select the city</option>
          {city.map((cities, key) => (
            <option key={key} value={cities}>
              {cities}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
