export class Validate {
    static email = (text) => {
        // string => obj
        const hasEmailPrefix = this.#hasEmailPrefix(text)
        const hasAtSymbol = this.#hasAtSymbol(text)
        const hasDomain = this.#hasDomain(text)

        const error = (!hasEmailPrefix || !hasAtSymbol || !hasDomain)
        const color = error ? "warning" : "success"
        const helperText = this.#composeHelperText(hasEmailPrefix, hasAtSymbol, hasDomain, error)

        return {
            error,
            helperText,
            color
        }
    }

    static #hasEmailPrefix = (text) => {
        // string => bool
        const hasEmailPrefix = text.match(new RegExp(String.raw`(?<emailPrefix>^[^@]+)`)) ? true : false
        return hasEmailPrefix
    }

    static #hasAtSymbol = (text) => {
        //  string => bool
        const hasAtSymbol = text.match(new RegExp(String.raw`(?<atSymbol>@)`)) ? true : false
        return hasAtSymbol
    }

    static #hasDomain = (text) => {
        // string => bool
        const hasDomain = text.match(new RegExp(String.raw`(?<domain>[^@]+$)`)) ? true : false
        return hasDomain
    }

    static #composeHelperText = (email, at, domain, error) => {
        // email: bool, at: bool, domain:bool, error:bool => string
        switch (error) {
            case true:
                const emailHelper = !email && 'email prefix'
                const atHelper = !at && '@ symbol'
                const domainHelper = !domain && 'email domain'
                const helperText = [emailHelper, atHelper, domainHelper]
                    .filter(el=>el !== false)
                    .join(', ')
                return `Missing : ${helperText}`
            case false:
                return `Valid email`
        }
    }
}