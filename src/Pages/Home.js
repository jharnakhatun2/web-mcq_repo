import { BsArrowRight } from "react-icons/bs";
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './background.png';



const Home = () => {
    return (
        <div>
        <Container className="headerStyle">
            <div className="headingText">
            <h1 className="headingSize">Play funny learning by <span className="hightlightColor">Quiz</span>!</h1>
            <p className="paragraphText">If learning is fun, we learn better.  Quiz can be a few minutes of relaxation from our hours of marking. So, if we enjoy it, why wouldn’t web developer, we learn also welcome a little bit of relaxing fun whilst working? Start to identify gaps in your knowledge. This is the Ideal System of revision. </p>
            <Link to='/blogs' className="cardFooter">Learn More <BsArrowRight/> </Link>
            </div>
            <img  className="mw-100" src={img} alt="" />
        </Container>
            
        </div>
    );
};

export default Home;