import Bookmark from "../Bookmark/Bookmark"

export default function Bookmarks({bookmarks, readingTime}) {

  return (
    <div className="md:w-1/3 bg-slate-200 text-center rounded-md ml-2">
        <div className="mb-2">
            <h2 className="text-3xl text-violet-800 rounded-sm m-2">Total Reading Times: {readingTime}</h2>
        </div>
        <div>
            <h2 className="text-3xl rounded-sm m-2">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks?.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
        
    </div>
  )
}
