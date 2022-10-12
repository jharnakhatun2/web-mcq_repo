import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data';


const Blogs = () => {
    const [blogs, setBlogs] = useState(blogData);
    console.log(blogs);

    //condition for limited text show in body
    // const truncateString = (str, num)=>{
    //     if(str.length > num){
    //         return str.slice(0, num)+ "..."
    //     }else{
    //         return str;
    //     }
    // }

    return (
        <div className='Blogs m-4 p-1'>
                <h2 className='text-center mt-3 topicHeader'>What's <span className='text-success'>new</span> ?</h2>
                <hr  className='w-25 mx-auto '/>
            <section>
                {
                    blogs.map((blog) => {
                        const { id, title, desc } = blog
                        return <article className="card shadow border-0 p-3" key={id}>
                            <div className="card-body mt-">
                                <h4 className="topicHeader">{title}</h4>
                                <p className="cardDesc">{desc.length < 400 ? desc : desc.slice(0, 400)}</p>
                                <Link to={title} state={{ id, title, desc }} className="cardFooter">Learn More...</Link>
                            </div>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;