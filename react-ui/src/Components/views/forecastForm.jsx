import { useState } from "react";

const ForecastForm = () => {
   
    const [zipCode, setZipCode] = useState('');

const handleChange = e => {
    const target = e.target.value;
    setZipCode(target);
  };

    const handleSubmit = e => {
        e.preventDefault();
         
    const CurrentForecast = () => {

    const [currentWeather, setCurrentWeather] = useState('');

           
const GetData = () => {
    fetch(`http://localhost:8080/location/${zipCode}`)
    .then(data => data.json())
    .then(response => {
      console.log(response)
    });
    
  }
  
  
};
    }
    
    return (
      <>
    <form onSubmit={handleSubmit}> 
      <div className="forecast">
        <label> Please enter zip code</label>
        <input onChange={handleChange} value = {zipCode} />
      </div>
      <button>Get Forecast</button>
      
    </form> 
     
    </>
     
    
  )
    }


export default ForecastForm;