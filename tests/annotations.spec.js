import {test} from "@playwright/test"

test("test1", async ()=>{

    console.log("only")
})

test.skip("test2", async ()=>{

    console.log("Skip")
})
test("test3", async ()=>{

    console.log("Fail")
})

test("test4", async ()=>{

    console.log("Fix Me")
})

test("test5", async ()=>{

    console.log("slow")
})

test("test6", async ()=>{
    
    test.setTimeout(12*1000)
    console.log("set time out")
})


test("condition skip", async ({browserName})=>{

    if(browserName=='chromium'){
        test.skip()
    }

    console.log("skip condition")
})