var endpoint = 'https://type.fit/api/quotes';
var quoteDiv = document.querySelector('#quote');
var quoteBtn = document.querySelector('#new-quote');

let quotes = [];

quoteBtn.addEventListener('click', randomQuote);

 fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    quotes = data;
    randomQuote();
  })

  function randomQuote() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    var author;
  if (quote.author) {
    author = quote.author;
  } else {
    author = 'Unknown';
  }
  
    quoteDiv.innerHTML = `<h5>"${quote.text}"</h5>
      <p>Author: ${author} </p>`;
  }

