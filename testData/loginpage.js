import { expect } from "@playwright/test";
const {sauceData} = require("./testdat.js")


//mport {testdat,js} from "C:\Users\Rupesh\Desktop\playwright\.github\testdat.js\


export class Loginpage{

    constructor(page){
        this.page=page
        this.username='[id="user-name"]'
        this.password='[id="password"]'
        this.loginbtw='[id="login-button"]'
    }

    // methods 

    async Navigate(){

        await this.page.goto('https://www.saucedemo.com/')
    }

    async logincredentials(){

        await this.page.locator(this.username).fill(sauceData.username)

        await this.page.locator(this.password).fill(sauceData.password)
        await expect(this.page.locator(this.loginbtw)).toBeVisible()
        await this.page.locator(this.loginbtw).click()
        
    }
}