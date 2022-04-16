import he from "he";

export default function Options (props){
console.log(props.option === props.selectedAnswer)
    const styles = {
        backgroundColor: "none"
    }
    if (props.option === props.selectedAnswer){styles.backgroundColor = "lightblue"}
    else {styles.backgroundColor = "transparent"}

    return (
        <p className="option" style={styles} onClick={()=>props.select(props.option)}>{he.decode(props.option)}</p>
    )

}
