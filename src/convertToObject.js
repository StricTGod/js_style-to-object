'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .reduce((acc, curr) => {
      const [key, value] = curr.split(':').map((str) => str.trim());

      if (key && value !== undefined) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
