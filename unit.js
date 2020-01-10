const readline = require('readline-sync');

function foot() {
    a = 0.3048
    num = readline.question('Please enter a number in feet to convert to meters: ')
    return num * a
}

function mile() {
    a = 1609.34 
    num = readline.question('Please enter a number in miles to convert to meters: ')
    return num * a
}

function meter() {
    num = readline.question('Please enter a number in meters to convert to meters: ')
    return num 
}

function kilo() {
    a = 1000
    num = readline.question('Please enter a number in meters to convert to kilometers: ')
    return num * a
}

function yard() {
    a = 0.9144
    num = readline.question('Please enter a number in yards to convert to meters: ')
    return num * a
}

function inch() {
    a = 0.0254
    num = readline.question('Please enter a number in inches to convert to meters: ')
    return num * a
}

function main() {
    num = readline.question('Please enter a distance: ')
    unit = readline.question('What are the units? (ft, mi, m, km, in, yd): ')
    if (unit === 'ft') {
        return num * 0.3048
    }
    else if (unit === 'mi') {
        return num * 1609.34
    }
    else if (unit === 'm') {
        return num
    }
    else if (unit === 'km') {
        return num * 1000
    }
    else if (unit === 'in') {
        return num * 0.0254
    }
    else {
        return num * 0.9144
    }
}

console.log(main());