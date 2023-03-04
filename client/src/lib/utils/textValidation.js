export class Validate {
  static email = (text) => {
    // string => object
    const hasEmailPrefix = this.#hasEmailPrefix(text)
    const hasAtSymbol = this.#hasAtSymbol(text)
    const hasDomain = this.#hasDomain(text)

    const error = (!hasEmailPrefix || !hasAtSymbol || !hasDomain)
    const color = error ? 'error' : 'success'
    const helperText = this.#composeEmailHelperText(error, hasEmailPrefix, hasAtSymbol, hasDomain)

    return {
      error,
      helperText,
      color
    }
  }

  static password = (text) => {
    // string => object
    const hasTheRightLength = this.#hasTheRightLength(text)
    const hasUppercase = this.#hasUppercase(text)
    const hasLowercase = this.#hasLowerCase(text)
    const hasNumber = this.#hasNumber(text)
    const hasSymbol = this.#hasSymbol(text)
    const hasProhibitedCharacters = this.#hasProhibitedCharacters(text)

    const error = (!hasTheRightLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSymbol || hasProhibitedCharacters)
    const helperText = this.#composePasswordHelperText(error, hasTheRightLength, hasUppercase, hasLowercase, hasNumber, hasSymbol, hasProhibitedCharacters)
    const color = error ? 'error' : 'success'
    return {
      error,
      helperText,
      color
    }
  }

  static passwordConfirmation = (password, retypedPassword) => {
    // string => obj
    if (password.error) return {
      error:true,
      helperText:'Check : invalid password',
      color:'error'
    }
    const error = password.value !== retypedPassword
    const helperText = error ? 'Check : password missmatch': 'Valid'
    const color = error ? 'error' : 'success'
    return {
      error,
      helperText,
      color
    }
  }

  static #hasTheRightLength = (text) => {
    // string => bool
    const hasTheRightLength = text.length >= 8 && text.length <= 30
    return hasTheRightLength
  }

  static #hasUppercase = (text) => {
    // string => bool
    const hasUppercase = text.match(new RegExp(String.raw`(?<uppercase>[A-Z])`)) ? true : false
    return hasUppercase
  }

  static #hasLowerCase = (text) => {
    // string => bool
    const hasLowercase = text.match(new RegExp(String.raw`(?<lowercase>[a-z])`)) ? true : false
    return hasLowercase
  }

  static #hasNumber = (text) => {
    // string => bool
    const hasNumber = text.match(new RegExp(String.raw`(?<number>[0-9])`)) ? true : false
    return hasNumber
  }

  static #hasSymbol = (text) => {
    // string => bool
    const hasSymbol = text.match(new RegExp(String.raw`(?<symbol>[-#?!@$ %^&*())])`)) ? true : false
    return hasSymbol
  }

  static #hasProhibitedCharacters = (text) => {
    // string => borderCollapse: 
    const prohibitedCharacters = text.replace(new RegExp(String.raw`(?<prohibitedCharacters>[-a-zA-Z0-9#?!@$ %^&*()]+)`,'g'),'')
    return prohibitedCharacters === '' ? false : [...prohibitedCharacters].join(' ')
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

  static #composeEmailHelperText = (error, email, at, domain) => {
    // email: bool, at: bool, domain:bool, error:bool => string
    switch (error) {
    case true:
      const emailHelper = !email && 'missing email prefix'
      const atHelper = !at && 'missing @'
      const domainHelper = !domain && 'missing email domain'
      const helperText = [emailHelper, atHelper, domainHelper]
        .filter(el=>el !== false)
        .join(', ')
      return `Check : ${helperText}`
    case false:
      return 'Valid email'
    }
  }

  static #composePasswordHelperText = (error, hasTheRightLength, hasUppercase, hasLowerCase, hasNumber, hasSymbol, hasProhibitedCharacters) => {
    // => string
    switch (error) {
    case true:
      const lengthHelper = !hasTheRightLength && 'should consist of 8 to 30 characters'
      const uppercaseHelper = !hasUppercase && 'missing an uppercase letter'
      const lowercaseHelper = !hasLowerCase && 'missing a lowercase letter'
      const numberHelper = !hasNumber && 'missing an alphanumeric character'
      const symbolHelper = !hasSymbol && 'missing a special character'
      const prohibitedHelper = hasProhibitedCharacters ? `contains prohibited character(s) : ${hasProhibitedCharacters}` : false

      const helperText = [lengthHelper, uppercaseHelper, lowercaseHelper, numberHelper, symbolHelper, prohibitedHelper]
        .filter(el=> el !== false)
        .join(', ')
      return `Check : ${helperText}`
    case false:
      return 'Valid password'
    }
  }
}