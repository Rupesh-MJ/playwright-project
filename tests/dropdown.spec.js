import {test,expect} from "@playwright/test";
import { timeLog } from "node:console";
import { TIMEOUT } from "node:dns";
import { urlToHttpOptions } from "node:url";

test("handing ", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('[id="country"]').scrollIntoViewIfNeeded()

    await page.locator('[id="country"]').waitFor({state: 'visible'})

    //select drop down

    await page.locator('[id="country"]').selectOption("India")

    await page.waitForEvent(2000)

    // label

    await page.locator('[id="country"]').selectOption({label : "china"})

    await page.waitForEvent(2000)

    // value

    await page.locator('[id="country"]').selectOption({value : "brazil"})

    await page.waitForEvent(2000)

    //index

    await page.locator('[id="country"]').selectOption({index : 3})

    await page.waitForEvent(2000)


    //assert urlToHttpOptions

    await expect(page.locator('[id="country"]>option')).toHaveCount(10)
    


}

test("handel multi lov", async ({page})=>{
 
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('[id="colors"]').scrollIntoViewIfNeeded(TIMEOUT:2000)

    await expect(page.locator('[id="colors"]')).toBeVisible()

    




} 