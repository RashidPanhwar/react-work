import React from 'react'
import { useState } from 'react';

const CountriesCities = () => {
    const [country, setCountry] = useState({name: '', value: '', cities: []});
  
    const countries = [
        {name: 'Pakistan', value: 'pak', cities: ['karachi', 'hyderabad']},
        {name: 'Saudi', value: 'sau', cities: ['Riyadh', 'Jiddah']},
        {name: 'Canada', value: 'can', cities: ['toronto', 'winipage']}
    ]

    return (
    <>
        <div>
            <select value={country} onChange={(e) => {
                console.log(e.target.value);
                setCountry(e.target.value);
            }}>
                {countries.map((item, index) => {
                    return<option key={index} value={item.value}> {item.name} </option>
                })}
            </select>
            <select value={country}>
                {countries.country.cities.map((item, i) => {
                    return   <option value={i}> {item} </option>
                })}
            </select>
        </div>
    </>
  )
}

export default CountriesCities