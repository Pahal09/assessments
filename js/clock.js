setInterval(() => {
    // everything is under set interval for clock to work. 
    let a = new Date();
    // declaring a variable "a" for new date for getting real date and time.  
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // week array to convert the numeric weekdays in characters.
    let day = week[a.getDay()];
    // concating day and date 
    let date = day + "," + a.toLocaleDateString();
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let session = "PM";
    // declaring variable to get hours,minutes and seconds 
    m = checkTime(m)
    s = checkTime(s)
    let time = h + ':' + m + ':' + s + ':' + session;
    // making a time string  
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
    // getting both div and for date and time for showing them respectively
}, 1000);
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}




