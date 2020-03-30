//  Write a program that finds the longest palindromic substring of a given string.
// ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.

"use strict";

class PalindromSolver {
  constructor(word) {
    this.word = word;
  }

  isPalindrome(string) {
    let czyJestDluzszeOd2 = string.length > 2;

    let czyJestPalindromem =
      string ===
      string
        .split("")
        .reverse()
        .join("");

    let czySpelniaWarunek = czyJestDluzszeOd2 && czyJestPalindromem;

    return czySpelniaWarunek;
  }

  findLongestPalindrom() {
    let temp = "";
    let longest = "";
    for (let i = 0; i < this.word.length; i++) {
      temp = "";
      for (let j = i; j < this.word.length; j++) {
        console.log(this.word.charAt(i), this.word.charAt(j));
        temp += this.word.charAt(j);
        console.log(`temp: ${temp}`);
        if (this.isPalindrome(temp)) {
          console.log(`found: ${temp}`);

          if (temp.length > longest.length) {
            longest = temp;
          }
        }
      }
    }

    return longest;
  }
}

let solution = new PalindromSolver("kajak");
console.log(solution.findLongestPalindrom());
