/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useState } from 'react'
import Blog from '../Blog/Blog';

export default function Blogs({handleAddToBookmarks, handleMarkAsRead}) {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);


  return (
    <div className='md:w-2/3'>
        
        {
            blogs.map(blog=> <Blog 
                key={blog.id}
                blog={blog}
                handleAddToBookmarks={handleAddToBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog> )
        }
    </div>
  )
}
