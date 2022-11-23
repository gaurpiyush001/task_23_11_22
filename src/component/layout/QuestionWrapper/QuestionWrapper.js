import QuestionStatement from "../../quizItems/QuestionStatement";
import Options from "../../quizItems/Options";
import AnswerType from "../../quizItems/AnswerType";
import Answer from "../../quizItems/Answer";
import classes from "./QuestionWrapper.module.css";
import { useState } from "react";

const QuestionWrapper = () => {


    const [isSaved, setSavedState] = useState(false);
    const [typeAns, setTypeAns] = useState('select');

    const saveBtnHandler = () => {
        setSavedState(prevState => !prevState);
    }

    const [finalAnswer, setFinalAnswer] = useState();

    const [optionsArray, setOptionArray] = useState([]);

    const setAnswer = (ans) => {
        setFinalAnswer(ans);
    }

    const typeHandler = (value) => {
        setTypeAns(value);
    }

    const addOptionHandler = () => {
        setOptionArray(prevState => [...prevState, <Options settype={typeHandler} setAnswer={setAnswer} isSaved={isSaved} key={optionsArray.length+1}/>])
    }


    return (
        <div className={classes.questionwrapper}>

            <AnswerType isSaved={isSaved}/>
            <QuestionStatement isSaved={isSaved}/>
            <button className={classes.optionBtn} onClick={addOptionHandler}>Add Options</button>
            {/* <Options isSaved={isSaved}/> */}
            {
                optionsArray.length !== 0 &&
                optionsArray.map(option => option)
            }

            {/* <Answer isSaved={isSaved}/> */}
            <div className={classes.buttons}> {!isSaved && <button onClick={saveBtnHandler} className={classes.saveBtn}>Save</button>} { isSaved && <button className={classes.saveBtn} onClick={saveBtnHandler}>Edit</button>} </div>
        </div>
    )

}

export default QuestionWrapper;