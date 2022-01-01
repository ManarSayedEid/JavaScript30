const endpoint = 
'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));



function displayMatch(matches, value) {
    const html = matches.map((place) => {
        let regex = new RegExp(value, 'gi');
        let cityName = place.city.replace(regex, `<span class="hl">${value}</span>`)
        let stateName = place.state.replace(regex, `<span class="hl">${value}</span>`)
        return (
            `
            <li> 
            <span> ${cityName}, ${stateName}</span>
            <span class="population"> ${place.population}</span>
            </li>
            `
        )
    }).join('');

    document.querySelector('.suggestions').innerHTML = html;
}

function findMatch(e) {
    console.log(e.target.value);
    let matches = cities.filter((place) => {
        // make it case insensitive
        return place.state.toLowerCase().includes(e.target.value.toLowerCase()) || place.city.toLowerCase().includes(e.target.value.toLowerCase()) 
    });
    displayMatch(matches, e.target.value);
}

document.querySelector('input').addEventListener('keyup', findMatch);