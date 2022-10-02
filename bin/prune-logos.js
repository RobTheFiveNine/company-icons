/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function getLogoFilename(company) {
  return `${company.exchange}-${company.ticker}${company.ext}`;
}

const srcPath = path.resolve(__dirname, '..', 'src');

const logosPath = path.resolve(__dirname, '..', 'logos');

const jsonPath = path.join(srcPath, 'icons.json');

const rawdata = fs.readFileSync(jsonPath);
const companies = JSON.parse(rawdata);

const usedLogoFiles = companies.reduce(
  (acc, c) => ((acc[getLogoFilename(c)] = true), acc),
  {}
);

fs.readdir(logosPath, function (err, files) {
  if (err) {
    return console.log(`Unable to scan logos directory: ${err}`);
  }

  files.forEach(function (file) {
    if (!usedLogoFiles[file]) {
      const filePath = path.join(logosPath, file);
      fs.unlink(filePath, err => {
        if (err) {
          console.log(`Unable to delete file: ${file}: ${err}`);
        }
      });
    }
  });
});
