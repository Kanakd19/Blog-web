import React from 'react'
import './Write.css'

const Write = () => {
  return (
    <div className='write'>
        <img className="writeImg"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" 
        alt="" />
        <form className="writeForm">
<div className="writeFormGroup">
    <label htmlFor="fileInput">
    <i className="writeIcon fa-solid fa-plus"></i>
    </label>
    <input type="file" id='fileInput' style={{display:"none"}}/>
    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
</div>
<div className="writeFormGroup">
    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
</div>
<button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write