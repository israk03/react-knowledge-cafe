import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    const remainningBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainningBookmarks);
  }

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }




  return (
    <>

      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex justify-between w-11/12 mx-auto'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>

      </div>
      
    

    </>
  )
}

export default App
