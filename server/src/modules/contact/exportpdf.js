const path = require('path')
const dayjs = require('dayjs')
const PDFPrinter = require('pdfmake')

const ServerError = require('../../utils/error')
const { timestampToDateString } = require('../../utils/firestore')
const { CONTACT_FIELDS, CONTACT_FIELDS_LABELS } = require('../../utils/constants')

const fonts = {
  Roboto: {
    normal: path.join(__dirname, '..', '..', '..', 'assets', 'fonts', 'roboto', 'Roboto-Regular.ttf'),
    bold: path.join(__dirname, '..', '..', '..', 'assets', 'fonts', 'roboto', 'Roboto-Bold.ttf'),
    italics: path.join(__dirname, '..', '..', '..', 'assets', 'fonts', 'roboto', 'Roboto-Italic.ttf'),
    bolditalics: path.join(__dirname, '..', '..', '..', 'assets', 'fonts', 'roboto', 'Roboto-BoldItalic.ttf')
  }
}

const printer = new PDFPrinter(fonts)

/**
 * Exports Contacts Firestore document/s from a user's /contacts subcollection to a PDF file.
 * @param {Object[]} contacts - Firestore Contact documents.
 * @param {Object} res - Express response object.
 * @returns
 */
const exportPDF = (contacts = [], res) => {
  try {
    // Write contacts data to res stream
    const filename = 'contacts.pdf'

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `'attachment; filename="${filename}"'`)
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_WEBSITE_URL)

    const docDefinition = {
      defaultStyle: {
        fontSize: 10
      },

      content: [
        {
          layout: 'lightHorizontalLines',

          table: {
            headerRows: 1,
            widths: ['35%', '25%', '18%', 'auto', 'auto'],

            body: [
              // Table headers
              Object.values(CONTACT_FIELDS_LABELS),

              // Table rows
              ...contacts.reduce((rows, contact) => {
                contact[CONTACT_FIELDS.DATE_CREATED] = dayjs(timestampToDateString(contact[CONTACT_FIELDS.DATE_CREATED])).format('YYYY-MM-DD h:mm:ss')
                contact[CONTACT_FIELDS.DATE_UPDATED] = dayjs(timestampToDateString(contact[CONTACT_FIELDS.DATE_UPDATED])).format('YYYY-MM-DD h:mm:ss')

                // Extract row values by CONTACT_FIELDS_LABELS order
                rows.push(Object.keys(CONTACT_FIELDS_LABELS).reduce((docValues, key) => {
                  return (key === 'FULL_NAME')
                    ? docValues.concat(`${contact[CONTACT_FIELDS.FIRST_NAME]} ${contact[CONTACT_FIELDS.MIDDLE_NAME]} ${contact[CONTACT_FIELDS.LAST_NAME]}`)
                    : docValues.concat(contact[key])
                }, []))
                return rows
              }, [])
            ]
          }
        }
      ]
    }

    const pdf = printer.createPdfKitDocument(docDefinition)
    pdf.pipe(res)
    pdf.end()
  } catch (err) {
    const errorMsg = err?.response?.data ?? err.message
    throw new ServerError(errorMsg, ServerError.httpErrorCodes._502)
  }
}

module.exports = exportPDF
