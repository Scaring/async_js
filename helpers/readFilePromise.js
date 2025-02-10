const fs = require('fs');

const readFilePro = (file) => {
  return new Promise((res, rej) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) rej({ status: 404, message: 'I could not find that file!' });
      res(data);
    });
  });
};

module.exports = readFilePro;
