/**
 * Converts a JSON Object into an array of first-child keys,
 * with an additional key of "id" as the key name.
 * @param {JSON} json
 * @returns {JSON[]} an array of json objects
 */
export function jsonToArray(json) {
  const arr = [];
  for (const key in json) {
    arr.push({
      id: key,
      ...json[key],
    });
  }
  return arr;
}
