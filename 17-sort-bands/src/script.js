const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsDetails = [];

// function wesbos(bandName){
//     return bandName.replace((/^(a |an |the)/i), '');
// }

bands.forEach(band => {
    let bandDetails = {
        title: "",
        prefix: ""
    }
    if (band.startsWith('A ')) {
        bandDetails = {
            title: band.split('A ')[1],
            prefix: 'A '
        }
    }
    else if (band.startsWith('An ')) {
        bandDetails = {
            title: band.split('An ')[1],
            prefix: 'An '
        }
    }
    else if (band.startsWith('The ')) {
        bandDetails = {
            title: band.split('The ')[1],
            prefix: 'The '
        }
    }
    else {
        bandDetails = {
            title: band,
            prefix: ""
        }
    }
    bandsDetails.push(bandDetails);
})

bandsDetails.sort((a, b) => {
    if (a.title > b.title)
        return 1;
    else
       return-1;
})


let sortedBands = bandsDetails.map(band => band.prefix + band.title);
document.querySelector('#bands') .innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
console.log(sortedBands);