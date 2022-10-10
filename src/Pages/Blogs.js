import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data';


const Blogs = () => {
    const [blogs, setBlogs] = useState(blogData);
    console.log(blogs);

    //condition for limited text show in body
    const truncateString = (str, num)=>{
        if(str.length > num){
            return str.slice(0, num)+ "..."
        }else{
            return str;
        }
    }

    return (
        <div className='Blogs'>
            
            <section>
                {
                    blogs.map((blog)=>{
                        const{id,title,body} = blog
                        return <article className="card-style" key={id}>
                        <h3 className="cardTitle">{title}</h3>
                        <p className="cardDesc">{truncateString(body, 300)}</p>
						<Link to={title} className="cardFooter">Learn More...</Link>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;