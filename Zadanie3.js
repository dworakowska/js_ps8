//	Given two strings, write a program that efficiently finds the longest common subsequence.
// ‘karol rolki’

"use strict";

class LongestFinder {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  najdluzszyWspolnyCiag(a, b) {
    let temp = "";
    let longest = "";
    let needsClear = false;
    for (let i = 0; i < a.length; i++) {
      if (needsClear) {
        temp = "";
        needsClear = false;
      }
      for (let j = 0; j < b.length; j++) {
        if (a.charAt(i) === b.charAt(j)) {
          temp += a.charAt(i);
          if (temp.length > longest.length) {
            longest = temp;
          }
          if (a.charAt(i + 1) !== b.charAt(j + 1)) {
            needsClear = true;
          }
        }
      }
    }

    return longest;
  }

  znajdz() {
    return this.najdluzszyWspolnyCiag(this.a, this.b);
  }
}

let s = new LongestFinder("karol", "rolki");
console.log(s.znajdz());
