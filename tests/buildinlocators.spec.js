import {test,expect} from "@playwright/test"

test (" handeling builtin locators", async function ({page}){
    // browsr launch

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Alt

    const orangelogo= await page.getByAltText('company-branding')
    await expect(orangelogo).toBeVisible()

    //placeholder

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill("admin x123")

    // role

    await page.getByRole('button',{name: " Login "}).waitFor({state : "visible"})
    await page.getByRole('button',{name: " Login "}).click()
    //text
    
    const username= await page.locator('[class="oxd-userdropdown-name"]').textContent()
    console.log(username)

    //label

    await expect(page.getByLabel('Sidepanel')).toBeVisible()

    //title

    await page.getByTitle('Help').click()

})