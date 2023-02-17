import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import firestore from '../firebase'


export default function PostDetail() {
const [post,setPost]=useState({});
  const {postId}=useParams();//return obj inside  key=param,value=doc.id
  //get post from firestore/db using params
useEffect(()=>{
firestore
.collection("Posts")
.doc(postId)
.get()
.then((doc)=>{
  console.log(doc.data());
  setPost(doc.data());
}).catch((err)=>{
console.log(err);
});
},[postId]);
  return (
    <div className='post-detail'>
      <h3>{post.title}</h3>
      <i>{post.subTitle}</i>
      <p>{post.content}</p>
    </div>
  )//return only one jsx element because it is an js obj,or we can return on obj at a time
}
