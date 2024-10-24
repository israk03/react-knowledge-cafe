import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
    console.log('adding soon.....')
  }


  return (
    <>

      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex justify-between w-11/12 mx-auto'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <Bookmarks></Bookmarks>
        </div>

      </div>
      
    

    </>
  )
}

export default App
