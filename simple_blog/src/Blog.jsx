import React from 'react';
import {useParams} from 'react-router-dom';
import blogs from './blogs.json';

function Blog(){
    const {blogId}=useParams(); 
    return(
        <div>
          {blogs
          .filter((value)=>value.blog_id == blogId)
          .map((value)=>(
            <div key={value.blog_id} className='blogPage'>
                <h1>{value.title}</h1>
                <p>{value.Description}</p>
                <p className='author'>- {value.author}</p>
            </div>
          ))
          }
        </div>
    )
}

export default Blog