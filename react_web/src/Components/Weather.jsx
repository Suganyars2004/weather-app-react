import React from "react";

function Weather({ city, temperature, condition, icon }) {
  return (
    <div className="card text-center p-3 shadow-lg" style={{ width: "18rem" }}>
      <h3 className="mb-2">{city}</h3>
      <img 
        src={icon} 
        alt={condition} 
        className="mx-auto d-block mb-2" 
        style={{ width: "80px" }}
      />
      <h4>{temperature}°C</h4>
      <p className="text-muted">{condition}</p>
    </div>
  );
}

export default Weather;
