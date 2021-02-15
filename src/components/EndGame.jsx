import birdsData from "../birdsData";

const EndGame = (props) => {
    const endGame = () => {
        window.location.reload();
    }
    return (
        <div className="end-game">
            <div className="end-game__info">
                <h2 className="end-game__info-title">Игра окончена!</h2>
                <p className="end-game__info-desc">Вы прошли викторину и набрали {props.score} из 30 возможных баллов.</p>
            </div>
            <hr/>
            <button className="end-game__btn" onClick={endGame}>
                Попробовать еще раз!
            </button>
        </div>
    );
}

export default EndGame;