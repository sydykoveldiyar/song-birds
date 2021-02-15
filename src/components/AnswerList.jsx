import { useState } from "react";

const AnswerList = (props) => {
    const [selected, setSelected] = useState({});

    const giveAnswer = (item) => {
        props.setAnswer(item);
        setSelected(item);
    }

    return (
        <div className="answer-list">
            <ul>
                {props.answers.map(item => (
                    <li key={item.id}>
                        <button className="answer__btn" disabled={props.isRight} onClick={() => giveAnswer(item)}>
                            <div className="answer__btn-circle" style={{
                                backgroundColor:
                                    `${(selected.id === props.question.id
                                        && item.id === props.question.id)
                                        ? '#32cd32'
                                        : '#9b9b9b'}`
                            }}>
                            </div>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnswerList;