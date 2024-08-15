/** Custom error class to indicate a failure while parsing the tsconfig.json file. */
export class TsConfigParseError extends Error {
  /**
   *
   * @param {object} params - An object containing the parameters.
   * @param {string | undefined} params.filepath - The full path, including the filename, to the `tsconfig.json` file (optional)
   * @param {unknown} cause - The original error or additional information about the parsing failure.
   */
  constructor ({ filepath }, cause) {
    super(`Failed to parse the tsconfig.json file${filepath != null ? ` at "${filepath}"` : ''}.`)
    this.cause = cause
    this.name = 'TsConfigParseError'
  }
}
