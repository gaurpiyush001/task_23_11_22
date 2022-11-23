import classes from './AnswerType.module.css';
import { useRef, useState } from 'react';

const AnswerType = (props) => {

    const inputAnswerTypeRef = useRef();
    const isSaved = props.isSaved;

    const [anstype, setAnswerType] = useState();


    const setAnswerFun = (e) => {
        setAnswerType(e.target.value);
        props.settype(e.target.value);
    }

    return (
        <div className={classes.answertype}>
            <label htmlFor="answertype">AnswerType:</label>
                <select className={classes.select} name="answertype" id="answertype" onChange={setAnswerFun}>
                    <option value="single">single</option>
                    <option value="multiple">multiple</option>
                </select>
        </div>

    )
};

export default AnswerType;