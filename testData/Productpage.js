import { expect } from "@playwright/test";

import {Loginpage} from "./loginpage.js";
import {testdat} from"../testdat.js";
export class productpage {

    constructor(page){
        this.page=page
        this.prod='[class="inventory_item_name "]'
        this.dropdown='[class="product_sort_container"]'
        this.swaglogo='[class="app_logo"]'
        this.product='[id="item_2_title_link"]'
    }

    async printproducts(){

        await expect(this.page.locator(this.swaglogo)).toBeVisible()
        const prodlist= await this.page.$$(this.prod)

        for (const element of prodlist){
            const text = await element.textContent()
            console.log(text)
        }
    }

    async selectdropdown(){

        await this.page.locator(this.dropdown).selectOption('Price (low to high)')
    }

    async  selctproduct(){
        await expect(this.page.locator(this.product)).toBeVisible()
        await this.page.locator(this.product).click()
    }



}
