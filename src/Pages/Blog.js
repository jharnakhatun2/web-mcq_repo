import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {blogData} from '../data';

const Blog = () => {
    const {title} = useParams();
    const location = useLocation();
    
    
    return (
        <div className="w-75 mx-auto p-5 m-5">
            <h3 className="mb-4 topicHeader">{title}</h3>
            <p className="cardDesc">{location.state.desc}</p>
        </div>
    );
};

export default Blog;