#!/usr/bin/env node

const userHome = require('os').homedir();
const path = require('path');

const npmrc = path.join(userHome, '.npmrc');
const npmsc = path.join(userHome, '.npmsc');
// const configFile = path.join(npmsc, 'config.json');

module.exports = {
  npmrc,
  npmsc
  // configFile
};
