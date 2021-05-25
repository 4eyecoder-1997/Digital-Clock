const digiClock = document.querySelector('#clock');

let clock = () => {
    let date = new Date(); //get latest date
    let hrs = date.getHours(); // extract hour from date
    let mins =  date.getMinutes(); //extract minutes from date
    let secs = date.getSeconds(); //extract seconds from date
    let period = "AM";
    
    //from above code we get time in 24 format
    //changing time in 12-hour format
    if (hrs === 0) { //if hrs is 0, set the hrs to 12
        hrs = 12;
    } else if (hrs >= 12) { //if the hrs is greater than 12
        hrs = hrs - 12; // subtract hrs from 12
        period = "PM"; // & shop pm instead of am
    }
    //using ternary operator 
    //adding 0 in front of numbers which are less than 10
    hrs = hrs < 10 ? "0" + hrs : hrs; 
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs} : ${mins} : ${secs} : ${period}`; //show all date-minutes-seconds extracted from date together
    digiClock.innerHTML = time; //showing date in #clock div
    setTimeout(clock, 1000); //refresh every 1 sec to show latest time
}

// calling back the clock function
clock();

