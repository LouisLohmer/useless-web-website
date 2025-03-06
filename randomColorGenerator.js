function randomColorGenerator() {
    let newHexColorCode = '#';
    const hexColorCodeElements = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];

    for (let i = 0; i < 6; i++) {
        let randomHexColorCodeElement = hexColorCodeElements[Math.floor(Math.random() * 16)];
        newHexColorCode += randomHexColorCodeElement;
    }

    document.body.style.backgroundColor = newHexColorCode;

    let spanHexColorCode = document.getElementById('current-hex-color-code');
    spanHexColorCode.innerHTML = 'Current background color: <b>' + newHexColorCode + '</b>';
}

function clickCounter(newKeyRelease) {
    let currentClickAmount = 0 + newKeyRelease;

    let spanClickcounter = document.getElementById('current-clickamount');
    spanClickcounter.innerHTML = 'Amount of clicks on the enter key: <b>' + currentClickAmount + '</b>';
}

function setNewEventlistener() {
    let newKeyRelease = 0;
    document.body.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            randomColorGenerator();
            newKeyRelease += 1;
            clickCounter(newKeyRelease);
        }
    });
}

setNewEventlistener();
randomColorGenerator();
clickCounter(0);
