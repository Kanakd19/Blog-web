import React from 'react'
import { Link } from 'react-router-dom'
import "./Post.css"
const Post = () => {
  return (
    <div className='post'>
      <Link to="./post">
<img  className="postImg"src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" 
alt="" 
 />
 </Link>
 <div className="postInfo">
    <div className="postCats">
        <div className="postCat">Music</div>
        <div className="postCat">Life</div>
    </div>
    <span className="postTitle">
        Lorem, nisi consectetur voluptatem commodi inventore?
    </span>
    <hr/>
    <span className="postDate">1 hr ago</span>
 </div>
 <p className="postDesc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic natus facere iste vitae incidunt maiores,
     vel, numquam ipsum quae optio, quasi dicta commodi excepturi quos consequatur itaque illum nisi.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic natus facere iste vitae incidunt maiores,
     vel, numquam ipsum quae optio, quasi dicta commodi excepturi quos consequatur itaque illum nisi.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic natus facere iste vitae incidunt maiores,
     vel, numquam ipsum quae optio, quasi dicta commodi excepturi quos consequatur itaque illum nisi.
 </p>
    </div>
  )
}

export default Post