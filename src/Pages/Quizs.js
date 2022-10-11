import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Quizs = () => {
    const topicDetails = useLoaderData();
    const {total, id, name, logo, questions} = topicDetails.data;
    console.log(topicDetails.data);
    return (
        <div>
        <section>
                {
                 questions.map((question)=>{
                    return <div key={question.id}>
                        <p>{question.question}</p>
                        <p>{question.options}</p>
                        <p>{question.correctAnswer}</p>
                    </div>
                 })   
                }
                </section>          
        </div>
    );
};

export default Quizs;