import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../data';

const Blog = () => {
    const {title} = useParams();
    const [bodyData, setBodyData] = useState('');

    useEffect(()=>{
        const bodyBlogsData = blogData.filter((blog)=>blog.title=== title);
        setBodyData(bodyBlogsData[0].body);   
    },[]);
    return (
        <div className="single-blog">
            <h2>{title}</h2>
            <p>{bodyData.slice(0,600)}</p>
            <p>{bodyData.slice(601,1500)}</p>
            <p>{bodyData.slice(1501,5800)}</p>
        </div>
        
    );
};

export default Blog;