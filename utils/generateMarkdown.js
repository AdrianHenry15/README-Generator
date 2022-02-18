// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (!data.License) {
        return '';
    }
    return `[${data.License}]`
}
// renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if (!data.License) {
        return '';
    }
    return `[${data.License}]`
}
// renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    if (!data.License) {
        return '';
    }
    return `# License
        This project is licensed under the ${data.License} license.`

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
https://github.com/${data.GitHub}/${data.Title}
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
${renderLicenseSection(data)}
${renderLicenseLink(data)}
${renderLicenseBadge(data)}
# Contributors: ${data.Contribution}
# Tests
The following is needed to run the test: ${data.Tests}
# Questions
If you have any questions about the repo, open an issue or contact me on GitHub at ${data.GitHub} or contact my email address at ${data.Email}`;
}

module.exports = generateMarkdown;