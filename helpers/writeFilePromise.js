const fs = require('fs');

const writeFilePro = (fileName, data) => {
  return new Promise((res, rej) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) rej(err);
      res('success!');
    }); 
  });
};

module.exports = writeFilePro;
