// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {github,email,title,...extra} = data;
  return `
# ${title}

## Description
${extra.description}
## Table of Contents

* [Installation](#installation) 
* [Usage](#usage) 
* [Credits](#credits) 
* [License](#license)

## Installation
${extra.installation}
## Usage
${extra.usage}
## License 
${extra.license}
## Contributing
${extra.contributing}
## Tests
${extra.tests}
## Questions
If you have any remaining questions, feel free to contact me below:

* [GitHub Profile](https://github.com/${github})

* [Email Address: ](${email})

`;
}

module.exports = generateMarkdown;
