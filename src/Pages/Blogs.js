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
        <div className='Blogs'>
            
            <section>
                {
                    blogs.map((blog)=>{
                        const{id,title,desc} = blog
                        return <article className="card-style" key={id}>
                        <h4 className="cardTitle">{title}</h4>
                        <p className="cardDesc">{desc.length < 400 ? desc : desc.slice(0, 400)}</p>
						<Link to={title} state={{id,title,desc}} className="cardFooter">Learn More...</Link>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;