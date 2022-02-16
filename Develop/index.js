// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptProjName = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'project',
        message: 'What is the name of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your project name!')
                return false;
            }
        }
    }]);
};

const projInfoPrompt = () => {
        return inquirer.prompt([{

                type: 'input',
                message: 'Write a short description of your project.',
                name: 'Description',
                validate: desInput => {
                    if (desInput) {
                        return true;
                    } else {
                        console.log('Please write a short description of your project!')
                    }
                }
            },
            {
                type: 'input',
                message: 'What are the steps required to install your project?',
                name: 'Installation Instructions',
                validate: insInput => {
                    if (insInput) {
                        return true;
                    } else {
                        console.log("Please provide your installation method!")
                    }
                }
            },
            {
                type: 'input',
                message: 'How do you use your application?',
                name: 'Usage Information',
                validate: usInput => {
                    if (usInput) {
                        return true;
                    } else {
                        console.log("Please provide instructions for use.")
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmCont',
                message: 'Would you like to provide information on how a user can contribute to your project?',
                default: true
            },
            {
                type: 'input',
                message: 'How can a user contribute?',
                name: 'Contribution Guidelines',
                when: ({ confirmCont }) => confirmCont
            },
            {
                type: 'confirm',
                name: 'confirmTest',
                message: 'Would you like to provide instructions on how to test your application?',
                default: true
            },
            {
                type: 'input',
                message: 'Provide your test instructions.',
                name: 'Test Instructions',
                when: ({ confirmTest }) => confirmTest
            },
            {
                type: 'list',
                message: 'What license did you use?',
                name: 'License',
                choices: ['The MIT License', 'The GPL License', 'The Apache License', 'The GNU License', 'N/A'],
                validate: licInput => {
                    if (licInput) {
                        return true;
                    } else {
                        console.log("Please provide an answer.")
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter GitHub Username: ',
                name: 'git',
                validate: gitInput => {
                    if (gitInput) {
                        return true;
                    } else {
                        console.log("Please provide your GitHub Username")
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter Your Email: ',
                name: 'Email',
                validate: eInput => {
                    if (eInput) {
                        return true;
                    } else {
                        console.log("Please provide an Email address.")
                    }
                }
            }
        ]).then(({
            title,
            description,
            installation,
            usage,
            contribution,
            test,
            license,
            github,
            email
        }) => {
            const template = `# ${title}
            
            * [Description](#description)
            * [Installation](#installation)
            * [Usage](#usage)
            * [Contribution](#contribution)
            * [Test](#test)
            # Description
            ${description}
            ## Installation
            ${installation}
            ## Usage
            ${usage}
            ## Contribution
            ${contribution}
            ### Test
            ${test}
            ## License
            ${license}
            
            # Contact
            * Github :${github}
            * E-mail :${email}`;

            writeToFile(title, template)
        })

    }
    // TODO: Create a function to write README file
function writeToFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, (err) => {
            if (err) {
                reject
                console.log(err)
                return;
            }
            resolve({
                ok: true,
                message: 'Your README has been generated!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    promptProjName()
        .then(title => {
            return writeToFile(title)
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();