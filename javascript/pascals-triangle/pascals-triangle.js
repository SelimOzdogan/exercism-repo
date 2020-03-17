//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      arr[i] = [1];
    }
    else if (i === 1) {
      arr[i] = [1, 1];
    }
    else {
      let arrin = [];
      for (let j = 0; j <= i; j++) {
        arrin[j] = parseInt(j === 0 ? 0 : arr[i - 1][j - 1]) + parseInt(j === i ? 0 : arr[i - 1][j]);
      }
      arr[i] = arrin;
    }
  }
  return arr;
};
