// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {github,email,title,...extra} = data;
  return `
# ${title}

${renderLicenseBadge(extra.license)}

## Description

${extra.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(extra.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${extra.installation}

## Usage

${extra.usage}

${renderLicenseSection(extra.license)}

## Contributing

${extra.contributing}

## Tests

${extra.tests}

## Questions

If you have any remaining questions, feel free to contact me below:

* [GitHub Profile](https://github.com/${github})

* Email Address: ${email}
`;
}

module.exports = generateMarkdown;
