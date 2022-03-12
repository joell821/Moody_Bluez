import React, {useState} from 'react';


const Weather = () => {

    let [responseObj, setResponseObj] = useState({});

    function getWeather(){
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Atlanta&lat=Atlanta&lon=Atlanta&callback=test&id=2172797&lang=null&units=imperial&mode=xml", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "bd0eeb5e54msh36b5506b6ad6e2cp1a9dbdjsn52fb559f100c"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
        
    }

    return (
        
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getWeather}>Get Forecast</button>
        </div>
 
    )
}

export default Weather;