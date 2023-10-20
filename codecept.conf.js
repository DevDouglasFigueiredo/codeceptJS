const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: process.env.BROWSER || 'chromium',
      url: 'https://automationpratice.com.br/login',
      show: false,
      waitForTimeout: 5000
    }
  },
  include: {
    I: './steps_file.js',
    login_PageObject: "./pages/login_PageObject.js",
  },
  name: 'codeceptjs'
}