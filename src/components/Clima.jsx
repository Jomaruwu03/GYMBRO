import React, { useState } from 'react';

const WeatherSearch = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (city === '' || country === '') {
            setError('Ambos campos son obligatorios...');
            return;
        }

        await callAPI(city, country);
    };

    const callAPI = async (city, country) => {
        const apiId = '4d7c7c6d294871d7af486f045112689e';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

        try {
            const response = await fetch(url);
            const dataJSON = await response.json();

            if (dataJSON.cod === '404') {
                setError('Ciudad no encontrada...');
            } else {
                setWeather({
                    name: dataJSON.name,
                    temp: kelvinToCentigrade(dataJSON.main.temp),
                    temp_min: kelvinToCentigrade(dataJSON.main.temp_min),
                    temp_max: kelvinToCentigrade(dataJSON.main.temp_max),
                    icon: dataJSON.weather[0].icon
                });
                setError('');
            }
        } catch (error) {
            setError('Error al obtener los datos...');
        }
    };

    const kelvinToCentigrade = (temp) => parseInt(temp - 273.15);

    return (
        <section className="weather-content min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="container mx-auto p-4 max-w-md bg-orange-300 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-700">¿Cómo está el clima en tu ciudad para hacer ejercicio?</h1>
                <div className="result mt-6">
                    {error && <p className="alert-message bg-red-100 border-l-4 border-red-500 text-red-700 p-4">{error}</p>}
                    {weather && (
                        <div className="weather-result p-4 text-center">
                            <h5 className="text-lg font-semibold">{`Clima en ${weather.name}`}</h5>
                            <img className="mx-auto" src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather icon" />
                            <h2 className="text-3xl font-bold my-2">{`${weather.temp}°C`}</h2>
                            <p className="text-gray-600">{`Max: ${weather.temp_max}°C`}</p>
                            <p className="text-gray-600 mb-4">{`Min: ${weather.temp_min}°C`}</p>
                        </div>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="get-weather mt-6">
                    <div className="mb-4">
                        <select id="city" value={city} onChange={(e) => setCity(e.target.value)}
                            className="form-select block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                             <option disabled value="">Selecciona la ciudad</option>
                            <option value="Cancun">Cancún</option>
                            <option value="Playa del Carmen">Playa del Carmen</option>
                            <option value="Chetumal">Chetumal</option>
                            <option value="Tulum">Tulum</option>
                            <option value="Bacalar">Bacalar</option>
                            <option value="Felipe Carrillo Puerto">Felipe Carrillo Puerto</option>
                            <option value="Puerto Morelos">Puerto Morelos</option>
                            <option value="Isla Mujeres">Isla Mujeres</option>
                            <option value="José María Morelos">José María Morelos</option>
                            <option value="Lázaro Cárdenas">Lázaro Cárdenas</option>
                            <option value="Solidaridad">Solidaridad</option>
                            <option value="Benito Juárez">Benito Juárez</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}
                            className="form-select block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                            <option disabled value="">Seleciona el Estado</option>
                            <option value="MX">Quintana Roo</option>
                        </select>
                    </div>
                    <input type="submit" value="Ver clima"
                        className="w-full bg-orange-500/80 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                </form>
            </div>
        </section>
    );
};

export default WeatherSearch;

