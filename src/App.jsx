import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {


  return (
    <>

      <Header></Header>
      <div className='md:flex justify-between w-11/12 mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    

    </>
  )
}

export default App
