import ButtonCircle from './ButtonCircle';

const AnswerList = (props) => {
    const giveAnswer = (item) => {
        props.setAnswer(item);
        item.isChecked = true;
    }

    return (
        <div className="answer-list">
            <ul>
                {props.answers.map(item => (
                    <li key={item.id}>
                        <button className="answer__btn" disabled={props.isRight} onClick={() => giveAnswer(item)}>
                            <ButtonCircle selected={item} question={props.question}/>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnswerList;