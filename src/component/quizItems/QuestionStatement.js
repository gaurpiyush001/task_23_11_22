import classes from "./QuestionStatement.module.css";
import { useRef } from "react";

const QuestionStatement = (props) => {

    const inputQuestionStatementRef = useRef();
    const isSaved = props.isSaved;

    return (
        <div className={classes.statement}>
            <label htmlFor="statement">Question:</label>
            <input disabled={isSaved ? true : false}  ref={inputQuestionStatementRef} name="statement" ></input>
        </div>
    )

}

export default QuestionStatement;