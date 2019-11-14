const {expect} = require ("chai")

const env = require("../src/env")

describe ("env" , () => {

    describe("env.get()" , () => {
        it("gets an environment variable" , ()=>{
    
            process.env.PROVA = "ciao"
            expect(env.get("PROVA")).to.eq("ciao")
        })
    
        it("throws error if no argument is provided" , () => {
            expect(env.get).throw("no environment variable name supplied")
    
        })

        it("throws error if argument is not a string" , () => {
            expect(() => {env.get(false)}).throw("bad environment variable name supplied")

        })

        it("throws error if argument if variable is not defined" , () => {
            expect(() => {env.get("NOT_FOUND")}).throw("no <NOT_FOUND> environment variable found")
        })

        it("doesnt throw error if a default value is provided" , () => {
            expect(env.get("NOT_FOUND" , "found")).to.eq("found")
        })
    })

    describe("env.existsOrFail()" , () => {

        it("fails if doesnt exist" , () => {
            expect(() => {env.existsOrFail("NOT_FOUND")}).throw("no <NOT_FOUND> environment variable found")
        })

        it("doesnt fail if exist" , () => {

            process.env.FOUND = "found"
            expect(() => {env.existsOrFail("FOUND")}).not.throw("no <FOUND> environment variable found")
        })

        it("return true if exist" , () => {

            process.env.FOUND = "found"
            expect(env.existsOrFail("FOUND")).be.true
        })
    })
})
