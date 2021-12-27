function getDate() {
    const now = new Date();

    // seconds
    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360;
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDegree + 90}deg)`;
      
    // minutes
    const minutes = now.getMinutes();
    const minutesDegree = (minutes / 60) * 360;
    const minuteHand = document.querySelector('.min-hand');
    minuteHand.style.transform = `rotate(${minutesDegree + 90}deg)`;
    
    // hours
    let hours = now.getHours();
    hours = (hours > 12) ? (hours - 12) : hours;
    const hoursDegree = (hours / 12) * 360;
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hoursDegree + 90}deg)`
    
    console.log(seconds, minutes, hours);
}

setInterval(() => {
    getDate();
}, 1000);