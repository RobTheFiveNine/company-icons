/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(
  __dirname,
  '..',
  'src',
);

const distPath = path.resolve(
  __dirname,
  '..',
  'dist',
);

const inputPath = path.join(srcPath, 'icons.json');
const outputPath = path.join(distPath, 'icons.mini.json');

fs.readFile(inputPath, (error, data) => {
  if (error) {
    return console.error(error);
  }

  const json = JSON.stringify(
    JSON.parse(
      data.toString(),
    ),
  );

  return fs.writeFile(outputPath, json);
});
