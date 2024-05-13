import { useAtom } from 'jotai'
import { atom_description } from 'jotai/atoms'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkFrontmatter from 'remark-frontmatter'

const MarkdownPreview = () => {
  const [description] = useAtom(atom_description)
  const hasNoDefinition = description.length === 0

  const value = hasNoDefinition
    ? `## Preview Mode
Click the eye icon to switch to edit mode and start defining your task.`
    : `${description}`

  return (
    <div className={`${previewStyles}`}>
      <article className="prose max-w-[100ch] dark:prose-invert mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkFrontmatter]}
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
