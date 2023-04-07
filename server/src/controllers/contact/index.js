const ServerError = require('../../utils/error')
const { listContacts } = require('../../modules/contact')
const { exportCSV, exportPDF } = require('../../modules/contact')
const { MAX_CONTACTS } = require('../../utils/constants')

const EXPORT_TYPE = {
  CSV: 'csv',
  PDF: 'pdf'
}
const exportContact = async (req, res, next) => {
  const { ids, type } = req.body

  if (type === undefined) {
    return res.status(ServerError.httpErrorCodes._400)
      .send('Missing parameter/s')
  }

  if (!Object.values(EXPORT_TYPE).includes(type)) {
    return res.status(ServerError.httpErrorCodes._400)
      .send('Invalid export type')
  }

  if (ids !== undefined) {
    try {
      if (ids.length > MAX_CONTACTS) {
        return res.status(ServerError.httpErrorCodes._400)
          .send('Requested contacts exceed max limit.')
      }
    } catch (err) {
      return res.status(ServerError.httpErrorCodes._502)
        .send(err?.response?.data ?? err.message)
    }
  }

  try {
    const contacts = await listContacts(req.user.uid, (ids) || [])

    if (type === EXPORT_TYPE.CSV) {
      return exportCSV(contacts, res)
    } else if (type === EXPORT_TYPE.PDF) {
      return exportPDF(contacts, res)
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
