import React, { useState } from 'react'
import firestore from '../firebase';
import useFormInputs from './CustomHooks';

export default function CreatePost() {
//here in line 7,8,9 there is redundancy/repetive code just for different variable
//we will improve it using custome hooks

//use state hooks to get data from input
const title  = useFormInputs();
const subTitle  = useFormInputs();
const content  = useFormInputs();

function handleSubmission(e){
  e.preventDefault();
  console.log("title",title);
  console.log("subtitle",subTitle);
  console.log("content",content);
  //adding create post to firestore
  firestore//db
  .collection('Posts')
   .add({//if not collection in firestore so it create new one,add an document
    title:title.value,
    subTitle:subTitle.value,
    content:content.value,
    createAt: new Date()//date time return
  })
  // .than(()=>{
  //   console.log("Post is created successfully");
  // })
  // .catch((err)=>{
  //   console.log("error while creating Post",err);
  // });
}

  return (
    <div className='create-post-form'>
    <form onSubmit={handleSubmission}>
      <div className='form-field'>
      <label>Title</label>
        <input {...title} placeholder='Enter title' required/>
      </div>
      <div className='form-field'>
      <label>Sub Title</label>
        <input {...subTitle} placeholder='Enter Subtitle' required/>
      </div>
      <div className='form-field'>
      <label>Content</label>
        <textarea {...content} placeholder='Enter your post' required ></textarea>
      </div>

      <button id='create-post-button'>Create Post</button>
    </form>
    </div>
  )
}
