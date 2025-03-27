import { useState } from 'react';
// import { show } from '../../services/weatherService';
import './WeatherSearch.css';

const WeatherSearch = (props) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchData(city);
        //clear from input
        setCity('');
    }

    return (
        <section>
            <h2>Weather Search</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="city">Enter a city: </label>  
            <input 
            id="city" 
            type="text"
            value={city} 
            onChange={(e) => setCity(e.target.value)} />
            <button type="submit">Search</button>
        </form>
        </section>
    )
}
export default WeatherSearch;