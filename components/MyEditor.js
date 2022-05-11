import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import MenuBar from './MenuBar'
import CharacterCount from '@tiptap/extension-character-count'
import Mention from '@tiptap/extension-mention'
import suggestion from './Suggestion'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'
import Focus from '@tiptap/extension-focus'
import Menu from '@tiptap/extension-floating-menu'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Generic from './Generic'
import NodeView from './Extension.js'
import ScrollToBottom from 'react-scroll-to-bottom'

const MyEditor = () => {
  const limit = 280

  const customRule = HorizontalRule.extend({
    addKeyboardShortcuts() {
      return {
        Enter: () => this.editor.commands.setHorizontalRule()
      }
    }
  })

  const editor = useEditor({
    extensions: [
      Image,
      Dropcursor,
      NodeView,
      Generic,
      StarterKit.configure({
        dropcursor: true,
      }),
      customRule,
      Placeholder.configure({
        placeholder: 'Write something...'
      }),
      Link.configure({
        openOnClick: true
      }),
      Menu.configure({
        shouldShow: ({ editor, view, state, oldState }) => {
          // show the floating within any paragraph
          return editor.isActive('paragraph')
        }
      }),
      Focus.configure({
        className: 'has-focus',
        mode: 'all'
      }),
      CharacterCount.configure({
        limit
      }),
      Mention.configure({
        HTMLAttributes: {
          class: 'mention'
        },
        suggestion
      })
    ],
    content: ``
  })

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      const link = url
      const link2 = link.split('/')
      const finalLink = link2[5]

      editor.commands.insertContent(
        `<div class="twitter-tweet"><p lang="en" dir="ltr">How can the third umpire not see what we saw? Rohit was NOT OUT <a href="https://twitter.com/hashtag/MIvsKKR?src=hash&amp;ref_src=twsrc%5Etfw">#MIvsKKR</a> <a href="https://t.co/UbbUH2BVcc">pic.twitter.com/UbbUH2BVcc</a></p>&mdash; Vikrant Gupta (@vikrantgupta73) <a href="https://twitter.com/vikrantgupta73/status/1523698835679158272?ref_src=twsrc%5Etfw">May 9, 2022</a></div>`
      )
    }
  }

  return (
    <div>
      <MenuBar editor={editor} addImage={addImage} limit={limit} />
      <ScrollToBottom className='element'>
        <EditorContent editor={editor} />
      </ScrollToBottom>
    </div>
  )
}

export default MyEditor
