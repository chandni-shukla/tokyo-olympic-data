let count = 0;
let interval = 0;
let minutes = 0;
let seconds = 0;
let mSeconds = 0;
let timerRunning = false;

let startTimer = () => {
    count++;
    minutes = Math.floor( (count/100)/60);//100s and 60m
    seconds = Math.floor((count/100) - (minutes * 60));
    mSeconds = Math.floor( count - (seconds * 100) - (minutes * 6000));
   

    document.querySelector('#minutes').textContent = `${leadZero(minutes)}`;
    document.querySelector('#seconds').textContent = `${leadZero(seconds)}`;
    document.querySelector('#m-seconds').textContent = `${leadZero(mSeconds)}`;
}

let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', () => {
    if(!timerRunning){
        interval = setInterval(startTimer, 10);//10ms
        timerRunning = true;
    }
});

let leadZero = (number) => {
    let temp = '';
    if(number <= 9){
        temp = `0${number}`;
    }
    else temp = number;
    return temp;
};

let stopButton = document.querySelector('#stop-btn');
stopButton.addEventListener('click', () => {
    clearInterval(interval);//stop the timer
    timerRunning = false;
});

let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', () => {
    clearInterval(interval);//stop the timer
    timerRunning = false;

    count = 0;
    interval = 0;
    minutes = 0;
    seconds = 0;
    mSeconds = 0;

    document.querySelector('#minutes').textContent = `00`;
    document.querySelector('#seconds').textContent = `00`;
    document.querySelector('#m-seconds').textContent = `00`;
});
