// import React from "react"
// import Logo from "../images/logo.png"
import Options from "./Options"
import he from "he";

export default function Question(props) {

console.log(props.value)

    //implicit return jsx
    // let options = (props.value.options).map(option=>(<p className="option" style={{backgroundColor: "blue"}}>{option}</p>))

    let options = (props.value.options).map(option=>{
        return(
            <p className="option" style={{backgroundColor: "blue"}}>{option}</p>
        )
    })

    function selectOption(){
        console.log("selected")
    }

    return (
        <div className="question-container">
            <h4 className="question--title">{he.decode(props.value.question)}</h4>
            <div className="question-options">
                {options}
            </div>
            <hr></hr>
        </div>
    )
}


// question: q.question,
// correct: q.correct_answer,
// options: [q.correct_answer, ...q.incorrect_answers],
// selected: false
