import { BsArrowRight } from "react-icons/bs";
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import img from './background.png';




const Home = () => {

    const quizData = useLoaderData();
    console.log(quizData);

    return (
        <div>
            <Container className="headerStyle">
                <div className="headingText">
                    <h1 className="headingSize">Play funny learning by <span className="hightlightColor">Quiz</span>!</h1>
                    <p className="paragraphText">If learning is fun, we learn better.  Quiz can be a few minutes of relaxation from our hours of marking. So, if we enjoy it, why wouldn’t web developer, we learn also welcome a little bit of relaxing fun whilst working? Start to identify gaps in your knowledge. This is the Ideal System of revision. </p>
                    <Link to='/blogs' className="cardFooter">Learn More <BsArrowRight /> </Link>
                </div>
                <img className="mw-100" src={img} alt="" />
            </Container>
            <section>
                {
                    quizData.data.map((quiz) => {
                        const { id, name, logo, total } = quiz;
                        return <article className="card-style" key={id}>
                            <div className="imageDiv">
                                <img className="img-fluid" src={logo} alt="" />
                            </div>
                            <div className="cardBottom">
                                <Link to={`/topics/${id}`} className="cardFooter">{name}</Link>
                                <button className="cardFooter"><Link to={`/quiz/${id}`}>Start Practice</Link></button>
                            </div>
                        </article>
                    })
                }
            </section>

        </div>
    );
};

export default Home;