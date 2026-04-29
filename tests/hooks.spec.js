import{test,expect} from "@playwright/test"

test("handeling demoblazer", async ({page})=>{
    // open url
    await page.goto("https://www.demoblaze.com/index.html")
    await page.waitForTimeout(2000)

    // enter crd

    await page.locator('[id="login2"]').click()
    await page.waitForTimeout(2000)
    await page.locator('[id="loginusername"]').waitFor()
    await page.locator('[id="loginusername"]').fill('Raviteja18')
    await page.locator('[id="loginpassword"]').fill('Trend@123')
    await page.locator('[onclick="logIn()"]').click()
    await page.waitForTimeout(3000)

    // check for product list
    await page.waitForTimeout(3000)
    await page.waitForSelector('[class="hrefch"]')

    const product = await page.$$('[class="hrefch"]')
    
    for( const element of product){
        const tvalue= await element.textContent()
        console.log(tvalue)
    }

    await page.locator('//a [text()="Samsung galaxy s7"]').click()
    await page.waitForURL('https://www.demoblaze.com/prod.html?idp_=4')

    //handel pop up

    page.on('dialog', async a =>{
        await expect (a.message()).toContain('Product added')
        await a.accept()
    })

    await page.locator('text=Add to cart')

    await page.locator('[id="cartur"]').click()

    await page.locator('//button [text()="Place Order"]').click()

    // enter req filed

    await page.fill('[id="name"]',"ravi")
    await page.fill('[id="country"]',"usa")
    await page.fill('[onclick="purchaseOrder()"]',"chennai")
    await page.fill('[id="card"]',"1234")
    await page.fill('[id="month"]',"09")
    await page.fill('[id="year"]',"2026")

    await page.locator('//button[text()="Purchase"]').click()

})
