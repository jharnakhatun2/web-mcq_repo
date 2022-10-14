import { FaList } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import '../App.css';




const Quizs = () => {
    const topicDetails = useLoaderData();
    const { total, id, name, questions } = topicDetails.data;

    // toast function for answer
    const correctAnswerMessage = () => {
        toast.success('Your Answer is Correct !', {
            position: toast.POSITION.BOTTOM_LEFT,
            className: 'toast-message'
        });
    }
    const wrongAnswerMessage = () => {
        toast.error('Your Answer is incorrect !', {
            position: toast.POSITION.BOTTOM_LEFT,
            className: 'blackBackground',
        });
    }
    const correctAnswerShow = (correctAnswer) => {
        toast.success(<h5>{correctAnswer}</h5>, {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

    // event handler functions
    const handleAnswer = (option, corrAns) => {
        if (option === corrAns) {
            correctAnswerMessage();
        }
        else {
            wrongAnswerMessage();
        }
    }

    // event handler functions show ans
    const handleShowAnswer = (correctAnswer) => {
            correctAnswerShow(correctAnswer);

    }
    
    return (
        <div className="quiz-container">
            {/* Quiz Container */}
            <div className="quiz-counter">
                <div className="quiz-head d-flex justify-content-around align-items-center mt-5">
                    <h2 className="topicHeader text-center">Quiz of - <span className="text-success text-bold">{name}</span></h2>
                    <h4 className="topicHeader"><FaList /> <span className="text-success fs-2">{total}</span>  questions</h4>
                </div>
                <hr />
                <div className="m-5">
                    {
                        questions.map((questionn) => {
                            const { id, question, options, correctAnswer } = questionn;
                            return <div key={id} className='m-4'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>Q . {question.slice(3, -4)}</h5><button className="btn btn-secondary" onClick={()=>handleShowAnswer(correctAnswer)}><BiShow /></button>

                                    
                                    </div>
                                <form>
                                    {
                                        options.map((option) => {
                                            return <div>
                                                <label>
                                                    <input type='radio' name='option' value={option}
                                                        onClick={() => handleAnswer(option, correctAnswer)}
                                                    /> {option}</label>
                                                    
                                            </div>

                                        })
                                    }
                                </form>
                                    
                            </div>
                        })
                    }
                    <ToastContainer toastStyle={{ backgroundColor: "#000000", color: "#fff" }} />
                </div>

            </div>
        </div>
    );
};

export default Quizs;