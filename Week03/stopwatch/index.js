const currentTime = document.querySelector('#currrentTime');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#restBtn');
const lapBtn = document.querySelector('#lapBtn');
const List = document.querySelector('.lapList');


// States:

let intervalID;
let lapList = [];

let time = {
  hr: 00,
  min: 01,
  sec: 56,
};

// Functions

function resetHtml() {
  currentTime.innerHTML = `${time.hr}:${time.min}:${time.sec}`;
}
function reset() {
  startBtn.removeAttribute('disabled');
  clearInterval(intervalID);
  time.hr = 00;
  time.min = 00;
  time.sec = 00;
  currentTime.innerHTML = '00:00:00';
}

function incrementBySec(time) {
  console.log('working');
  if (time.sec < 59) {
    time.sec++;
  } else if (time.min < 59) {
    time.sec = 00;
    time.min++;
  } else {
    time.sec = 00;
    time.min = 00;
    time.hr++;
  }
}

function start() {
  console.log(startBtn);
  intervalID = setInterval(() => {
    incrementBySec(time);
    resetHtml();
  }, 1000);
  startBtn.setAttribute('disabled', 'true');
}

function stop() {
  clearInterval(intervalID);
  startBtn.removeAttribute('disabled');
}

function Lap() {
  lapList.push({ ...time });
    console.log(lapList);

    List.innerHTML = lapList.map((item,index) => {
        return `<p><span class="font-bold">Lap${index+1}</span>: ${item.hr}:${item.min}:${item.sec}</span>`
    })
    
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', Lap);
