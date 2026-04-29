import {test, expect} from "@playwright/test"

test("handel table", async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('[id="productTable"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //table count

    const tabelcoloum= await page.$$('[id="productTable"] thead tr th')

    console.log(tabelcoloum.length)

    // row count

    const tabelrow= await page.locator('[id="productTable"] tbody tr')

    console.log(tabelrow.count())

    //select product

    const selectProd = await tabelrow.filter({

        has: page.locator('td'),
        hasText : "Tablet",
    })


    await selectProd.locator('input').click()
    await page.waitForTimeout(3000)
    


// multiple data


async function multiprod() {
    const selectProd = await tabelrow.filter({

        has: page.locator('td'),
        hasText : "Tablet",
    })

    await page.waitForTimeout(3000)


    
}


await multiprod("Smartphone")


// 3 print products from page 1

for(let i=0; i< await tabelrow.count(); j++){

    const tds = await tabelrow.nth(i).locator('td')

    for(let j= 0; i< await tds.count(); j++){

        const text = await tds.nth(j).textContent()
        con
    }

}





})