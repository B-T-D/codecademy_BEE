const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
}

app.get('/puddings', (req, res, next) => {
  res.send(puddingFlavors);
})

// Your code here!
app.delete('/puddings/:flavor', (req, res, next) => {
  const targetIndex = findPuddingIndex(req.params.flavor);
  if (targetIndex != -1) {
    deletePuddingAtIndex(targetIndex);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
