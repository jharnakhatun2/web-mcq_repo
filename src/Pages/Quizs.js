import { FaAngellist } from "react-icons/fa";
import { BiHide, BiShow, IconName } from "react-icons/bi";
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../Pages/profile.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import M from 'materialize-css';



const Quizs = () => {
    const topicDetails = useLoaderData();
    const { total, id, name, logo, questions } = topicDetails.data;
    console.log(topicDetails.data);

    return (
        <div className="quiz-container">
            {/* Quiz Container */}
            <div className="quiz-counter">
                <h2 className="topicHeader text-center">Quiz of - <span className="text-success text-bold">{name}</span></h2>
                <div className="quiz-head d-flex justify-content-around align-items-center mt-5">
                        <h4 className="topicHeader"><FaAngellist /> <span className="text-success fs-2">{total}</span>  questions</h4>
                    <div className="show-button">
                        <button className="btn btn-success"><BiShow /> Show Answer</button>
                        <button className="btn btn-success"><BiHide /> Hide Answer</button>
                    </div>
                </div>
                {
                    questions.map((questionn) => {
                        const {options,id,question,correctAnswer} = questionn;
                        
                        // Toastify options
                        const notify = () => toast.success("Wow so easy!",{position:'bottom-center'});

                        const validation = (value)=>{
                            console.log(value); 
                                                      
                        }
                        const handleAnswer = (e)=>{
                            M.toast({
                                html:'Option Clicked'
                            }); 
                        }

                        return <div className="bg-white p-3 m-5 shadow" key={id}>
                            <h5 className="topicHeader">Q : {question.slice(3, -4)}</h5>
                            <div className="radio-option m-3">
                            {
                                options.map(option =><button className=" w-100 mx-auto m-1 rounded p-4  border-0"onClick={()=> validation(option)}><input onClick={handleAnswer} type="radio" /> {option}</button>)       
                            }  
                            
                            </div>
                            <ToastContainer/>
                        </div>
                    })
                }
            </div>
            {/* Contester Dashboard */}
            <div className="profile-bar text-center bg-white py-4 shadow">
                <img className='img-fluid w-50 ' src={img} alt="" />
                <h5 className="topicHeader">Name : Contester</h5>
                <h3 className="topicHeader my-5">Your result : <span className="text-success">100</span></h3>
            </div>
        </div>
    );
};

export default Quizs;