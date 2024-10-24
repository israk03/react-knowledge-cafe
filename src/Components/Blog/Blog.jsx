import PropTypes from "prop-types"
import { BiSolidBookmarks } from "react-icons/bi";

export default function Blog({blog, handleAddToBookmarks}) {

    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;
  return (
    <div className="mb-12 border-b-2">
        <img className="w-full rounded-sm mb-4" src={cover} alt={`Cover picture for ${title}.`} />
        <div className="flex justify-between items-center mb-2">
            <div className="flex mb-4">
                <img className="w-14" src={author_img} alt="" />
                <div className="ml-4">
                    <h2 className="text-2xl">{author}</h2>
                    <p>{posted_date}</p>
                </div>

            </div>
            <div className="flex items-center">
                <span>{reading_time} min read</span>
                <button className="ml-2 text-red-500 text-2xl" onClick={()=>handleAddToBookmarks(blog)}><BiSolidBookmarks /></button>

            </div>
        </div>
        <h2 className="text-4xl mb-2">{title}</h2>
        <p className="mb-4">
            {
                hashtags.map((hash, idx)=> <span key={idx}><a href="">#{hash}</a></span>)
            }
        </p>

    </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
