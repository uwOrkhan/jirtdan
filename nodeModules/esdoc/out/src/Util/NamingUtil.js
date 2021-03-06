'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const filePathMap = {};

/**
 * Identifier Naming Util class.
 */
class NamingUtil {
  /**
   * naming with file path.
   * @param {string} filePath - target file path.
   * @returns {string} name
   */
  static filePathToName(filePath) {
    let basename = _path2.default.basename(filePath).split('.')[0];
    basename = basename.replace(/[^a-zA-Z0-9_$]/g, '');

    filePathMap[filePath] = filePathMap[filePath] || 0;
    const count = filePathMap[filePath];
    if (count > 0) basename += count;
    filePathMap[filePath]++;

    return basename;
  }
}
exports.default = NamingUtil;