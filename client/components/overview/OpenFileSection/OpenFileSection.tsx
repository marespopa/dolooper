import Modal from '@/components/common/Modal'
import ButtonFontIcon from '@/components/forms/buttons/ButtonFontIcon'
import FileInput from '@/components/forms/input/FileInput'
import React, { useState } from 'react'
import { FaFolderOpen } from 'react-icons/fa'

interface Props {
  handleFileLoad: (_filename: string, _content: string) => void
}

const OpenFileSection = ({ handleFileLoad }: Props) => {
  const [isFileInputVisible, setIsFileInputVisible] = useState(false)

  return (
    <>
      <ButtonFontIcon
        action={() => setIsFileInputVisible(!isFileInputVisible)}
        title="Open from file"
      >
        <FaFolderOpen />
      </ButtonFontIcon>

      {isFileInputVisible && (
        <Modal
          isOpen={isFileInputVisible}
          onModalClose={() => setIsFileInputVisible(false)}
        >
          <div className="flex flex-col gap-2 p-2">
            <FileInput
              name="file"
              placeholder="Upload a markdown file"
              handleChange={(selectedFileList: FileList) => {
                if (!selectedFileList) {
                  console.error(
                    'Something went wrong with the file selection. Please try again.',
                  )

                  return
                }

                if (!isSelectedFileValid(selectedFileList[0])) {
                  console.error(
                    'The selected file must be a .md or a .txt file.',
                  )

                  return
                }

                setIsFileInputVisible(false)

                handleOpenFileFromInput(selectedFileList[0])

                return
              }}
              label="Markdown File"
              accept=".md, .txt"
              helperText="Load a markdown file."
            />
          </div>
        </Modal>
      )}
    </>
  )

  function isSelectedFileValid(file: File) {
    return file && (file?.name.endsWith('.md') || file?.name.endsWith('.txt'))
  }

  async function handleOpenFileFromInput(file: File) {
    if (!file) {
      console.error('File not found. Please try uploading the file again.')

      return
    }

    const content = await file.text()
    handleFileLoad(`${file?.name}.md`, content)
  }
}

export default OpenFileSection
