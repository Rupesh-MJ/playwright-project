import {test,expect} from "@playwright/test

test('datepicking', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    // click on date picker

    await page.locator('[id="datepicker"]').click()
    await page.waitForTimeout(2000)

    //chose a date

    //let seleted date = "15"
    //let seleted moth= "august"
    // let seleted year="2026"

    let {date,month,year}= seletDate(3)

    while (true){

        const currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        const currentYear = await page.locator('..ui-datepicker-year').innerText()
    }

    if (currentMonth == month && currentYear == year.string()){

        break
    }

    await page.locator('//span[text()="Next"]')

    await page.waitForTimeout(3000)

    await page.click('//a[@class="ui-state-default ui-state-highlight" and text()= "${date}"]')



})