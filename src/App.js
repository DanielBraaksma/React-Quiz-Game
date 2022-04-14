import React from "react"
import Question from "./components/Question"

export default function App() {
    const [gameStatus, setGameStatus] = React.useState("welcome")

    function startGame() {
        setGameStatus("in-progress")
        console.log("game started")
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
                <Question />
                
            }


        </main>
    )
}


// {gameStatus === "scored" &&
//                 <div className="quiz-container">
//                     <p>quiz has started</p>
//                 </div>
//             }
