import React from "react"
import Question from "./components/Question"
import Data from "./data"
import he from "he";

export default function App() {
    const [callApi, setCallApi] = React.useState(false)  // track state to control API useEffect
    const [gameStatus, setGameStatus] = React.useState("welcome") //for conditional rendering
    const [questions, setQuestions] = React.useState("")
    const [options, setOptions] = React.useState([])
    const [score, setScore] = React.useState(0);
    let questionElements;

    // console.log("render,", gameStatus, questions)

    // React.useEffect(() => { //handle API calls and reformats the data
    //     fetch("https://opentdb.com/api.php?amount=5")
    //         .then(res => res.json())
    //         .then(data => {
    //             let resArray = data.results;
    //             // let optionsObjArr = [];

    React.useEffect(()=>{
    let resArray = Data.results;

                setQuestions(resArray.map((q, i) => {
                    let optionsArr = [q.correct_answer, ...q.incorrect_answers].sort();

                    // for (let answer of optionsArr){
                    //     optionsObjArr.push({
                    //         text: answer,
                    //         isSelected : false})
                    // }
                    return {
                        question: q.question,
                        correct: q.correct_answer,
                        options: optionsArr,
                        selectedAnswer: "",
                        select: selectOption
                    }
                }))
    }, [])



   function selectOption (option){
    console.log(option)
       setQuestions (prevQuestions=>prevQuestions.map(q=>{
           if (q.selectedAnswer === option){return {...q, selectedAnswer: ""}} //if we already selected the same one deselect it.
           if(q.options.includes(option)){
            return {...q, selectedAnswer: option}
           } else {
               return {...q}
           }
       }))
   }

   function scoreQuiz () {
        for (let q of questions){
            if (!q.selectedAnswer){
             return alert("Please make a selection for each question")
            }
        }
        console.log("all selections  have been made")

        let score = 0;
        for (let q of questions){
            if (q.selectedAnswer === q.correct){
                score++;
             console.log("you chose correct")
            } else {console.log("wrong choice")}
        }
        setGameStatus("scored")
        setScore(score);
   }

//    console.log(questions)

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
                    <button className="score-btn" onClick={scoreQuiz}>Score Quiz</button>
                </main>
            }
            {gameStatus === "scored" &&
                <main>
                    {questionElements}
                    <div className="footer-container">
                        <p className="score">You scored {score}/{questions.length} correct answers</p>
                        <button className="score-btn" onClick={()=>{setGameStatus("welcome")}}>Play Again</button>
                    </div>
                </main>
            }
        </div>
    )
}
