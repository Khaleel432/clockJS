//Update page
function updatePage() {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currentTime = new Date();
    const daySimple = currentTime.getUTCDate();
    let day = daySimple;
    const dayName = days[currentTime.getUTCDay()];
    const month = currentTime.getMonth();
    const monthName = months[currentTime.getMonth()];
    const year = currentTime.getFullYear();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = "AM";

    const lastDigit = day%10;
    switch(lastDigit){
        case 1:
            day = day + "st";
            break;
        case 2:
            day = day + "2nd";
            break;
        case 3:
            day = day + "3rd";
            break;
        default:
            day = day + "th";
            break;
    }

    if(hours>12){
        ampm = "PM";
        hours -= 12;
    }

    if(minutes<10){
        minutes = "0"+minutes;
    }

    if(seconds<10) {
        seconds = "0"+seconds;
    }

    if(hours==0){
        hours = 12;
    }
    
    document.getElementById("day").innerHTML = `${day} of ${monthName} ${dayName} ${year} (${daySimple}/${month}/${year})`
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
}

function startClock() {
    setInterval(updatePage,1000);
    //document.getElementById("day").innerHTML = new Date();
}