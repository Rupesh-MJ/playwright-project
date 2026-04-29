import{test,expect} from "@playwright/test"

test("hange right click", async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    await page.waitForTimeout(3000)

    // 
    await page.locator('span:has-text("right click me")').click({button:'right'})

    //dialog

    await page.on ("dialog",async a=>{
        expect(a.message()).toContain("clicked")
        await page.waitForTimeout(3000)
        await a.accept()


    })

    // click

    await page.click('//span[text()="Quit"]')
    await page.waitForTimeout(3000)
    

})

test("hanling drag and drop", async({page})=>{

    //open browse

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)

    //scroll

    await page.mouse.wheel(0,1500)
    await page.waitForTimeout(3000)

    //source

    const source=page.locator('[id="draggable"]')

    // targent
    const target = page.locator('[id="droppable"]')

    // approch 1

    await page.dragAndDrop('[id="draggable"]','[id="droppable"]')

    // approch 2

    await source.dragTo(target)

    //approch 3

    await source.hover()
    await page.mouse.down()
    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(3000) 


})

test ("handeling keyboard actions ", async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    await page.mouse.wheel(0,300)

    //fill

    
    await page.waitForTimeout(3000)
})