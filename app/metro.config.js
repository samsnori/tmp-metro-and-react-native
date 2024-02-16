/* ------------------------------------------------------- */

const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/* ------------------------------------------------------- */

let my_package_path = path.resolve(__dirname +'/../my-package');

const config = {
  resolver: {
    nodeModulesPaths: [
      my_package_path,
    ]
  },
  watchFolders: [
    my_package_path,
  ],
};

/* ------------------------------------------------------- */

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

/* ------------------------------------------------------- */
