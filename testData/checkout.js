//NPM i dotenv

import{test,expect} from "@playwright/test"

const data =[
    {
        user : process.env.USER_NAME,
        pass : process.env.PASSSWORD
    },
    {
        user : process.env.INVALID_USER,
        pass : process.env.INVALID_USER,
    },
    {
        user : process.env.EMPTY_USER,
        pass : processenv.env.EMPTY_PAS
    }
]

data.forEach((dt,index)=>{

    test(`read data from env file ${++index}`, async({page})=>{

        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill(dt.user)
        await page.getByPlaceholder('Password').fill(dt.pass)
        await page.click('[id="login-button"]')
    })
})
