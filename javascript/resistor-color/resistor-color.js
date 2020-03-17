//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  for (let i = 0; i < COLORS.length; i++) {
    if (COLORS[i] === color)
      return i;
  }
  return null;
};

export let COLORS = undefined;
