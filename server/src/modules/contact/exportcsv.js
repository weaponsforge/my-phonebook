const fastcsv = require('fast-csv')
const ServerError = require('../../utils/error')
const { timestampToDateString } = require('../../utils/firestore')
const { CONTACT_FIELDS } = require('../../utils/constants')

/**
 * Exports Contacts Firestore document/s from a user's /contacts subcollection to a CSV file.
 * Requires using the attachAccessControllAllowOrigin middleware for enhanced cross-origin security.
 * @param {Object[]} contacts - Firestore Contact documents.
 * @param {Object} res - Express response object.
 * @returns
 */
const exportCSV = (contacts = [], res) => {
  try {
    // Write the contacts data to res stream
    const csv = fastcsv.format({ headers: true })
    const filename = 'contacts.csv'
    csv.pipe(res).on('end', () => console.log('done'))

    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', `'attachment; filename="${filename}"'`)

    contacts.forEach((contact) => {
      const obj = Object.values(CONTACT_FIELDS).reduce((list, key) => ({
        ...list,
        [key]: ([CONTACT_FIELDS.DATE_CREATED, CONTACT_FIELDS.DATE_UPDATED].includes(key))
          ? timestampToDateString(contact[key])
          : contact[key]
      }), {})

      csv.write(obj)
    })

    csv.end()
  } catch (err) {
    const errorMsg = err?.response?.data ?? err.message
    throw new ServerError(errorMsg, ServerError.httpErrorCodes._502)
  }
}

module.exports = exportCSV
