let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#hit-button');
const counter = document.querySelector('#counter');
const delay = 100;

button.textContent = 'hit';
button.onclick = start;
display.textContent = TIMEOUT/1000. + ' sec';
const updateorig = update;

function start() {
    update = updateorig;
    button.textContent = 'hit';
    clicks++;
    counter.textContent = clicks;

    var timeout = setTimeout(()=>{
        clearInterval(update);
        button.onclick=null;
        display.textContent = 'Game over';
        clearTimeout(timeout);
        setTimeout(()=>{
            clicks = 0;
            counter.textContent = clicks;
            button.textContent = 'another play?';
            //
            button.onclick = start;
            display.textContent = TIMEOUT/1000. + ' sec';
        }, 2000);
    }, TIMEOUT);

    button.onclick = () => {
        clicks++;
        counter.textContent = clicks;
    }

    update(timeout);
}

function update(timeout) {
    update = setInterval(() => {
        timeout+=delay;
        display.textContent = (TIMEOUT-timeout)/1000. + ' sec';
    }, delay);
}