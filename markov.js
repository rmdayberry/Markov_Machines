/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    for(let i=0; i<this.words.length; i++){
      let word= this.words[i];
      let nextWord = this.words.[i+1] || null;

      if(!this.chains[word]){
        this.chains[word]=[];
      }
      this.chains[word].push(nextWord);
    }
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    
  }
}
