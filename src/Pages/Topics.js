import React from 'react';
import { useLoaderData} from 'react-router-dom';

const Topics = () => {
    
    const totalQuestions = useLoaderData();
    console.log(totalQuestions);
    const {total, id, name, questions} = totalQuestions.data;
    return (
        <div className="m-5 p-4" key = {id}>
            <h3> Topics Name : <span className="text-success">{name}</span></h3>
            <h4 className="mb-4">Total Question : <span className="text-success">{total}</span></h4>
            {
                questions.map((question)=>{
                    return <div key={question.id}>
                        <ul><li>{question.question.slice(3, 100)}</li></ul>
                    </div>
                })
            }
            
        </div>
    );
};

export default Topics;