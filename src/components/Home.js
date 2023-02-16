import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import firestore from '../firebase';
export default function Home() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    firestore
    .collection('Posts')
    .get()//entire collect return as promise
    .then((snapshot)=>{
      const posts = snapshot.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data()//obj return and spread operator spread it value,as key:value
        }
       
      });
      console.log("posts",posts);

      setPosts(posts);//rerender and assign new posts array value to posts

    })
  },[]);// [] only mounted time use ho ga
  return (
    <div className='home'>
      <div className='home-top-title'>
        <h1> Tech Blog </h1>
        <div id='blog-by'><i>By Honeshwar</i></div>
      </div>

    {posts.map((post)=>{
       return( 
       <div className='post-list' key={post.id}>
        <Link className='link-to-post' to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <p><i>{post.subTitle}</i></p>
        <p>{post.content}</p>
       </div>)
    })}

    </div>
  )
}
