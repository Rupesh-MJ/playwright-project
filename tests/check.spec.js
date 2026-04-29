import {test,expect} from "@playwright/test"

test("new hsndeling dioge", async ({page}) =>{


    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()

    await page.waitForTimeout(2000)

    // handeling alert

    page.on('dialog', async (a) =>{

        expect (a.type()).toEqual("alert")
        expect(a.message()).toContain('I am an alert box!')
        await page.waitForTimeout(2000)
        await a.accept()

    })

    await page.waitForTimeout(2000)

    await page.locator('[id="alertBtn"]').click()


})

test("handeing confiramation alert", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    // handel  confiramtion alert

    page.on('dialog', async (a)=>{

        expect (a.type()).toEqual('confirm')
        expect (a.message()).toContain("Press a button!")


        await a.accept()

    })

    await page.waitForTimeout(3000)

    page.locator('[id="confirmBtn"]').click()
    await page.waitForTimeout(3000)

})


// handeling prompt alert

test("new hsndeling dioge", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    awaitpage.locator('[id="promptBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    // handel dialog

    page.on('dialog', async(a) =>{

        expect (a.message()).toContain('Please enter your name:')

        await page.waitForTimeout(2000)

        await  a.accept()
        

    })


})
