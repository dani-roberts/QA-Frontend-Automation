const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fea01',
  e2e: {
    baseUrl:"https://www.smartclient.com/smartgwt/showcase"
  }
});
