const superagent = require('superagent');

const { readFilePro, writeFilePro } = require('./helpers/');

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((data) => {
    return writeFilePro('dog-image.txt', data.body.message);
  })
  .then(() => {
    console.log("Random dog image written to file");
  })
  .catch((err) => {
    console.log(err.message);
  });
