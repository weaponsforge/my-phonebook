const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

/**
 * Compose an email wrapped inside the HTML template for emails.
 * @param {String} title - Email subject/title
 * @param {String} content - Email message content in raw text or HTML markup
 * @param {String} buttonLabel - Button text label
 * @param {String} linkURL - URL link for to embedd in the button
 * @returns {String} HTML string containing the email message
 */
const composeEmail = ({ title = '', content = '', buttonLabel = '', linkURL = '' }) => {
  try {
    // Template file
    const templateFile = path.join(__dirname, '..', 'template', 'app', 'template.ejs')
    let template = fs.readFileSync(templateFile, 'utf-8')

    // Image file
    const logoFile = path.join(__dirname, '..', 'template', 'app', 'my-phonebook-logo.png')
    const img = 'data:image/png;base64,' + fs.readFileSync(logoFile).toString('base64')

    template = ejs.render(template, {
      logo: img,
      title,
      content,
      buttonLabel,
      linkURL
    })

    return template
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = composeEmail
