export function formatToCamelCase(string) {
  const parsedString = String(string);

  const capitalizeRemainder = (string, character) =>
    string + (character.charAt(0).toUpperCase() + character.slice(1));

  return parsedString
    .toLowerCase()
    .split(' ')
    .reduce(capitalizeRemainder)
    .replace(/[^0-9A-Za-z]/g, '');
}

export function formatToKebabCase(string) {
  const lowerCased = string.toLowerCase();

  const spacesAndUnderscores = /[\s_]+/g;
  const nonAlphanumeric = /[^0-9a-zA-Z-]/g;

  return lowerCased
    .replace(spacesAndUnderscores, '-')
    .replace(nonAlphanumeric, '');
}
