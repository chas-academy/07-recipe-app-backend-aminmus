
/**
 * Generates a query string of URL query parameters
 * for when you have several values for the same kind of parameter.
 *
 */
function createParamString(paramValues: Array<string>, paramName: string): string {
  return paramValues.reduce((prev, cur, index, array) => {
    if ((index + 1) === array.length) {
      return `${prev}${cur}`;
    }
    return `${prev}${cur}&${paramName}=`;
  }, `${paramName}=`);
}
export default createParamString;
