function randomColorGenerator() {
    let newHexColorCode = '#';
    let htmlBody = document.body;
    let spanHexColorCode = document.getElementById('current-hex-color-code');
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

    htmlBody.style.backgroundColor = newHexColorCode;
    spanHexColorCode.innerHTML = 'Current background color: <b>' + newHexColorCode + '</b>';
}

function clickCounter(newClickamount) {
    let currentClickAmount = 0 + newClickamount;
    let spanClickcounter = document.getElementById('current-clickamount');

    spanClickcounter.innerHTML = 'Amount of clicks on the enter key: <b>' + currentClickAmount + '</b>';
}

function setNewEventlistener() {
    let clickAmount = 0;

    document.body.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            randomColorGenerator();
            clickAmount += 1;
            clickCounter(clickAmount);
        }
    });
}

setNewEventlistener();
randomColorGenerator();
clickCounter(0);
