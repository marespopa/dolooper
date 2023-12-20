import { useCallback, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from 'sanitize-html'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Snippet } from 'jotai/atoms'

interface Props {
  item: Snippet
  actions: {
    update: (_arg: Snippet) => void
    delete: (_arg: string) => void
  }
}

const SnippetItem = ({ item, actions }: Props) => {
  const contentEditableRef = useRef<any>(null)
  const { update: handleChange, delete: handleDelete } = actions

  useEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.focus()
    }
  }, [])

  const onChange = useCallback(
    (evt: { currentTarget: { innerHTML: string } }) => {
      const newValue = sanitizeHtml(evt.currentTarget.innerHTML)

      handleChange({ id: item.id, value: newValue })
    },
    [item, handleChange],
  )

  const copyIcon = (
    <span className="flex-none cursor-pointer transition text-gray-500 hover:text-white">
      <svg
        className="shrink-0 h-5 w-5 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
        <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path>
      </svg>
    </span>
  )

  const deleteIcon = (
    <span
      className="flex-none cursor-pointer transition text-gray-500 hover:text-white"
      onClick={() => handleDelete(item.id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{' '}
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />{' '}
      </svg>
    </span>
  )

  return (
    <code className="w-full font-mono text-sm sm:text-base flex flex-nowrap text-left space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 border-slate-700 border-2 outline-none">
      <span className="shrink-0 text-gray-500 flex-none">$</span>

      <span className="flex-auto col-span-9 border-b border-gray-400 dark:border-white min-w-[64px]">
        <ContentEditable
          className="outline-none border-0"
          html={item.value} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={onChange} // handle innerHTML change
          tagName="span" // Use a custom HTML tag (uses a div by default)
        />
      </span>
      <CopyToClipboard text={item.value}>{copyIcon}</CopyToClipboard>
      {deleteIcon}
    </code>
  )
}

export default SnippetItem
