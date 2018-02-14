function init() {
    var ndx;
    var element;
    var id;

    for (ndx = 0; ndx < numCount; ndx++) {
        id = 'card-' + ndx;
        element = document.getElementById(id);
        if (element != null) {
            console.log('add listener on ' + id);
            element.addEventListener('click', compareAnswer);
        }
    }
}

function compareAnswer(event) {
    event.preventDefault();
    console.log(event.target.innerHTML);
}

function drawGrid() {

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
        id = 'id-ndx' + ndx;
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
    drawGrid();
    updateContent();
}

function startRound(event) {
    event.preventDefault();
    //init();
    invalidateGrid();
}

//const workPage = document.getElementById('id-work-page');
const startCmd = document.getElementById('id-cmd-start');
const numCount = 12;
var num = 0;

if (startCmd != null)
    console.log('Add listener');

startCmd.addEventListener('click', startRound);

init();


