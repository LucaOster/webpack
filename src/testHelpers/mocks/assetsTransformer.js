// eslint-disable-next-line @typescript-eslint/no-var-requires
const { basename } = require('path')

module.exports = {
  process(sourceText, { file: sourcePath }) {
    return {
      code: `module.exports = '${basename(sourcePath)}';`
    }
  }
}
