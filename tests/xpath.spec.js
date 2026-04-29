import {test,expect} from "@playwright/test"

test("handel radio button ", async function ({page}){

    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll


    await page.locator('[id="female"]').scrollIntoViewIfNeeded()

    //Assert

    await expect(page.locator('[id="female"]')).toBeVisible()

    //

    await page.locator('[id="female"]').click()

    //assert

    await expect (page.locator('[id="female"]')).toBeChecked()

    await page.waitForTimeout(2000)

    //appoch 2
    await page.locator(

})