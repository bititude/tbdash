import React, { useState, useEffect } from 'react';
import { json } from 'd3';

// const csvUrl =
// 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

// const jsonFile = [{
//   "country": "Swimming",
//   "population": 47
// }]
const jsonUrl = '/users.json'
export const useData = () => {
  const [data, setData] = useState(null);
  console.log(jsonUrl)
  useEffect(() => {
    console.log("Inside useEffect")
    const row = d => {
      d.population = +d.population;
      return d;
    };
    json("users.json")
      .then(data => setData(data))
      .catch(e => console.log(e))
  }, []);
 
  return data;
};