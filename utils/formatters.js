export function toCamelCase(string) {
  const lowerCased = string.toLowerCase();

  const capitalizeRemainder = (string, character) =>
    string + (character.charAt(0).toUpperCase() + character.slice(1));

  return lowerCased.split(' ').reduce(capitalizeRemainder).replace(/\W/g, '');
}
