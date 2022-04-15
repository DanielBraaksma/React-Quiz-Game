import React from "react"
import Question from "./components/Question"
import he from "he";

export default function App() {
    const [callApi, setCallApi] = React.useState(false)
    const [gameStatus, setGameStatus] = React.useState("welcome")
    const [questions, setQuestions] = React.useState("")
    let questionElements;

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
        console.log( "questions set")

    }, [callApi])

    console.log(questions)

    function startGame() {
        setGameStatus("in-progress")
        console.log("game started")
    }


    if (questions) {
        questionElements = questions.map(question => {
            return <Question value={question} />
        })
    }

    return (
        <main>
            {gameStatus === "welcome" &&
                <div className="welcome">
                    <h1 className="title">Quiz Me</h1>
                    <h3 className="subtitle">Test your knowledge</h3>
                    <button className="start-btn" onClick={startGame}>Start</button>
                </div>
            }
            {gameStatus === "in-progress" &&
                questionElements
            }

            {gameStatus === "in-progress" &&
            <button className="score-btn" onClick={()=>console.log("clicked")}>Click me</button>}
        </main>
    )
}


// {gameStatus === "scored" &&
//                 <div className="quiz-container">
//                     <p>quiz has started</p>
//                 </div>
//             }
