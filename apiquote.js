//console.log(apiKey);
//fetch("https://favqs.com/api/qotd")
//    .then((response) => {
//        return response.json();
//    })
//    .then((data) => {
//        let quote = data.quote.body;
//        console.log(data.quote);
//        document.write(`${quote} by ${data.quote.author}`);
//    })
//    .catch((error) => {
//        console.log(error);
//    });
const url = 'https://favqs.com/api/quotes'
axios.get(url, {
    headers: {
        'Authorization': `Token token="${apiKey}`
    }
})
.then(request => {
    const quote = document.querySelector('#quote')
    const author = document.querySelector('#author')
    for (let i = 0; i < 25; i++){
        let quote = document.createElement("li")
        let author = document.createElement("li")
        quote.setAttribute("class", "body")
        author.setAttribute("class", "author_class")
        quote.innerText = request.data.quotes[i].body
        author.innerText = request.data.quotes[i].author
        document.body.appendChild(quote)
        document.body.appendChild(author)
    }
    //console.log(request.data.quotes[0])
    // quote.textContent = request.data.quotes[0].body
    // author.textContent = request.data.quotes[0].author
    //console.log(request.data)
})
.catch(error => console.log(error))