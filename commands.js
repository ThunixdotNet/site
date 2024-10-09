
// syntax: command (what to type in terminal), ['Description', callback]
const commandList = new Map();
commandList.set('about', ['Basic information about Thunix', showAbout]);
commandList.set('chat', ['Join us on IRC!', gotoChat]);
commandList.set('clear', ['Clears the screen', clear]);
commandList.set('help', ['Shows this help text', showCommandList]);

function runCommand() {

    const command = input.value;
    if (command == '') { return; }

    if (document.getElementById('motd')) {
        document.getElementById('motd').remove();
    }

    input.value = '';

    if (commandList.has(command)) {
        commandList.get(command)[1].call();
    } else {
        printLine(`Invalid command "${command}"`);
    }
}

function showAbout() {
    const lines = [
        'The Thunix project provides Secure Shell (SSH) accounts, Web Hosting, Email Accounts, and many other UNIX-like services. But, most of all, we are a community of users. It was founded by hexhaxtron in the Summer of 2017, then continued by ubergeek in 2018.  In 2023, deepend took on the role. We aim to provide the best service possible with a wide variety of features, and we hope you have fun with it!',
        'Join us on IRC on irc.newnet.net/6697 in the #thunix channel, or you can go here to chat from your browser: https://newnet.net/chat.php?channel=%23thunix',
        '[signup block]',
        `thunix tries to adhere to the values and philosophy of the Hacker Ethic whenever possible. The hacker ethics and beliefs as described by Levy are:`,
        '   - Access to computers - and anything which might teach you something about the way the world works - should be unlimited and total. Always yield to the Hands-On Imperative!',
        '   - All information should be free',
        '   - Mistrust authority - promote decentralization',
        '   - Hackers should be judged by their hacking, not criteria such as degrees, age, race, sex, or position',
        '   - You can create art and beauty on a computer',
        '   - Computers can change your life for the better',
        'thunix will never use proprietary software but users can do that if they wish. This is something they should avoid, however.',
        'If you want to help keep thunix running, please consider donating.'
    ];

    printLine('About Thunix', 'h1');
    printLines(lines, true);
}

function gotoChat() {
    window.open('https://newnet.net/chat.php?channel=%23thunix', '_blank');
}

function showCommandList() {
    printLine('Available commands', 'h1');
    commandList.forEach((value, key) => {
        printLine(`${key} - ${value[0]}`);
    });
    printLine(' ');
}

function clear() {
    term.replaceChildren();
}