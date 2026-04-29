import{test,chromium,firefox,webkit} from '@playwright/test'

test("handeling",async({})=>{

    const brower = await chromium.launch({slowMo:1500,channel:"chrome",headless:false})//brower
    const context = await brower.newContext({permissions:['geolocation','camera']})//window
    const page1= await context.newPage()  //tab



    //launch
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //click on link

    const [newpage]= await Promise.all([
        context.waitForEvent('page'),
        page1.click('text=OrangeHRM, Inc')
        
          //page1.locator('[text=OrangeHRM, Inc]').click()
    ])

    await newpage.locator('[id="Form_submitForm_EmailHomePage"]').fill('Admin')
    await newpage.click('[onclick="buttonClick()"]')

    await newpage.reload()
    await newpage.goBack()

    await page1.bringToFront()

    await page1.getByPlaceholder('Username').fill('Admin')
    await page1.getByPlaceholder('Password').fill('admin123')
    await page1.getByRole('button',{name:" Login "}).click()





})