import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <> 
    <div>Navbar</div>
    <ul>
      <h1>c</h1>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/post/jhg'>Post</Link></li>
      <li><Link to='/createPost'>Create Post</Link></li>
<h3>difference between anchor tag(reload page) and link components(not reload page)</h3>
<h1>anchor

  
</h1>
      <li><a href='/'>Home</a></li>
      <li><a href='/post/jhg'>Post</a></li>
      <li><a href='/createPost'>Create Post</a></li>
    </ul>
   </>
  )
}
