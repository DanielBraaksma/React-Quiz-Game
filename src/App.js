import React from "react"
import Question from "./components/Question"
import he from "he";

export default function App() {
    const [callApi, setCallApi] = React.useState(false)  // track state to control API useEffect
    const [gameStatus, setGameStatus] = React.useState("welcome") //for conditional rendering
    const [questions, setQuestions] = React.useState("")
    let questionElements;

    React.useEffect(() => { //handle API calls and reformats the data
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => {
                let resArray = data.results;
                setQuestions(resArray.map(q => {
                    return {
                        question: q.question,
                        correct: q.correct_answer,
                        options: [q.correct_answer, ...q.incorrect_answers],
                        selected: false
                    }
                }))

            })
        console.log("questions set")

    }, [callApi])

   if (questions) {
    questionElements = questions.map(ques=><Question value={ques} />)
   }


    return (
        <div className="main-container">
            {gameStatus === "welcome" &&
                <main>
                    <div className="welcome">
                        <h1 className="title">Quiz Me</h1>
                        <h3 className="subtitle">Test your knowledge</h3>
                        <button className="start-btn" onClick={() => setGameStatus("in-progress")}>Start</button>
                    </div>
                </main>
            }
            {gameStatus === "in-progress" &&
                <main>
                    {questionElements}
                    <button className="score-btn" onClick={() => console.log("clicked")}>Click me</button>
                </main>
            }
        </div>
    )
}
