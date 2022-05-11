import React, { useState } from 'react'
import ReactGiphySearchbox from 'react-giphy-searchbox'
import Modal from 'react-modal'
import { BiLink } from 'react-icons/bi'

const GiphyModal = ({ editor }) => {
  const [gifImage, setGifImage] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>
        <BiLink size={20} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
        className='w-fit flex items-center justify-center mx-auto mt-8'
      >
        <div className='searchboxWrapper '>
          <ReactGiphySearchbox
            apiKey='9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7'
            onSelect={(item) => {
              setGifImage(item.user.avatar_url)
              console.log(item)
              editor.commands.insertContent(
                `<img src='${item.images.preview_gif.url}' alt='dp' />`
              )
            }}
            masonryConfig={[
              { columns: 2, imageWidth: 100, gutter: 5 },
              { mq: '700px', columns: 3, imageWidth: 120, gutter: 5 }
            ]}
          />
        </div>
      </Modal>
    </div>
  )
}

export default GiphyModal
