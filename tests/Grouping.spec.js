import {test} from "@playwright/test"

test.describe("grouping 1", async ()=>{

    test ("login valid ", async ()=>{
        console.log("valid")
    })

    test ("login invalid ", async ()=>{
        console.log("invalid")
    })

    test ("login empty ", async ()=>{
        console.log("empty")
    })

    test ("login valid & Invalid ", async ()=>{
        console.log("valid & Invalid")
    })


})

test.describe("grouping 2 ", async ()=>{

     test ("form age (min) ", async ()=>{
        console.log("min")
    })

    test ("form age (just below) ", async ()=>{
        console.log("just below")
    })

    test ("form age (max) ", async ()=>{
        console.log("max")
    })

    test ("form age (just above) ", async ()=>{
        console.log("just above")
    })
})