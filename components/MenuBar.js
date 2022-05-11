import React from 'react'
import Counter from './Counter'
import UploadImage from './UploadImage'
import GiphyModal from './GiphyModal'

const MenuBar = ({ editor, addImage, limit }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='menubar'>
      <button>{editor && <Counter limit={limit} editor={editor} />}</button>
      <GiphyModal editor={editor} />
      <UploadImage editor={editor} />
    </div>
  )
}

export default MenuBar
