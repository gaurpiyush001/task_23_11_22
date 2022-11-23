import classes from './Wrapper.module.css';
import QuizWrapper from '../QuizWrapper/QuizWrapper';
import { useState } from 'react';

const Wrapper = () => {


    const [isVisisble, setVisible] = useState(false);

    const addQuizHandler = () => {
        setVisible(true);
    }

    return(
        <div className={classes.wrap}>
            <button onClick={addQuizHandler} className={classes.btn}>Add A Quiz</button>
            { isVisisble && <QuizWrapper />}
        </div>
    )
}

export default Wrapper;