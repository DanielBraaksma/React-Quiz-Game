import Options from "./Options"
import he from "he";

export default function Question(props) {
    const {question, correct, options, selectedAnswer, select} = props.value

    //implicit return jsx
    // let options = (props.value.options).map(option=>(<p className="option" style={{backgroundColor: "blue"}}>{option}</p>))

    let optionsElements = (options).map(option=>{
        return(
            <Options question={question} option={option} selectedAnswer={selectedAnswer} correct={correct} select={select} gameStatus={props.gameStatus}/>
        )
    })

    return (
        <div className="question-container">
            <h4 className="question--title">{he.decode(question)}</h4>
            <div className="question-options">
                {optionsElements}
            </div>
            <hr></hr>
        </div>
    )
}
