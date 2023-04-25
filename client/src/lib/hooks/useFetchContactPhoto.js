import { useEffect, useMemo } from 'react'
import { useAsyncV, updateAsyncV } from 'use-sync-v'
import { downloadBlobFromStorage } from '@/utils/firebase/storageutils'

const PHOTO_STORE_KEY = 'savedPhotoBlob'

/**
 * Downloads a Contact photo directly as Blob from Firebase Storage, taking the defined Firebase Storage Rules into account.
 * Returns the downloaded photo's local URL converted from the downloaded Blob data, or blank String ''.
 * Returns the photo download error as String, or blank ''.
 *
 * @param {String} storageFilePath - Contact photo's full Firebase Storage file path
 * @returns {Object}
 *  - data: {Object} Photo Blob data.
 *  - loading: {Bool} Photo is currently being downloaded.
 *  - error: {String} Photo download error. Returns a blank string if error-free.
 *  - photo: {String} Local photo URL converted from the Blob data.
 */
export default function useFetchContactPhoto (storageFilePath) {
  const storagePhotoFile = useAsyncV(PHOTO_STORE_KEY)

  useEffect(() => {
    // Reset the Storage photo Blob
    const resetPhotoStore = () => {
      updateAsyncV(PHOTO_STORE_KEY, async () => null, { deleteExistingData: true })
    }

    resetPhotoStore()
    return () => resetPhotoStore()
  }, [])

  const photo = useMemo(() => {
    return (storagePhotoFile.data !== null && !storagePhotoFile.loading)
      ? URL.createObjectURL(storagePhotoFile.data)
      : ''
  }, [storagePhotoFile])

  useEffect(() => {
    if (storageFilePath) {
      updateAsyncV(PHOTO_STORE_KEY, async () => downloadBlobFromStorage(storageFilePath))
    } else {
      updateAsyncV(PHOTO_STORE_KEY, async () => null, { deleteExistingData: true })
    }
  }, [storageFilePath])

  const errorString = useMemo(() => {
    return (typeof storagePhotoFile.error === 'boolean')
      ? ''
      : storagePhotoFile.error?.response?.data ?? storagePhotoFile.error.message
  }, [storagePhotoFile.error])

  return {
    data: storagePhotoFile.data,
    loading: storagePhotoFile.loading,
    error: errorString,
    photo
  }
}
