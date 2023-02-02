/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleCities` variable below to gain access to an array of the ten biggest cities in North America.

  Keep in mind that your functions must still have and use a parameter for accepting all cities.
*/
const exampleCities = require("./cities");
// Do not change the line above.

/**
 * getAllCityNames()
 * -----------------------------
 * Returns all the names from an array of cities. If the inputted `cities` array is empty, return `[]`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are city names.
 *
 * EXAMPLE:
 *  getAlLCityNames(cities);
 *  //> [
      "Mexico City",
      "New York City",
      "Los Angeles",
      "Toronto",
      "Chicago",
      "Houston",
      "Havana",
      "Montreal",
      "Ecatepec de Morelos",
      "Philadelphia",
    ];
 */
function getAllCityNames(cities) {
  const cityNames = [];
  for (const city of cities) {
    cityNames.push(city.name);
  }
  return cityNames;
}

/**
 * getOldestCity()
 * -----------------------------
 * Returns the name of the inputted city with the oldest yearFounded. If the inputted `cities` array is empty, return null.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {string} The name of the oldest inputted city.
 *
 * EXAMPLE:
 *  getOldestCity(cities);
 *  //> "Mexico City"
 */
function getOldestCity(cities) {
  if (!cities.length) {
    return null;
  }

  let oldestCity = cities[0];
  for (let i = 1; i < cities.length; i++) {
    if (cities[i].yearFounded < oldestCity.yearFounded) {
      oldestCity = cities[i];
    }
  }
  return oldestCity.name;
}

/**
 * findByName()
 * -----------------------------
 * Returns a city object from an array of objects based on the given name. If the inputted `cities` array is empty or the name does not match any city, return `null`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} name - A name.
 * @returns {Object|null} The city object with the matching name.
 *
 * EXAMPLE:
 *  findByName(cities, "Houston");
 *  //> {
        name: "Houston",
        country: "United States",
        population:	2296224,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Panoramic_Houston_skyline.jpg/240px-Panoramic_Houston_skyline.jpg`,
        yearFounded: 1837,
        stateOrProvince: "Texas",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        id: 't870ol'
    }
 */
function findByName(cities, name) {
  for (const city of cities) {
    if (city.name === name) {
      return city;
    }
  }
  return null;
}

/**
 * filterByCountry()
 * -----------------------------
 * Returns all city objects with a matching country. Case-insensitive. If the inputted `cities` array is empty or no cities match the inputted `country`, return `[]`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} country - The country a city is in. (e.g. "United States")
 * @returns {Object[]} An array of cities where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByCountry(cities, "Mexico");
 *  //> [
      {
        // Mexico City
      },
      {
        // Ecatepec de Morelos
      },
    ]
    function filterByCountry() {}
*/
function filterByCountry(cities, country) {
  const filteredCities = [];
  for (const city of cities) {
    if (city.country.toLowerCase() === country.toLowerCase()) {
      filteredCities.push(city);
    }
  }
  return filteredCities;
}

/**
 * countByCountry()
 * -----------------------------
 * Returns an object where the keys are countries and the values are the number of cities in the array that are in that country. If the inputted `cities` array is empty, return `{}`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {Object} An object where keys are countries (e.g. "Mexico") and the values are how many cities in the array are in that country (e.g. 2).
 *
 * EXAMPLE:
 *  countByCountry(cities);
 *  //> {
 *        "Mexico": 2,
 *        "United States": 5,
 *        "Canada": 2,
 *        "Cuba": 1
 *      }
 */
function countByCountry(cities) {
  const countedCity = {};
  for (const city of cities) {
    countedCity[city.country] ? countedCity[city.country]++ : countedCity[city.country] = 1;
  }
  return countedCity;
}

/**
 * findBySportsTeam()
 * -----------------------------
 * Returns the name of the city with a sports team matching the one given. If the inputted `cities` array is empty or no cities have a matching sports team, return null.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} teamName - The name of a sports team (with "The" omitted if applicable).
 * @returns {string} The name of a city with a matching sports team.
 *
 * EXAMPLE:
 *  findBySportsTeam(cities, "Cubs")
 *  //> "Chicago"
 */
function findBySportsTeam(cities, teamName) {
  for (const city of cities) {
    if (city.sportsTeams.includes(teamName)) {
      return city.name;
    }
  }
  return null;
}

/**
 * getAverageFoundingYearForCapitals()
 * -----------------------------
 * Averages all of the founding years ONLY of the cities which are EITHER national capitals or the capital of their provice/state, and returns it as a number, rounded to the nearest integer. If the inputted `cities` array is empty or contains no capital cities, return `0`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {number} The average founding year across all capital cities.
 *
 * EXAMPLE:
 *  getAverageFoundingYearForCapitals(cities);
 *  //> 1531
 */
function getAverageFoundingYearForCapitals(cities) {
  let count = 0, sum = 0;
  for (const city of cities) {
    if (city.nationalCapital || city.stateOrProvinceCapital) {
      count ++;
      sum += city.yearFounded;
    }
  }
  if (!count) {
    return 0;
  }
  return Math.round(sum / count);
}

/**
 * getAllCitiesFoundedBeforeYear()
 * -----------------------------
 * Returns the names of all cities with a `yearFounded` less than the given year.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of cities where the `yearFounded` is less than the inputted year.
 *
 * EXAMPLE:
 *  getAllCitiesFoundedBeforeYear(cities, 1492);
 *  //> [
      {
        // Mexico City
      },
      {
        // Ecatepec de Morelos
      },
    ];
 */
function getAllCitiesFoundedBeforeYear(cities, year) {
  const cityArray = [];
  for (const city of cities) {
    if (city.yearFounded < year) {
      cityArray.push(city);
    }
  }
  return cityArray;
}

// Do not change anything below this line.
module.exports = {
  getAllCityNames,
  getOldestCity,
  findByName,
  filterByCountry,
  countByCountry,
  findBySportsTeam,
  getAverageFoundingYearForCapitals,
  getAllCitiesFoundedBeforeYear,
};
