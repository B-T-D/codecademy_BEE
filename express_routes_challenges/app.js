const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const battlefields = {
  fortSumter: {
    state: 'SC',
  },
  manassas: {
    state: 'VA',
  },
  gettysburg: {
    state: 'PA',
  },
  antietam: {
    state: 'MD',
  }
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/battlefields', (req, res, next) => {
    res.send(battlefields);
})

app.get('/battlefields/:name/', (req, res, next) => {
    const foundName = Object.keys(battlefields).find(element => element.toString() === req.params.name);
    if (foundName) {
        res.send(battlefields[foundName])
    } else {
        res.status(404).send();
    }
})