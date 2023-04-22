import { useEffect, useState, useMemo } from 'react'
import { updateSyncV } from 'use-sync-v'
import PropTypes from 'prop-types'

import IconButton from '@mui/material/IconButton'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'

const ICON_STATES = {
  SEARCH: 'search',
  CANCEL: 'cancel'
}

const IMAGE_MIME_TYPES = [
  'image/bmp',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp'
]

/**
 * Button that opens up the file selector window. It uses updateSyncV(fileDomID) to set the global selected File.
 * Use the hook to retrieve the selected File and it's img source on any Component:
 * ```
 * const photoFile = useSyncV(fileDomID)
 * photoFile.file  // Selected File object
 * photoFile.imgSrc  // Blob image URL
 * ```
 * @typedef {Object} props - Component Props
 * @param {String} props.fileDomID - HTML ID attribute to attach to the <input type="file" /> element.
 * @param {Bool} props.hasFile - Start displaying the FileUploadButton Component with a Cancel Icon if true.
 * @param {Function} props.errorCallback - Passes the Error string generated inside this Component to the callback.
 * @param {Function} props.clearFileCallback - Callback after pressing the Cancel Icon.
 * @param {Function} props.setFileCallback - Callback after selecting a new picture file.
 * @param {String} [props.styles] - Custom MUI "sx" styles to apply on the `<IconButton />` button container.
 */
function FileUploadButton ({
  fileDomID,
  hasFile = false,
  errorCallback,
  clearFileCallback,
  setFileCallback,
  styles = {}
}) {
  const fileId = useMemo(() => fileDomID, [fileDomID])
  const [icon, setIcon] = useState((hasFile)
    ? ICON_STATES.CANCEL
    : ICON_STATES.SEARCH
  , [hasFile])

  useEffect(() => {
    if (fileId !== undefined) {
      updateSyncV(fileId, {
        file: null,
        imgSrc: null
      })
    }
  }, [fileId])

  const IconPicture = useMemo(() => {
    return (icon === ICON_STATES.SEARCH)
      ? PhotoCameraIcon
      : CancelTwoToneIcon
  }, [icon])

  const setSelectedFile = async (e) => {
    if (!e.target.files[0]) {
      return
    }

    if (!IMAGE_MIME_TYPES.includes(e.target.files[0].type)) {
      errorCallback('File type not supported.')
      return
    }

    setIcon(ICON_STATES.CANCEL)

    if (setFileCallback) {
      setFileCallback(e.target.files[0].name)
    }

    updateSyncV(fileDomID, {
      file: e.target.files[0],
      imgSrc: URL.createObjectURL(e.target.files[0])
    })
  }


  const clearFile = (e) => {
    e.preventDefault()

    setIcon(ICON_STATES.SEARCH)

    updateSyncV(fileDomID, {
      file: null,
      imgSrc: null
    })

    if (clearFileCallback) {
      clearFileCallback()
    }
  }

  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="label"
      sx={styles}
      onClick={(e) => {
        if (icon === ICON_STATES.CANCEL) {
          clearFile(e)
        }
      }}
    >
      <input
        hidden
        accept="image/*"
        type="file"
        onChange={setSelectedFile}
      />
      <IconPicture sx={{ color: 'black' }} />
    </IconButton>
  )
}

FileUploadButton.propTypes = {
  fileDomID: PropTypes.string.isRequired,
  hasFile: PropTypes.bool,
  errorCallback: PropTypes.func.isRequired,
  clearFileCallback: PropTypes.func,
  setFileCallback: PropTypes.func,
  styles: PropTypes.object
}

export default FileUploadButton
