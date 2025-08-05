import { useState } from "react";
import axios from "axios";

function WeatherApp() {
    const [inputCity, setInputCity] = useState("");
    const [data, setData] = useState(null);

    const fetchWeather = async () => {
        if (!inputCity) return;
        try {
            // Mocked weather data instead of real API
            const mockData = {
                name: inputCity,
                weather: [{ main: "Clear", description: "clear sky" }],
                main: { temp: 25, humidity: 40 },
                wind: { speed: 3.5 }
            };
            setData(mockData);
        } catch (err) {
            console.error("Error fetching weather:", err);
            setData(null);
            alert("Could not find weather for that city.");
        }
    };

    return (
        <div style={{ minHeight: "100vh", padding: 20, background: "#e0f2fe" }}>
            <h2 style={{ textAlign: "center" }}>Weather App</h2>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                <input
                    type="text"
                    placeholder="City name..."
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                    style={{ padding: 10, marginRight: 10 }}
                />
                <button onClick={fetchWeather} style={{ padding: 10 }}>
                    Check
                </button>
            </div>

            {data && (
                <div style={{ margin: "0 auto", width: 300, padding: 20, background: "#fff", borderRadius: 8 }}>
                    <h3>{data.name}</h3>
                    <p>{data.weather[0].main} - {data.weather[0].description}</p>
                    <p>Temp: {data.main.temp}°C</p>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p>Wind: {data.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
