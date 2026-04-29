import {test,expect} from "@playwright/test"

test ("handel funct", async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)

    // scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    // mouse over
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(3000)

    // select from mouse over

    await page.locator('a:has-text("Laptops")').click()
    await page.waitForTimeout(3000)


})


test("handel double click", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)

    // scroll

    await page.locator('[id="field1"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //clear
    await page.locator('[id="field1"]').clear()
    await page.waitForTimeout(3000)

    // fill
    await page.locator('[id="field1"]').fill("name")
    await page.waitForTimeout(3000)

    // double click()

    await page.locator('text=Copy Text').dblclick()
    await page.waitForTimeout(3000)


})