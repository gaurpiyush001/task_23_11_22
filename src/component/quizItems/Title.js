import { Fragment } from "react";
import classes from "./Title.module.css";
import { useRef } from "react";

const Title = (props) => {

    const inputTitleRef = useRef();

    // console.log(inputTitleRef);
    const isSaved = props.isSaved;

    return (
        <div className={classes.title}>
            <label htmlFor="title">Title:</label>
            <input disabled={isSaved ? true : false} ref={inputTitleRef} name="title"></input>
        </div>
    )

}

export default Title;