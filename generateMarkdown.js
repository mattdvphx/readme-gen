function generateMarkdown(data) {
  return `
# ${data.projectTitle}

![Github Picture](${data.profilepic})

email ${data.email}

## table of contents
 * Project title
 * Description
 * Installation
 * Usage
 * License
 * Contributing
 * Tests
 * Questions

## project description 
${data.description}

## installation
${data.installation}

## usage
${data.usage}

## license
${data.license}

## contributors
${data.contributors}

## tests
${data.tests}

## questions
${data.questions}
__Questions__: ask them at StackOverflow with the tag *REPO*.<br>
[![StackOverflow](http://img.shields.io/badge/stackoverflow-REPO-blue.svg)]( http://stackoverflow.com/questions/tagged/REPO )

`;
}

module.exports = generateMarkdown;
