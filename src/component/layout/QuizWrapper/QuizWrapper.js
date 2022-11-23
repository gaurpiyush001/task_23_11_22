import classes from './QuizWrapper.module.css';
import Title from './../../quizItems/Title';
import Options from './../../quizItems/Options';
import AnswerType from './../../quizItems/AnswerType';
import Answer from './../../quizItems/Answer';
import QuestionStatement from './../../quizItems/QuestionStatement';
import { useState } from 'react';
import QuestionWrapper from '../QuestionWrapper/QuestionWrapper';

const QuizWrapper = (props) => {

    //Iss quiz wrapper mein state bnegi jo ki question add kregi, ek button se click kre function call kro which will return me a component a quesion
    const [questionArray, addQuestionArray] = useState([]);

    const [isError, setError] = useState(false);

    const addQuestionHandler = () => {

        if(questionArray.length==4){
            setError(true);
            return;
        }

        addQuestionArray((prevState) => [...prevState, <QuestionWrapper key={prevState.length+1}/>])
    }

    return (
        <div className={classes.quizwrap}>
            <Title />
            <button onClick={addQuestionHandler} className={classes.btn}>Add Question</button>
            {isError && <p className={classes.error}>Not more than 4 options</p>}
            {
                questionArray.length != 0 && 
                (
                    questionArray.map(question => question)
                )
            }

            {/* <button onClick={}>Submit</button> */}

        </div>
    )


}

export default QuizWrapper;