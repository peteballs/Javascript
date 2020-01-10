const readline = require('readline-sync');

function rot() {
    
    phrase = readline.question('Please enter a phrase to encrypt: ')
    shift = parseInt(readline.question('How many times do you want to shift? '))
    x = phrase.length
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let cipher = ''

    for (let i = 0; i < x; i++) {
    char = phrase[i]
    loc = abc.indexOf(char)
    new_loc = (loc + shift) % 26
    cipher = cipher + abc[new_loc]}

console.log(cipher);

}

rot()