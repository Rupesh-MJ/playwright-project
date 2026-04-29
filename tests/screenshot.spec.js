import {test,expect} from "@playwright/test"


test("take screenshoot", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)

    await page.screenshot({path:"images/"+"basicpage.png"})
})

test("locator s", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)

    await page.locator([class="submit-btn"])
    .screenshot({path:"images/"+Date.now()+"locaterimage.jpg"})
})


test("full page", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)

    await page.screenshot({path:"images/"+"Fullpage.jpeg",fullPage:true})
})



