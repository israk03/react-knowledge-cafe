

export default function Bookmark({bookmark}) {
    console.log(bookmark);
    const {title} = bookmark;
  return (
    <div className="bg-slate-100 m-3 p-4 rounded-md">
        <h3 className='text-lg'>{title}</h3>
    </div>
  )
}
