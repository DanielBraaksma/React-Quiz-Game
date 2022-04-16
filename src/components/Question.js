// import React from "react"
// import Logo from "../images/logo.png"
import Options from "./Options"
import he from "he";

export default function Question(props) {
    const {question, correct, options, selectedAnswer, select} = props.value

    //implicit return jsx
    // let options = (props.value.options).map(option=>(<p className="option" style={{backgroundColor: "blue"}}>{option}</p>))

    let optionsElements = (options).map(option=>{
        return(
            <Options option={option} selectedAnswer={selectedAnswer} select={select}/>
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

// style={{styles}}
// text: answer,

// question: q.question,
//                         correct: q.correct_answer,
//                         options: optionsArr,
//                         selectedAnswer: "",
//                         select: selectOption
