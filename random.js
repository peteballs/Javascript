let web = [
    'http://google.com/',
    'http://yahoo.com/',
    'http://bing.com/',
    'http://msn.com/',
    'http://apple.com/'
]

// let bt = document.querySelector('.button');

// bt.onclick = function random() {
//     let i = Math.floor(Math.random() * web.length);
//     parent.location = web[i];
//     return false;
// }

setTimeout(function() {
    let i = Math.floor(Math.random() * web.length);
    parent.location = web[i]}, 5000);

let timeLeft = 5;
    let elem = document.getElementById('some_div');
    
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }    