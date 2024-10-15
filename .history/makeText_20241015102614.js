//Script should read file or URL, generate text using the Markov Machine, and handle errors

const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov");

//generate text from file or URL
function generateText(text) {
  let mm = MarkovMachine(text);
  console.log(mm.makeText());
}

//read file and generate text
function makeTextFromFile(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      generateText(data);
    }
  });
}

//read URL and generate text

async function makeTextFromURL(url) {
  try {
    let resp = await axios.get(url);
    generateText(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

//command line
let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeTextFromFile(path);
} else if (method === "url") {
  makeTextFromURL(path);
} else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}
