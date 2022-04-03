// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  return `# ${input.title}
  ##Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#useage)
  [License](#license)
  [Contributions](#contributions)
  [Tests](#tests)
  [Questions](#questions)

  ## Description
  ${input.description}
  ## Installation
  ${input.installation}
  ## Usage
  ${input.usage}
  ## License
  ${input.license}
  ## Contributions
  ${input.contributions}
  ## Tests 
  ${input.tests}
  ## Questions 
  Please reach out to me at ${input.email} if you have any questions.
  
  Follow my Github account at ${input.github}.
   `;
}

module.exports = generateMarkdown;