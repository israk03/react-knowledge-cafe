import React from 'react'
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
    <div>

    </div>
  )
}
