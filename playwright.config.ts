import { defineConfig } from "playwright/test";

export default defineConfig({
    testDir: './tests',
    use: {
        headless: true,
        baseURL: 'https://www.navigator.ba',
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    }
})