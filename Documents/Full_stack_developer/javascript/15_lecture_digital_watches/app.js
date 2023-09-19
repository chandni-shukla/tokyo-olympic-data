let indianWatch = function (){
    let date = new Date();
    let options = { timeZone : 'Asia/Kolkata'};
    let indianTime = date.toLocaleTimeString('en-US', options);
    let indianDate = date.toLocaleDateString('en-US', options);
    document.querySelector('#india-time').textContent = indianTime;
    document.querySelector('#india-date').textContent = indianDate;
}
setInterval(indianWatch, 1000);//ms

//Assignments
//America/New_York
let americanWatch = function (){
    let date = new Date();
    let options = {timeZone : 'America/New_York'};
    let americanTime = date.toLocaleTimeString('en-US', options);
    let americanDate = date.toLocaleDateString('en-US', options);
    document.querySelector('#america-time').textContent = americanTime;
    document.querySelector('#america-date').textContent = americanDate;
}
setInterval(americanWatch, 1000);//ms

//Europe/London

let londonWatch = function () {
    let date = new Date();
    let options = {timeZone: 'Europe/London' };
    let londonTime = date.toLocaleTimeString('en-GB', options);
    let londonDate = date.toLocaleDateString('en-GB', options);
    document.querySelector('#london-time').textContent = londonTime;
    document.querySelector('#london-date').textContent = londonDate;
}
setInterval(londonWatch, 1000); // Update every seconds


//Asia/Tokyo

let tokyoWatch = function () {
    let date = new Date();
    let options = { timeZone: 'Asia/Tokyo' };
    let tokyoTime = date.toLocaleTimeString('ja-JP', options);
    let tokyoDate = date.toLocaleDateString('ja-JP', options);
    document.querySelector('#tokyo-time').textContent = tokyoTime;
    document.querySelector('#tokyo-date').textContent = tokyoDate;
}
setInterval(tokyoWatch, 1000); // Update every second
