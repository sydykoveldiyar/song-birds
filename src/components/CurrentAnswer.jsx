const CurrentAnswer = (props) => {
    const answer = props.answer;

    return (
        <div className="current-answer">
            {Object.keys(answer).length !== 0
                ?
                <>
                    <div className="current-answer__content">
                        <div className="current-answer__img">
                            <img src={answer.image} alt="" />
                        </div>
                        <div className="current-answer__info">
                            <h2>{answer.name}</h2>
                            <hr/>
                            <h3>{answer.species}</h3>
                            <hr/>
                            <audio controls src={answer.audio}></audio>
                        </div>
                    </div>
                    <p className="current-answer__description">{answer.description}</p>
                </>
                : <div className="current-answer__empty">
                    Послушайте плеер. <br /> Выберите птицу из списка
                </div>
            }
        </div>
    );
}

export default CurrentAnswer;