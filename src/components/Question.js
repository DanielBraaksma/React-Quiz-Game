// import React from "react"
// import Logo from "../images/logo.png"
import he from "he";

export default function Question(props) {
    // console.log(props)
    return (
        <div className="question-container">
            <h4 className="question--title">{he.decode(props.value.question)}</h4>
            <div className="question-options">
                <p className="option">option 1</p>
                <p className="option">option 2</p>
                <p className="option">option 3</p>
                <p className="option">option 4</p>
            </div>
            <hr></hr>
        </div>
    )
}
