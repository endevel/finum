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
}


function compareAnswer(event) {
    var val = event.target.innerHTML;
    if (val === num.toString()) {
        tryCount--;
        if (tryCount === 0) {
            alert('Round finish');
            return;
        }
        updateContent();
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
    tryCount = 3;
    invalidateGrid();
}

//const workPage = document.getElementById('id-work-page');
const startCmd = document.getElementById('id-cmd-start');
const numCount = 22;

var num = 0;
var tryCount = 15;

if (startCmd != null)
    console.log('Add listener');

startCmd.addEventListener('click', startRound);

init();


