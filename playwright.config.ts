import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Folder containing your test files.
  testDir: './tests',

  // Maximum duration of each test.
  timeout: 60_000,

  // Maximum wait for assertions such as toBeVisible().
  expect: {
    timeout: 10_000,
  },

  // Run one test at a time.
  workers: 1,

  // No automatic retries for this learning example.
  retries: 0,

  // Show terminal results and generate an HTML report.
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    // Run without opening a visible browser window.
    headless: true,

    // Save debugging information when a test fails.
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});