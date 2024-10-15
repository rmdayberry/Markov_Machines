/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");

    if (this.words.length === 0) {
      throw new Error("No valid words found in the inpute text.");
    }

    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (!this.chains[word]) {
        this.chains[word] = [];
      }
      this.chains[word].push(nextWord);
    }
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let result = [];
    let word = this.words[Math.floor(Math.random() * this.words.length)];
    while (result.length < numWords && word !== null) {
      result.push(word);
      let nextWords = this.chains[word];
      word = nextWords[Math.floor(Math.random() * nextWords.length)];
    }
    return result.join(" ");
  }
}

module.exports = { MarkovMachine };
