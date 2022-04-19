import he from "he";

export default function Options(props) {
    const styles = {
        backgroundColor: "none"
    }

    //how the options will be rendered initially
    if (props.gameStatus === "in-progress") {
        if (props.option === props.selectedAnswer) { styles.backgroundColor = "lightblue" }
        else { styles.backgroundColor = "transparent" }
    }

    //show correct/wrong answeres upon scoring
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

    return (
        <p className="option"
            style={styles}
            //use the unique question to select the correct option:
            onClick={() => props.select(props.option, props.gameStatus, props.question)}
            >{he.decode(props.option)}
        </p>
    )

}
