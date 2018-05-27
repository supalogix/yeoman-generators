'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the divine ' + chalk.red('create react app') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your package?',
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
    const root = this.props.name

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(`${root}/package.json`),
      {
        name: this.props.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath(`${root}/.babelrc`)
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`${root}/index.js`)
    );

    this.fs.copyTpl(
      this.templatePath('dist/index.html'),
      this.destinationPath(`${root}/dist/index.html`)
    );

    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath(`${root}/webpack.config.js`)
    );
  }
};
