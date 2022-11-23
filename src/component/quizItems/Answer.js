import classes from './Answer.module.css';
import { useRef } from 'react';

const Answer = (props) => {

    const inputAnswerRef = useRef();
    // console.log('props please in Answrer', props);
    const isSaved = props.isSaved;

    return (
        <div className={classes.answer}>
            <label htmlFor="answer">Answer:</label>
            <input disabled={isSaved ? true : false} ref={inputAnswerRef} name="answer"></input>
        </div>

    )
};

export default Answer;