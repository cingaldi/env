module.exports = {

    get(envName , defaultValue) {

        if (envName == undefined) {
            throw new Error ("no environment variable name supplied")
        }

        if ( typeof envName !==  "string" || envName instanceof String) {
            throw new Error ("bad environment variable name supplied")

        }

        let ret = process.env[envName] || defaultValue

        if (ret == undefined) {
            throw new Error (`no <${envName}> environment variable found`)
        }
        return  ret
    },

    existsOrFail(envName) {

        if (process.env[envName] == undefined)
        {
            throw new Error (`no <${envName}> environment variable found`)
        }

        return true
    }
}