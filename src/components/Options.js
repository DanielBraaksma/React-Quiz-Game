export default function Options (props){
    console.log(props)
    return (
        <p className="option" style={{backgroundColor: "blue"}}>{props.choice}</p>
    )

}
