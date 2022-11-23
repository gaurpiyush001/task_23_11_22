import classes from './Options.module.css';
import { useRef, useState } from 'react';

const Options = (props) => {

    const inputOptionsRef = useRef();
    const isSaved = props.isSaved;

    const [isVisible, setVisible] = useState(true);

    const removeHandler = () => {
        setVisible(false);
    }

    const clickHandler = () =>{
        props.setAnswer(inputOptionsRef.current.value);
    }


    return (

        isVisible &&
            <div className={classes.option}>
                <label htmlFor="option">Options:
                <input disabled={isSaved ? true : false}  ref={inputOptionsRef} name="option" ></input>
                <input disabled={isSaved ? true : false} className={classes.check} type="checkbox" name="option" onChange={clickHandler}></input>
                </label>
                <button className={classes.remove} onClick={removeHandler}>remove</button>
            </div>

    )
};

export default Options;