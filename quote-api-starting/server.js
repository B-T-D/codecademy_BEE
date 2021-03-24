const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes', (req, res, next) => {
    let responseBody = {
        quotes: []
    }
    if (!req.query.person) {
        quotes.forEach(quote => {
            responseBody.quotes.push(quote);
        })
    } else {
        quotes.forEach(quote => {
            if (quote.person === req.query.person) {
                responseBody.quotes.push(quote);
            }
        })
    }
    
    res.send(responseBody);
})

app.get('/api/quotes/random', (req, res, next) => {
    let responseBody = {
        quote: {}
    }
    const selectedQuote = getRandomElement(quotes);
    responseBody.quote = selectedQuote;
    res.send(responseBody);
})

app.post('/api/quotes', (req, res, next) => {
    const quote = req.query.quote;
    const person = req.query.person;
    if ((!quote) || (!person)) {
        res.status(400).send()
    } else {
        quotes.push({
            'quote': quote,
            'person': person
        })
        res.status(201).send();
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

