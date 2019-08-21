#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

program.version('0.0.1');
// const error = chalk.bold.red;
// const warning = chalk.orange;
const info = chalk.green;

program
  .command('switch [name]', info('switch NPM configuration to the configuration with the given name'))
  .command('new [name] [options]', info('create a new confuguration with the sepcified name'))
  .command('set [name] [options]', info('patch the confuguration with the sepcified name'))
  .command('get [name]', info('show the confuguration with the sepcified name'))
  .command('delete [name]', info('delete the confuguration with the sepcified name'))
  .command('current', info('show the current NPM configuration name'))
  .command('all', info('show all NPM configuration names available'))
  .parse(process.argv);
