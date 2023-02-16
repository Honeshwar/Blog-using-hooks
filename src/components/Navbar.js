import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div id='navbar'>
      <img src='https://th.bing.com/th/id/OIP.4eNuH6v50eBsLABnFsZUrgHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7'/>
      <ul >

        <li><Link className='link' to='/'>Home</Link></li>
        <li><Link className='link' to='/post/jhg'>Post Detail</Link></li>
        <li><Link className='link' to='/createPost'>Create Post</Link></li>

      </ul>
    </div>
  );
}
