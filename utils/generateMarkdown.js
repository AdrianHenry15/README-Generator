// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    } else if (license === 'MIT') {
        `[License: MIT](https://img.shields.io/badge/license-MIT-green.svg)`
    } else if (license === 'GNU') {
        `[License: GNU](https://img.shields.io/badge/license-GNU-red.svg)`
    } else if (license === 'Apache 2.0') {
        `[License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)`
    } else if (license === 'BSD') {
        `[License: BSD](https://img.shields.io/badge/license-BSD-orange.svg)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    } else if (license === 'MIT') {
        `[License: MIT](https://choosealicense.com/)`
    } else if (license === 'GNU') {
        `[License: GNU](https://choosealicense.com/)`
    } else if (license === 'Apache 2.0') {
        `[License Apache 2.0](https://choosealicense.com/)`
    } else if (license === 'BSD') {
        `[License: BSD](https://choosealicense.com/)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
    # Description
    ${data.Description}
    # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    # Installation
    The following necessary dependencies must be installed to run the applications: ${data.Installation}
    # Usage
    In order to use this app, ${data.Usage}
    # License
    This project is licensed under the ${data.License} license.
    ![GitHub license](https://img.sheilds.io/badge/license-MIT-blue.svg)
    # Contributors: ${data.Contributing}
    # Tests
    The following is needed to run the test: ${data.Tests}
    # Questions
    If you have any questions about the repo, open an issue or contact me on GitHub at ${data.GitHub} or contact my email address at ${data.Email}

`;
}

module.exports = { generateMarkdown };