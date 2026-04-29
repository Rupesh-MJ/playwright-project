import {test, expect}  from "@playwright/test"

test("handel file upload", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // scroll

    await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    // single file

    await page.locator('[id="singleFileInput"]').setInputFiles("C:/Users/Rupesh/Desktop/1.pdf")
    await page.waitForTimeout(3000)

    // multiple file

    await page.locator('[id="multipleFilesInput"]').setInputFiles(['C:/Users/Rupesh/Desktop/1.pdf','C:/Users/Rupesh/Desktop/QQQ.docx'])
    await page.waitForTimeout(3000)


})