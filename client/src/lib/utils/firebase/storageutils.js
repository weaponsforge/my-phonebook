import { storage } from '@/utils/firebase/config'
import { ref, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'

/**
 * Upload a file from the File API to Firebase Storage.
 * @param {String} pathToStorageDirectory - Firebase Storage reference path minus the file name
 * @param {File} file FormData file
 * @param {String} filename - File name (with or without extension name)
 * @returns {Promise} Promise that resolves into the file's download URL string.
 * @throws {Error} Firebase Storage upload errors.
 */
const uploadFileToStorage = async (pathToStorageDirectory, file, fileName, metadata = null) => {
  const storageRef = ref(storage, `${pathToStorageDirectory}/${fileName}`)

  try {
    await uploadBytes(storageRef, file, { customMetadata: metadata })
  } catch (err) {
    throw new Error (err)
  }

  return await getDownloadURL(storageRef)
}

/**
 * Delete a file in Firebase Storage
 * @typedef {Object} param - Input parameters.
 * @param {String} param.pathToStorageDirectory - Firebase Storage reference path minus the file name.
 * @param {String} param.pathToStorageFile - Full Firebase Storage file path.
 * @param {String} param.fileName - File name (with or without extension name).
 * @param {Boolean} param.allowMissingError - If true, do not throw errors on missing file deletions.
 * @returns {Promise}
 */
const deleteFileFromStorage = async ({
  pathToStorageDirectory,
  pathToStorageFile,
  fileName,
  allowMissingError = false
}) => {
  const filePath = pathToStorageFile ?? `${pathToStorageDirectory}/${fileName}`
  const storageRef = ref(storage, `${filePath}`)

  if (allowMissingError) {
    try {
      const response = await deleteObject(storageRef)
      return response
    } catch (err) {
      return true
    }
  } else {
    return await deleteObject(storageRef)
  }
}

export {
  uploadFileToStorage,
  deleteFileFromStorage
}
