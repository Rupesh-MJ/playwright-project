import {test,expect} from "@playwright/test"

test("validate title&url",async function({page}){

    //browser launch
    await page.goto("https://www.demoblaze.com/");

    //title & url

    const pagetitle= await page.title();

    console.log(pagetitle)

    console.log(await page.url());

    const pageurl= page.url()

    console.log(pageurl)




    //assertion


    await expect(page).toHaveURL(pageurl)
    await expect(page)
    .toHaveTitle (pagetitle)

    // login 

    await page.locator("id=login2").click()

    //username

    await page.locator('[id="loginusername"]').fill("rupesh")

    // password

    await page.locator('id=loginpassword').fill("test")

    await page.locator('[onclick="logIn()"]').click()

    //hard wait

    //await page.waitForTimeout(5000)

    //validate dashboard

    await page.locator('["id=nameofuser"]').waitFor({state:"visible"})

    const username = await page.locator('[id="nameofuser]').textContent()
    await expect(username).toContain("Ravi")

    //multiple user
   
})