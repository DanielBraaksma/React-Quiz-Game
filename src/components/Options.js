import he from "he";

export default function Options (props){
    // console.log(props.gameStatus)

    const styles = {
        backgroundColor: "none"
    }

    if (props.gameStatus === "in-progress"){
        if (props.option === props.selectedAnswer){styles.backgroundColor = "lightblue"}
        else {styles.backgroundColor = "transparent"}
    }


    if (props.gameStatus === "scored"){
        if (props.option === props.correct) {
            styles.backgroundColor = "green"
        } if (props.option === props.selectedAnswer && props.option !== props.correct){
            styles.backgroundColor = "red"
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
        <p className="option" style={styles} onClick={()=>props.select(props.option, props.gameStatus)}>{he.decode(props.option)}</p>
    )

}
