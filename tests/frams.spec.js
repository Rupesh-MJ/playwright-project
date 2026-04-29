import {test,expect} from "@playwright/test"

test("handel fram", async function ({page}) {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //count of frames
     const framescount = await page.frames()
     console.log(framescount.lenght)

     // approch 1

     const frame1 = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"})

     frame1.locator('[type="text"]').fill('test')
     await page.waitForTimeout(2000)

     // aproch 2

     await page.frameLocator('[src="frame_2.html"]').locator('[type="text"]').fill('playwright')

     await page.waitForTimeout(2000)
     
    
})

test.only ("handel i fram ", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    await page.waitForTimeout(2000)

    // frame3

    //const frame3 = page.locator('[src="frame_3.html"]')
    //await frame3.contentFrame().framelocator('//iframe[@src,"src="https://docs.google.com/forms"]').contentFrame().locator('[class="nWQGrd zwllIb"]').nth(1).click()

//  aproch 4
    
    const frame4 = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"})

    const childframes = frame4.childFrames()

    await childframes[0].locator('[class="eBFwI"]').nth(1).click()

    

    


} )