//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (num) => {
  let romanaNum = '';
  if (num > 1000) {
    romanaNum += 'M'.repeat(num / 1000);
    num = num % 1000;
  }
  if (num > 800) {
    romanaNum += 'C'.repeat(10 - Math.floor(num / 100)) + 'M';
    num = num % 100;
  }
  else if (num > 500) {
    romanaNum += 'D'.repeat(num / 500);
    num = num % 500;
  }
  if (num > 300) {
    romanaNum += 'C'.repeat(5 - Math.floor(num / 100)) + 'D';
    num = num % 100;
  }
  else if (num > 100) {
    romanaNum += 'C'.repeat(num / 100);
    num = num % 100;
  }
  if (num > 80) {
    romanaNum += 'X'.repeat(10 - Math.floor(num / 10)) + 'C';
    num = num % 10;
  }
  else if (num > 50) {
    romanaNum += 'L'.repeat(num / 50);
    num = num % 50;
  }
  if (num > 30) {
    romanaNum += 'X'.repeat(5 - Math.floor(num / 10)) + 'L';
    num = num % 10;
  }
  else if (num > 10) {
    romanaNum += 'X'.repeat(num / 10);
    num = num % 10;
  }
  if (num > 8) {
    romanaNum += 'I'.repeat(10 - num) + 'X';
    num = num % 1;
  }
  else if (num > 5) {
    romanaNum += 'V'.repeat(num / 5);
    num = num % 5;
  }
  if (num > 3) {
    romanaNum += 'I'.repeat(5 - (num / 1)) + 'V';
    num = num % 1;
  }
  else romanaNum += 'I'.repeat(num);
  return romanaNum
};
