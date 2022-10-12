import { BsArrowRight } from "react-icons/bs";
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import img from './profile.png';




const Home = () => {

    const quizData = useLoaderData();
    console.log(quizData);

    return (
        <div>
            <Container className="headerStyle">
                {/* Quiz Search Area */}
                <div className="search-topics shadow-sm">
                    <h1 className="topicHeader">What will you teach today?</h1>
                    <input className="search" type="text" placeholder="Search for quizzes on bellow topics" />
                </div>
                {/* Quiz Profile Part */}
                <div className="profile shadow-sm text-center">
                    <img className="profile-img" src={img} alt="" />
                    <h5>Create an account</h5>
                    <div className="sign-part">
                        <a className="mx-2 text-decoration-none" href="#">Sign Up</a>
                        <a className="mx-2 text-decoration-none" href="#">Sign In</a>
                    </div>
                </div>
            </Container>
            <h2 className="section-header">Choice By Topics</h2>
            <section>
                {
                    quizData.data.map((quiz) => {
                        const { id, name, logo, total } = quiz;
                        return <article  key={id}>
                            <div className="card border-0 shadow-lg">
                                <img className="img-fluid bg-dark " style={{height:'303px'}} src={logo} alt="" />
                            
                            <div className="card-body  d-flex justify-content-between align-items-center">
                                <Link to={`/topics/${id}`} className="cardFooter text-decoration-none">{name}</Link>
                                <button type="button" className="btn btn-success"><Link className ="text-white text-decoration-none" to={`/quiz/${id}`}>Start Quiz</Link></button>
                            </div>
                            </div>
                        </article>
                    })
                }
            </section>

        </div>
    );
};

export default Home;