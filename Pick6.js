const readline = require('readline-sync');
function ticket() {
    let ticket = []
    for (let i = 0; i < 6; ++i)
        ticket.push(Math.floor(((Math.random() * 99) + 1)))
    return ticket
    }
function check_ticket() {
    user_ticket = ticket()
    comp_ticket = ticket()
    let matches = 0
    for (let i = 0; i < user_ticket.length ; i++){
        if (user_ticket[i] == comp_ticket[i]){
        matches++};
        }
    return matches;
    }
function main() {
    MAX_ITER = 1E5
    balance = 0
    expenses = 0
    for (let i = 0; i < 1E5; i++){
    let wins = [0, 4, 7, 100, 5E4, 1E6, 25E7]
    expenses += 2
    balance += wins[check_ticket()]}
console.log(`Balance: ${balance} Expenses: ${expenses} ROI: ${(balance - expenses) / expenses}`);
}
main()