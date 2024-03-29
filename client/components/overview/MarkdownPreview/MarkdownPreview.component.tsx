import { useAtom } from 'jotai'
import { atom_description, atom_title } from 'jotai/atoms'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const MarkdownPreview = () => {
  const [title] = useAtom(atom_title)
  const [description] = useAtom(atom_description)
  const value = `# ${title} \n ${description}`

  return (
    <div className={`${previewStyles}`}>
      <article className="prose max-w-[100ch] dark:prose-invert mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  style={nord}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {value}
        </ReactMarkdown>
      </article>
    </div>
  )
}

const previewStyles = `mt-4 p-4 md:p-4 bg-white shadow-sm border border-gray-600
  dark:bg-gunmetal-500 dark:text-white dark:border-gray-700 max-h-[80vh] overflow-y-auto`

export default MarkdownPreview
