import Bookmark from "../Bookmark/Bookmark"

export default function Bookmarks({bookmarks}) {
    console.log('bookmark l', bookmarks)
  return (
    <div className="md:w-1/3 bg-slate-200 text-center ml-2">
        <h2 className="text-3xl bg-slate-300 p-4 rounded-sm m-2">Bookmarked Blog: {bookmarks.length}</h2>
        {
            bookmarks?.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
    </div>
  )
}
