var links = [
    { url: "http://www.cnn.com", weight: 1 }, 
    { url: "http://www.espn.com", weight: 2 }, 
    { url: "http://www.google.com", weight: 3 }, 
    { url: "http://www.yahoo.com", weight: 4 }, 
    { url: "http://www.youtube.com", weight: 10 } 
  ];
  

function weightedRandom(arr)
{
  var weightSum = arr.map(l => l.weight).reduce((a, b) => a + b, 0);
  var rand = Math.random() * weightSum;
  
  var accumulated = 0;
  for (var i = 0; i < arr.length; i++)
  {
    if (rand < accumulated + arr[i].weight)
    {
      return arr[i];
    }
    
    accumulated += arr[i].weight;
  }
}

function openSite() {
  var link = weightedRandom(links);
  
  // uncomment this and call openSite function:
  //var win = window.open(link.url, '_self');
  //win.focus();
}

function experiment()
{
  var testsCount = 10000;
  var counts = {};
  
  for (var i = 0; i < links.length; i++)
  {
    counts[links[i].url] = 0;
  }
  
  for (var i = 0; i < testsCount; i++)
  {
    var link = weightedRandom(links);
    counts[link.url]++;
  }
  
  console.log(counts);
}

experiment();
