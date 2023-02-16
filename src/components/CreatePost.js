import React, { useState } from 'react'

export default function CreatePost() {
//use state hooks to get data from input
const [title,setTitle] = useState('');
const [subTitle,setSubTitle] = useState('');
const [content,setContent] = useState('');

function handleSubmission(e){
  e.preventDefault();
  console.log("title",title);
  console.log("subtitle",subTitle);
  console.log("content",content);
}

  return (
    <div className='create-post-form'>
    <form onSubmit={handleSubmission}>
      <div className='form-field'>
      <label>Title</label>
        <input value={title} onChange={(e)=>{setTitle(e.target.value);}} placeholder='Enter title'/>
      </div>
      <div className='form-field'>
      <label>Sub Title</label>
        <input value={subTitle} onChange={(e)=>{setSubTitle(e.target.value);}} placeholder='Enter Subtitle'/>
      </div>
      <div className='form-field'>
      <label>Content</label>
        <textarea value={content} onChange={(e)=>{setContent(e.target.value);}}placeholder='Enter your post'></textarea>
      </div>

      <button id='create-post-button'>Create Post</button>
    </form>
    </div>
  )
}
