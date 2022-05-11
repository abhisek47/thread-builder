import React from 'react'
import ImageUploading from 'react-images-uploading'
import { BiImages } from 'react-icons/bi'

const UploadImage = ({ editor }) => {
  const [images, setImages] = React.useState([])
  const maxNumber = 69

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    editor.commands.insertContent(
      `<img src='https://picsum.photos/200/100' alt='dp' />`
    )
    
  }

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey='data_url'
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps
      }) => (
        // write your building UI
        <div className='upload__image-wrapper'>
          <button
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
          >
            <BiImages size={18} />
          </button>
          &nbsp;
        </div>
      )}
    </ImageUploading>
  )
}

export default UploadImage
