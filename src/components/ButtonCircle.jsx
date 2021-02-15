import { useEffect, useState } from "react";
import success from "../audios/ff.mp3";
import error from "../audios/error.mp3"

const sucessAudio = new Audio(success);
const errorAudio = new Audio(error);

const ButtonCircle = (props) => {

    const [color, setColor] = useState('');
    useEffect(() => {
        setBgColor();
    });
    const setBgColor = () => {
        if(props.selected.isChecked === true && props.question.id === props.selected.id){
            setColor('#32cd32');
            sucessAudio.play()
        }
        else if(props.selected.isChecked === true && props.question.id !== props.selected.id){
            setColor('red');
            errorAudio.play();
        }
        else if(props.selected.isChecked === false)
            setColor('#9b9b9b');
    }

    return (
        <div className="answer__btn-circle" style={{backgroundColor: `${color}`}}>
        </div>
    );
}

export default ButtonCircle;