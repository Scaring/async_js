const superagent = require('superagent');

const { readFilePro, writeFilePro } = require('./helpers/');

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(data);

    const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    console.log(res.body.message);

    await writeFilePro('dog-image.txt', res.body.message);
    console.log('Random dog image written to file');
  } catch (err) {
    console.log(err.message);
    throw err;
  }

  return '2: got pic!';
};

(async () => {
  try {
    console.log('1: Will get dog pic!');

    const dogName = await readFilePro(`${__dirname}/dog.txt`);

    const dog1 = superagent.get(`https://dog.ceo/api/breed/${dogName}/images/random`);

    const dog2 = superagent.get(`https://dog.ceo/api/breed/${dogName}/images/random`);

    const dog3 = superagent.get(`https://dog.ceo/api/breed/${dogName}/images/random`);

    const res = await Promise.all([dog1, dog2, dog3]);
    const imgs = res.map((item) => {
        return item.body.message;
    })

    console.log(imgs);

    await writeFilePro('dog-image.txt', imgs.join('\n'));

    console.log('3: Done getting dog pic!');
  } catch (error) {
    console.log('ERROR!');
  }
})();

// getDogPic();

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((data) => {
//     return writeFilePro('dog-image.txt', data.body.message);
//   })
//   .then(() => {
//     console.log("Random dog image written to file");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
