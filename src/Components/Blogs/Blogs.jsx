/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useState } from 'react'

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);


  return (
    <div className='md:w-2/3'>
        <h2>Blogs: {blogs.length}</h2>
    </div>
  )
}
