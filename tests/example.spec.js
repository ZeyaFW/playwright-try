// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://duckduckgo.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DuckDuckGo/);

  // //Type on the google search bar
  // const searchBox = page.getByRole("combobox", { name: /Cari|Search/i });
  // await searchBox.waitFor({ state: "visible", timeout: 10000 });
  // await page.getByRole("button", { name: "Tetap logout" }).click();
  // await searchBox.fill("Arema FC");
  // await page.waitForTimeout(500);
  // await searchBox.press("Enter");
  // await locator.check('iframe[name="a-h9z35se4mx8s"]').contentFrame().getByRole("checkbox", { name: "I'm not a robot" });

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Arema FC/);
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
// });
