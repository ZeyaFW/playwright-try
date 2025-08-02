import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();

  // Click Writing test link.
  await page.getByRole("link", { name: "Writing tests", exact: true }).click();

  // Expect page to have a heading with the name of Writing tests.
  await expect(page.getByRole("heading", { name: "Writing tests" })).toBeVisible();

  // click search bar
  await page.getByRole("button", { name: "Search" }).click();
  await page.locator('input[type="search"]').fill("Test Runner");
  await page.getByRole("button", { name: "Clear the query" }).click();

  // await page.keyboard.press("Enter");
  // await expect(page.getByRole("heading", { name: "Test Runner" })).toBeVisible();
});
