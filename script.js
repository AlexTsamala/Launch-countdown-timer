const target = new Date ('December 31, 2022 00:00:00')
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const  millisecondConverter = 1000*60*60*24;

function countdownTimer(){
    let currentDate = new Date();
    let timeStep = target-currentDate;
    let counterOfDay =Math.floor(timeStep/millisecondConverter)
    day.innerHTML=(counterOfDay);
    let counterOfHour = Math.floor((timeStep-Math.floor(timeStep/millisecondConverter)*millisecondConverter)/3600000);
    hour.innerHTML=(counterOfHour);
    let counterOfMinute = Math.floor((timeStep-(((Math.floor(timeStep/millisecondConverter))*millisecondConverter)+counterOfHour*3600000))/60000);
    minute.innerHTML = (counterOfMinute)
    let counterOfSecond =Math.floor((timeStep-(((Math.floor(timeStep/millisecondConverter)*millisecondConverter)+counterOfHour*3600000)+counterOfMinute*60000))/1000);
    second.innerHTML = (counterOfSecond);
    if(day.textContent.length===1){
        day.textContent="0"+counterOfDay;   
    }
    if(hour.textContent.length===1){
        hour.textContent="0"+counterOfHour;
    }

    if(minute.textContent.length===1){
        minute.textContent="0"+counterOfMinute;
    }

    if(second.textContent.length===1){
        second.textContent="0"+counterOfSecond;
    }
}

countdownTimer();
setInterval(()=>{
    countdownTimer();
},1000)