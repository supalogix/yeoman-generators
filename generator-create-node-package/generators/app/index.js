'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the divine ' + chalk.red('node package') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'directory',
        message: 'What is the directory name?',
        default: ''
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the package name?',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.createPackage();
  }

  createPackage() {
    const root = `${this.props.directory}`

    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath(`${root}/index.js`),
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(`${root}/package.json`),
      {
        name: this.props.directory
      }
    );
  }
};
