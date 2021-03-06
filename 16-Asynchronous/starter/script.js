'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryAndNeighbour(countryName){
    // Country
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);

            // Neighbour
            const neighbour = data[0].borders[0];
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => renderCountry(data, 'neighbour'))
        .catch((err) => alert('Pague a brisa mizera!'))
        .finally(() => countriesContainer.style.opacity = 1);
}

function renderCountry(countryJson, className=''){
    console.log(countryJson);
    const countryFlag = countryJson.flag;
    const countryName = countryJson.name;
    const countryRegion = countryJson.region;
    const countryPop = (countryJson.population/1000000).toFixed(1);
    const countryLang = countryJson.languages[0].name;
    const countryCurr = countryJson.currencies[0].name;
    const markup = `
        <article class="country ${className}">
          <img class="country__img" src="${countryFlag}" />
          <div class="country__data">
            <h3 class="country__name">${countryName}</h3>
            <h4 class="country__region">${countryRegion}</h4>
            <p class="country__row"><span>👫</span>${countryPop}M people</p>
            <p class="country__row"><span>🗣️</span>${countryLang}</p>
            <p class="country__row"><span>💰</span>${countryCurr}</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', markup);
    return;
}

getCountryAndNeighbour('portugal');
