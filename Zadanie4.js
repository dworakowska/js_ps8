//	Write a code that multiplies two matrices together. Dimension validation required.

"use strict";

class MultiplyMatrix {
  constructor(m1, m2) {
    this.m1 = m1;
    this.m2 = m2;
  }

  multiply(m1, m2) {
    let result = [];
    for (let i = 0; i < m1.length; i++) {
      result[i] = [];
      for (let j = 0; j < m2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < m1[0].length; k++) {
          sum += m1[i][k] * m2[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  wynikMnozenia() {
    if (m1[0].length !== m2.length) {
      throw Error(
        "Szerokość pierwszej macierzy nie jest równa wysokości drugiej."
      );
    }
    return this.multiply(this.m1, this.m2);
  }
}

const m1 = [
  [1, 2, 3],
  [4, 5, 6]
];

const m2 = [
  [1, 2],
  [3, 4],
  [5, 6]
];

const wynik = new MultiplyMatrix(m1, m2);

try {
  console.table(wynik.wynikMnozenia());
} catch (error) {
  console.log(error);
}
