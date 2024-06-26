import ButtonFontIcon from '@/components/forms/buttons/ButtonFontIcon'
import { useAtom } from 'jotai'
import { atom_description, atom_filename } from 'jotai/atoms'
import { FaSave } from 'react-icons/fa'
import { saveAs } from 'file-saver'

const SaveFileSection = () => {
  const [description] = useAtom(atom_description)
  const [filename, setFilename] = useAtom(atom_filename);

  return (
    <ButtonFontIcon action={() => saveFile(description)} title="Export to file">
      <FaSave />
    </ButtonFontIcon>
  )

  function saveFile(content: string) {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    let title = `${filename}`;

    if (!filename.endsWith('.md')) {
      title = title + '.md';
      setFilename(title);
    }

    saveAs(blob, title || 'task.md')
  }
}

export default SaveFileSection
