const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Name":"Demo automation",
        "Test Environment": "STAGING",
        "Browser": "Chrome",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
};

reporter.generate(options)
