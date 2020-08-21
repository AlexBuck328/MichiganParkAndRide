import fs from 'fs';

// read the file with a synchronous fs request
const rawData = fs.readFileSync('data/cartocolors.json');

// use JSON.parse() to parse raw string to JSON
const data = JSON.parse(rawData);

// create a new object with key 'Antique' and value the object
const outputData = {
    'Earth': data['Antique']
};

// write the output file, stringifying the JS object
fs.writeFileSync('data/antiquecolors.json', JSON.stringify(outputData));

console.log('data/antiquecolors.json written to file!');