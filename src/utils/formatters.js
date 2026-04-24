export function formatToCamelCase(string) {
  const lowerCased = string.toLowerCase();

  const capitalizeRemainder = (string, character) =>
    string + (character.charAt(0).toUpperCase() + character.slice(1));

  return lowerCased.split(' ').reduce(capitalizeRemainder).replace(/\W/g, '');
}

export function formatToKebabCase(string) {
  const lowerCased = string.toLowerCase();

  const spacesAndUnderscores = /[\s_]+/g;
  const nonAlphanumeric = /[^0-9a-zA-Z-]/g;

  return lowerCased
    .replace(spacesAndUnderscores, '-')
    .replace(nonAlphanumeric, '');
}
