import { useEffect, useState } from 'react';

export default function WeatherSelector() {

    const [weatherData, setWeatherData] = useState([]);

    const weatherAPI = async () => {
        const response = await fetch('api.openweathermap.org')

        setWeatherData(await response.json())
    }

    useEffect(() => {
        weatherAPI()
    }, [])

    return (
        <section className="weather-container">
            <div className="input-container">
                <div className="input-inner">
                    <h2>Departure</h2>
                    <input type="text" placeholder="Enter City/Town" />
                    <h2>Destination</h2>
                    <input type="text" placeholder="Enter City/Town" />
                </div>
            </div>
            <div className="weather-results-container">
                <div className="departure-weather">
                    <h2>Departure Current Weather</h2>
                    <div>New York, NY</div>
                    {weatherData.map((data) => {
                        return (
                            <div key={data.id}>{data.title}</div>
                        )
                    })}
                    <div>Sunny</div>
                    <div></div>
                </div>
                <div className="destination-weather">
                    <h2>Destination Current Weather</h2>
                    <div></div>
                </div>
            </div>
        </section>
    )
}