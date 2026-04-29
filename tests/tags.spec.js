import {test} from "@playwright/test"

test("test1",{tag:@smoke},async ({})=>{
    console.log('smoke')
})

test("test2 @sanity",async ({})=>{
    console.log('sanity')
})

test("test3 @reg",async ({})=>{
    console.log('reg')
})

test("test4 @smoke@sanity",async ({})=>{
    console.log('sanity with smoke')
})

test("test5 @smoke@reg",async ({})=>{
    console.log('reg with smoke')
})


/**
 * npx playwright test --grep "@smoke"  // where and all smoke available
 * npx playwright test --grep "@smoke" --grep-invert "@sanity"  //smoke and reg
 * npx playwright test --grep "@smoke" --grep-invert "@sanity|@reg" // only smoke
 * npx playwright test --grep "@smoke" --grep-invert "@smoke&@reg" // smoke, sanity,reg
 */

