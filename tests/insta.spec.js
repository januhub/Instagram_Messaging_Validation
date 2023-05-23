import { test, expect } from '@playwright/test';

test('Account 1: Janani', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByLabel('Phone number, username, or email').click();
  await page.getByLabel('Phone number, username, or email').fill('jan_96_jul');
  await page.getByLabel('Phone number, username, or email').press('Tab');
  await page.getByLabel('Password').fill('IAmJanani');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('link', { name: 'Direct messaging - 0 new notifications link' }).click();
  await page.getByRole('button', { name: 'Send message' }).click();
  await page.getByPlaceholder('Search...').fill('Jegan');
  await page.getByRole('button', { name: 'je_gan_17 je_gan_17 Jegan Toggle selection' }).click();
  await page.getByRole('button', { name: 'Chat' }).click();
  await page.getByRole('paragraph').click();
  await page.getByRole('textbox', { name: 'Message' }).fill('Hai Jegan');
  await page.getByRole('textbox', { name: 'Message' }).press('Enter');
  await page.getByRole('link', { name: 'Home' }).click();
});

test('Account 2: Jegan', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByLabel('Phone number, username, or email').click();
  await page.getByLabel('Phone number, username, or email').fill('je_gan_17');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('IAmJegan');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('link', { name: 'Direct messaging - 1 new notification link' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});