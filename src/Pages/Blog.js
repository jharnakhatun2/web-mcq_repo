import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {blogData} from '../data';

const Blog = () => {
    const {title} = useParams();
    const location = useLocation();
    
    
    return (
        <div>
            <h4>{title}</h4>
            <p>{location.state.desc}</p>
            {/* <p>{location.state.desc.slice(0, 600)}</p>
            <p>{location.state.desc.slice(601, 1500)}</p> */}
        </div>
    );
};

export default Blog;