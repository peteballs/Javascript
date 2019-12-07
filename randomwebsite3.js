
let links =[
  "http://www.google.com/",
  "http://www.bing.com/",
  "http://www.yahoo.com/",
  "http://www.apple.com/"
]

setTimeout (function() {
  let i = Math.floor(Math.random() * links.length);
  parent.location = links[i]}, 5000);

let timeLeft = 5;
    let elem = document.getElementById('time');
    let timerId = setInterval (countdown, 1000)

    function countdown() {
      if (timeleft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
  
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  