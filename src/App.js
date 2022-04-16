import React from "react"
import Question from "./components/Question"
import Data from "./data"
import he from "he";

export default function App() {
    const [callApi, setCallApi] = React.useState(false)  // track state to control API useEffect
    const [gameStatus, setGameStatus] = React.useState("welcome") //for conditional rendering
    const [questions, setQuestions] = React.useState("")
    const [options, setOptions] = React.useState([])
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
           if(q.options.includes(option)){
            return {...q, selectedAnswer: option}
           } else {
               return {...q}
           }
       }))
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
                    <button className="score-btn" onClick={() => console.log("clicked")}>Click me</button>
                </main>
            }
        </div>
    )
}
