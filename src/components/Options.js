import he from "he";

export default function Options(props) {
    // console.log(props.gameStatus)

    const styles = {
        backgroundColor: "none"
    }

    if (props.gameStatus === "in-progress") {
        if (props.option === props.selectedAnswer) { styles.backgroundColor = "lightblue" }
        else { styles.backgroundColor = "transparent" }
    }


    if (props.gameStatus === "scored") {
        if (props.option === props.correct) {
            styles.backgroundColor = "lightgreen";
            styles.border = "none"

        } else if (props.option === props.selectedAnswer && props.option !== props.correct) {
            styles.backgroundColor = "#F8BCBC"
            styles.border = "none"
        }

        else {
            styles.backgroundColor = "transparent";
            styles.color = "#4D5B9E"
            styles.border = "1px solid #4D5B9E"
        }

    }

    // if (props.gameStatus=== "scored"){
    //     if (props.option === props.correct){
    //         styles.backgroundColor = "green"
    //     } if (props.selectedAnswer !== props.correct) {
    //         styles.backgroundColor ="red"
    //     }else {
    //     styles.backgroundColor = "transparent"
    //     }
    // }



    return (
        <p className="option" style={styles} onClick={() => props.select(props.option, props.gameStatus, props.question)}>{he.decode(props.option)}</p>
    )

}
