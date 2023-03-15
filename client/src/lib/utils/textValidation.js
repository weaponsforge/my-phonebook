/**
 * Validate class contains static methods that validate input fields.
 */
export class Validate {

  /**
   * Validates an email address.
   * @param {string} text - The email address to validate.
   * @returns {Object} Object containing error boolean, helperText string, and color string.
   */
  static email = (text) => {
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

  /**
   * Validates a password.
   * @param {string} text - The password to validate.
   * @returns {Object} Object containing error boolean, helperText string, and color string.
   */
  static password = (text) => {
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

  /**
   * Validates if the two given passwords match.
   * @param {Object} password - The password object returned from the password validation function.
   * @param {string} retypedPassword - The retyped password to validate against the password object.
   * @returns {Object} Object containing error boolean, helperText string, and color string.
   */
  static passwordConfirmation = (password, retypedPassword) => {
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

  /**
   * Private method to validate if the password has the right length.
   * @private
   * @param {string} text - The password to validate.
   * @returns {boolean} Whether the password has the right length.
   */
  static #hasTheRightLength = (text) => {
    const hasTheRightLength = text.length >= 8 && text.length <= 30
    return hasTheRightLength
  }

  /**
   * Checks if the given text contains at least one uppercase letter.
   *
   * @param {string} text - The text to check for uppercase letters.
   * @returns {boolean} - true if the text has at least one uppercase letter, false otherwise.
   */
  static #hasUppercase = (text) => {
    const hasUppercase = text.match(new RegExp(String.raw`(?<uppercase>[A-Z])`)) ? true : false
    return hasUppercase
  }

  /**
   * Checks if the given text contains at least one lowercase letter.
   *
   * @param {string} text - The text to check for lowercase letters.
   * @returns {boolean} - true if the text has at least one lowercase letter, false otherwise.
   */
  static #hasLowerCase = (text) => {
    const hasLowercase = text.match(new RegExp(String.raw`(?<lowercase>[a-z])`)) ? true : false
    return hasLowercase
  }

  /**
   * Checks if the given text contains at least one digit.
   *
   * @param {string} text - The text to check for digits.
   * @returns {boolean} - true if the text has at least one digit, false otherwise.
   */
  static #hasNumber = (text) => {
    const hasNumber = text.match(new RegExp(String.raw`(?<number>[0-9])`)) ? true : false
    return hasNumber
  }

  /**
   * Checks if a given text has a symbol.
   * @param {string} text - The input text.
   * @returns {boolean} - Whether the text has a symbol or not.
   */
  static #hasSymbol = (text) => {
    const hasSymbol = text.match(new RegExp(String.raw`(?<symbol>[-#?!@$ %^&*())])`)) ? true : false
    return hasSymbol
  }

  /**
   * Checks if a given text has any prohibited characters.
   * @param {string} text - The input text.
   * @returns {(boolean|string)} - Whether the text has any prohibited characters or not. If prohibited characters exist, returns the characters as a string.
   */
  static #hasProhibitedCharacters = (text) => {
    const prohibitedCharacters = text.replace(new RegExp(String.raw`(?<prohibitedCharacters>[-a-zA-Z0-9#?!@$ %^&*()]+)`,'g'),'')
    return prohibitedCharacters === '' ? false : [...prohibitedCharacters].join(' ')
  }

  /**
   * Checks if a given text has an email prefix.
   * @param {string} text - The input text.
   * @returns {boolean} - Whether the text has an email prefix or not.
   */
  static #hasEmailPrefix = (text) => {
    const hasEmailPrefix = text.match(new RegExp(String.raw`(?<emailPrefix>^[^@]+)`)) ? true : false
    return hasEmailPrefix
  }

  /**
   * Check if the given text has an @ symbol
   * @param {string} text - The text to check
   * @returns {boolean} - True if the text has an @ symbol, otherwise false
   */
  static #hasAtSymbol = (text) => {
    const hasAtSymbol = text.match(new RegExp(String.raw`(?<atSymbol>@)`)) ? true : false
    return hasAtSymbol
  }

  /**
   * Check if the given text has a domain after the @ symbol
   * @param {string} text - The text to check
   * @returns {boolean} - True if the text has a domain, otherwise false
   */
  static #hasDomain = (text) => {
    const hasDomain = text.match(new RegExp(String.raw`(?<domain>[^@]+$)`)) ? true : false
    return hasDomain
  }

  /**
   * Compose the helper text for an email validation error
   * @param {boolean} error - Whether there is an error in the email validation
   * @param {boolean} email - Whether the email prefix is present
   * @param {boolean} at - Whether the @ symbol is present
   * @param {boolean} domain - Whether the domain is present
   * @returns {string} - The helper text
   */
  static #composeEmailHelperText = (error, email, at, domain) => {
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

  /**
   * Composes a helper text for password validation based on the validation errors
   *
   * @param {boolean} error - Indicates if there is an error in password validation
   * @param {boolean} hasTheRightLength - Indicates if the password has the right length
   * @param {boolean} hasUppercase - Indicates if the password has an uppercase letter
   * @param {boolean} hasLowerCase - Indicates if the password has a lowercase letter
   * @param {boolean} hasNumber - Indicates if the password has an alphanumeric character
   * @param {boolean} hasSymbol - Indicates if the password has a special character
   * @param {string} hasProhibitedCharacters - Indicates if the password contains prohibited characters
   * @returns {string} A helper text for password validation
   */
  static #composePasswordHelperText = (error, hasTheRightLength, hasUppercase, hasLowerCase, hasNumber, hasSymbol, hasProhibitedCharacters) => {
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