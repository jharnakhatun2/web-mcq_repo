import React from 'react';
import { useLoaderData} from 'react-router-dom';

const Topics = () => {
    
    const totalQuestions = useLoaderData();
    console.log(totalQuestions);
    const {total, id, name, questions} = totalQuestions.data;
    return (
        <div key = {id}>
            <h2>Name : {name}</h2>
            <h3>Totoal Question : {total}</h3>
            {
                questions.map((question)=>{
                    return <div key={question.id}>
                        <h3>{question.question}</h3>
                    </div>
                })
            }
            
        </div>
    );
};

export default Topics;