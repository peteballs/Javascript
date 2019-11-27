const readline = require('readline-sync');

let userInput = parseInt(readline.question('enter a number: '));
console.log(`you entered: {${userInput}`);

const distance = readline.question('enter the distance: ');
const convertTo = readline.question('enter the units to conver to: ');

data = distance.split(" ")

conversionFactor = {
    'feet': 0.3048,
    'miles': 1609.34,
    'm': 1,
    'km': 1000,
    'yd': 0.9144,
    'inch': 0.0254,
}

console.log(`${data[0]} ${data[1]} is ${parseInt((data[0]) * conversionFactor[data[1]]) / conversionFactor[convertTo]} ${convertTo}`)


print("Welcome to our unit converter! This is the most efficient converter available! Please enjoy our creation!")
print("Note: The unit converter will translate the correct units into your desired output!")

convert_number = int(input("Please indicate the distance to convert!.........."))
variable = input("Please indicate the type of measure used (ft m mi km).........").lower()

end_convert = input("Please indicate your desired unit conversion (ft m mi km)...........").lower()

metersft = convert_number * .3048
metersm = convert_number
metersmi = convert_number * 1609.34
meterskm = convert_number * 1000

result = "meters"
final_answer = "answer"

if variable == "ft":
    meters = metersft
if variable == "m":
    meters = metersm
if variable == "mi":
    meters = metersmi
if variable == "km":
    meters = meterskm
print (round(meters, 2))

if end_convert == "ft":
    answer = meters / .3048
if end_convert == "m":
    answer = meters  
if end_convert == "mi":
    answer = meters / 1609.34 
if end_convert == "km":
    answer = meters / 1000

print (round (answer, 2))
print("Thank you very much for coming to our site!")