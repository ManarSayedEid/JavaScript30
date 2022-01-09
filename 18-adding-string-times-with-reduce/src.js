let dataTimeElem = [...document.querySelectorAll('[data-time]')];

let seconds = 
dataTimeElem.map(item => item.dataset.time)
            .map(time => {
                let [min, sec] = time.split(':');
                min = Number(min);
                sec = Number(sec);
                return min* 60 + sec;
            })
            .reduce((total, seconds)=> total+seconds);


let hours = seconds / (60*60);
seconds = seconds % (60*60); // seconds left

let minutes = seconds / 60;
seconds = seconds % 60; // seconds left

console.log(hours, minutes, seconds);