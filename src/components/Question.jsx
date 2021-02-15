import unknown from '../images/unknown.jpg'

const Question = (props) => {
    let question = props.question;
    const isRight = props.isRight
    return (
        <section className="question">
            <div className="question__bird">
                <img src={isRight ? question.image : unknown} alt="" />
            </div>
            <div className="question-desc">
                <div className="question-desc__bird-name">
                    {isRight
                        ? props.question.name
                        : '*****'
                    }
                </div>
                <hr />
                <audio controls src={question.audio} />
            </div>
        </section>
    );
}

export default Question;