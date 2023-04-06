const ServerError = require('../../utils/error')
const { listContacts } = require('../../modules/contact')
const { exportCSV } = require('../../modules/contact')

const EXPORT_TYPE = {
  CSV: 'csv',
  PDF: 'pdf'
}
const exportContact = async (req, res, next) => {
  const { ids, type } = req.body

  if (ids === undefined || type === undefined) {
    return res.status(ServerError.httpErrorCodes._400)
      .send('Missing parameter/s')
  }

  if (!Object.values(EXPORT_TYPE).includes(type)) {
    return res.status(ServerError.httpErrorCodes._400)
      .send('Invalid export type')
  }

  try {
    const contacts = await listContacts(req.user.uid, ids)

    if (type === EXPORT_TYPE.CSV) {
      return exportCSV(contacts, res)
    } else if (type === EXPORT_TYPE.PDF) {
      // TO-DO: Export contacts to PDF
      return res.status(200).send('OK')
    }
  } catch (err) {
    return (err.constructor.name === ServerError.name)
      ? next(err)
      : next(new ServerError(err.message))
  }
}

module.exports = {
  exportContact
}
