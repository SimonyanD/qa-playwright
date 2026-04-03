const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  // ☝️ Where your test files are

  workers: 1,
  // ☝️ Run one test at a time

  use: {
    screenshot: 'only-on-failure',
    // ☝️ Take screenshot only when test fails
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // ☝️ Run tests in Chrome only
    },
  ],

  reporter: 'html',
  // ☝️ Create a nice HTML report after tests
});