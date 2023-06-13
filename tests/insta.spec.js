import { test, expect } from '@playwright/test';

test('User1', async ({ page }) => {
    await page.goto('https://www.instagram.com/');
    await page.getByLabel('Phone number, username, or email').click();
    await page.getByLabel('Phone number, username, or email').fill('jan_96_jul');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('IAmJanani');
    await page.getByRole('button', { name: 'Log in', exact: true }).click();
    await page.getByRole('button', { name: 'Not Now' }).click();
    await page.getByRole('button', { name: 'Not Now' }).click();
    await page.getByRole('link', { name: 'Direct messaging - 0 new notifications link' }).click();
    await page.getByRole('button', { name: 'User avatar Active Jegan Active now' }).click();
    await page.getByRole('paragraph').click();
    await page.getByRole('textbox', { name: 'Message' }).fill('Hai Jegan');
    await page.getByRole('button', { name: 'Send' }).click();
});


test('User2', async ({ page }) => {
    await page.goto('https://www.instagram.com/');
    await page.getByLabel('Phone number, username, or email').click();
    await page.getByLabel('Phone number, username, or email').fill('je_gan_17');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('IAmJegan');
    await page.getByRole('button', { name: 'Log in', exact: true }).click();
    await page.getByRole('button', { name: 'Not Now' }).click();
    await page.getByRole('button', { name: 'Not Now' }).click();
    await page.getByRole('link', { name: 'Direct messaging - 1 new notification link' }).click();
    await page.getByRole('button', { name: 'User avatar Active Janani Hai Jegan 1m' }).click();
    await page.getByRole('link', { name: 'Home' }).click();
});
