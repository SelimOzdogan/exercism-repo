//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (decoded = '') => {
  let encoded = '';
  let number;
  let char;
  if (decoded == encoded)
    return encoded;
  for (let value of decoded.split('')) {
    if (char == undefined) {
      number = 1;
      char = value;
    }
    else if (value != char) {
      encoded += (number == 1 ? '' : number) + char;
      number = 1;
      char = value;
    }
    else {
      number += 1;
    }
  }
  encoded += (number == 1 ? '' : number) + char;
  return encoded;
};

export const decode = (encoded = '') => {
  let decoded = '';
  let number = 0;
  for (let value of encoded.split('')) {
    if (value.match(/[a-z]/i) != null || value == ' ') {
      if (number == '' || number == undefined)
        number = parseInt(1);
      else {
        number = parseInt(number);
      }
      decoded += value.repeat(number);
      number = 0;
    }
    else {
      number += value;
    }
  }
  return decoded;
};
