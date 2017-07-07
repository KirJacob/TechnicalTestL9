exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeOut: 60000,
  allScriptsTimeout: 50000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
   capabilities: {
    'browserName': 'chrome'
  },
  specs: [
    'features/*.feature'
  ],
  baseURL: 'http://computer-database.herokuapp.com/computers',
  cucumberOpts: {
    require: './features/step_definitions/my_step_definitions.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  } 
};