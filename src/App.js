import React from "react"
import Question from "./components/Question"
import Data from "./data" //used for testing purposes
import yellowblob from "./images/yellowblob.png"
import blueblob from "./images/blueblob.png"

export default function App() {
    const [callApi, setCallApi] = React.useState(false)  // track state to control API useEffect
    const [gameStatus, setGameStatus] = React.useState("welcome") //for conditional rendering
    const [questions, setQuestions] = React.useState("")
    const [score, setScore] = React.useState(0);
    let questionElements;


    React.useEffect(() => { //handle API calls and reformats the data
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => {
                let resArray = data.results;

                setQuestions(resArray.map((q, i) => {
                    let optionsArr = [q.correct_answer, ...q.incorrect_answers].sort();
                    return {
                        question: q.question,
                        correct: q.correct_answer,
                        options: optionsArr,
                        selectedAnswer: "",
                        select: selectOption
                    }
                }))
            })
    }, [callApi])

    // figured out, needed to pass gamestatus state up from grandchild component.

    function selectOption(option, gameStatus, question) {
        // logic for selecting each element
        if (gameStatus === "in-progress") {
            setQuestions(prevQuestions => prevQuestions.map(q => {
                if (q.question === question && q.selectedAnswer === option) { return { ...q, selectedAnswer: "" } } //&&q.selectedAnser
                if (q.question === question) {
                    return { ...q, selectedAnswer: option }
                } else {
                    return { ...q }
                }
            }))
        }
    }
    function scoreQuiz() {
        // make sure all selections made
        for (let q of questions) {
            if (!q.selectedAnswer) {
                return alert("Please make a selection for each question")
            }
        }

        //if so then proceed to score
        setGameStatus("scored")
        let score = 0;
        for (let q of questions) {
            if (q.selectedAnswer === q.correct) {
                score++;
            }
        }
        setScore(score);
    }

    if (questions) {
        questionElements = questions.map(ques => <Question key={ques.question} value={ques} gameStatus={gameStatus} />)
    }

    return (
        <div className="main-container">
            <img src={yellowblob} className="yellowblob"/>
            <img src={blueblob} className="blueblob"/>
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
                    <button className="score-btn" onClick={scoreQuiz}>Score Quiz</button>
                </main>
            }
            {gameStatus === "scored" &&
                <main>
                    {questionElements}
                    <div className="footer-container">
                        <p className="score">You scored {score}/{questions.length} correct answers</p>
                        <button className="score-btn" onClick={() => { setGameStatus("welcome"); setCallApi(prevApi => !prevApi) }}>Play Again</button>
                    </div>
                </main>
            }
        </div>
    )
}
