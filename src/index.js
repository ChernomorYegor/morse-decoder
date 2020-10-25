const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length; i = i + 10) {
        let binaryChar = expr.substr(i, 10);
        let codeMorse = '';

        if (binaryChar.startsWith('*')) {
            result += ' ';
        } else {
            for (let j = 0; j < binaryChar.length; j = j + 2) {
                if (binaryChar[j] === '1' && binaryChar[j + 1] === '0') {
                    codeMorse = codeMorse + '.';
                } else if (binaryChar[j] === '1' && binaryChar[j + 1] === '1') {
                    codeMorse = codeMorse + '-';
                }
            }

            result += MORSE_TABLE[codeMorse];
        }
    }

    return result;
}

module.exports = {
    decode
}