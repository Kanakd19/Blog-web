import React from 'react'
import "./SinglePost.css"

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className="singlePostImg"
             src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt=""  />
        <h1 className="singlePostTitle">
            lorem ahgfcd ajshd hdgyu.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Kanak</b></span>
            <span className='singlePostDate'>1 hr ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum voluptate. Amet quibusdam, voluptates nesciunt sequi voluptate sint
             laborum odit, dolores delectus blanditiis suscipit. Rerum inventore autem modi nesciunt id?
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum voluptate. Amet quibusdam, voluptates nesciunt sequi voluptate sint
             laborum odit, dolores delectus blanditiis suscipit. Rerum inventore autem modi nesciunt id?
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum voluptate. Amet quibusdam, voluptates nesciunt sequi voluptate sint
             laborum odit, dolores delectus blanditiis suscipit. Rerum inventore autem modi nesciunt id?
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum voluptate. Amet quibusdam, voluptates nesciunt sequi voluptate sint
             laborum odit, dolores delectus blanditiis suscipit. Rerum inventore autem modi nesciunt id?</p>
        </div>
    </div>
  )
}

export default SinglePost