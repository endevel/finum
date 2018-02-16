function init() {
    var ndx;
    var element;
    var id;

    for (ndx = 0; ndx < numCount; ndx++) {
        id = 'id-a' + ndx;
        element = document.getElementById(id);
        if (element != null) {
            element.addEventListener('click', compareAnswer);
        }
    }
    gameStatus = GAME_WAIT;
}


function compareAnswer(event) {
    if (gameStatus !== GAME_RUNING)
        return;

    var val = event.target.innerHTML;
    var tm = new Date().getTime() - startTime;
    var roundDiv;

    clickCount++;
    if (val === num.toString()) {
        tryCount--;
        if (tryCount === 0) {
            //alert('Round finish, time: ' + tm/1000);
            roundDiv = document.getElementById('id-round-stat');
            roundDiv.innerHTML = roundStatText + ' ' + tm/1000 + ' сек. Ошибок: ' + errCount +
                ' ... чтобы продолжить, нажмите Старт';
            gameStatus = GAME_END;
            return;
        }
        updateContent();
    } else {
        errCount++;
    }
}


function updateContent() {
    var foundNdx = Math.round(Math.random() * (numCount - 1));
    console.log('foundNdx: ' + foundNdx);
    var ndx;
    var value = 0;
    var element;
    var id;
    console.log('Start update, numCount = ' + numCount);
    for (ndx = 0; ndx < numCount; ndx++) {
        value = Math.round(Math.random() * 10000);
        id = 'id-a' + ndx;
        element = document.getElementById(id);
        if (element != null) {
            element.innerText = value;
        }

        if (ndx === foundNdx) {
            num = value;
            element = document.getElementById('id-question');
            if (element != null) {
                element.innerHTML = value;
            }
        }
    }
}

function invalidateGrid() {
    console.log('Invalidate grid');
    updateContent();
}

function startRound(event) {
    event.preventDefault();
    startTime = new Date().getTime();
    tryCount = 3;
    gameStatus = GAME_RUNING;

    var roundDiv = document.getElementById('id-round-stat');
    roundDiv.innerHTML = '';
    errCount = 0;
    clickCount = 0;

    invalidateGrid();
}

//const workPage = document.getElementById('id-work-page');
const startCmd = document.getElementById('id-cmd-start');
const numCount = 22;
const roundStatText = 'Статистика раунда: ';

const GAME_RUNING = 1;
const GAME_END = 2;
const GAME_WAIT = 3;

var num = 0;
var tryCount = 15;
var gameStatus = GAME_WAIT;
var errCount = 0;
var clickCount = 0;

var startTime;

if (startCmd != null)
    console.log('Add listener');

startCmd.addEventListener('click', startRound);

init();


