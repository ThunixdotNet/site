document.addEventListener('DOMContentLoaded', init);

let term;
let input;
const history = [];

function init() {
    
    term = document.getElementById('terminal');
    input = document.getElementById('user-input');
    term.addEventListener('click', () => input.focus());
    input.addEventListener('keyup', inputHandler);
    input.value = '';
    input.focus();
}

function inputHandler(e) {
        
    switch (e.key) {

        case 'Enter':
            runCommand();
            break;

        default:
            break;

    }

}

function printLine(line, fmt = 'regular') {
    if (line.length == 0) { return; }   

    if (typeof line == 'string') {
        const newLine = document.createElement('div');
        newLine.textContent = line;
        term.appendChild(newLine);

        if (fmt == 'h1') {
            const len = lines.length;
            const addlLine = document.createElement('div');
            addlLine.textContent = '='.repeat(len);
            addlLine.setAttribute('style', 'margin-bottom: 1em;');
            term.appendChild(addlLine);
        }
    } 

}

function printLines(lines, lineBetween = false) {
    for (let line of lines) {
        printLine(line);
        if (lineBetween) { printLine(' '); }
    }

}