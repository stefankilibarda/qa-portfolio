const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false
  }
};
