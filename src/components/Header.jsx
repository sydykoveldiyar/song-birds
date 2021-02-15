const Header = (props) => {
    const step = props.step;
    
    return (
        <header className="header">
            <div className="header__top-part">
                <a href="#" className="header__logo">SongBird</a>
                <h5 className="header__score">Счет: {props.score}</h5>
            </div>
            <div className="header__bot-part">
                <div className="header__tabs">
                    <div className="header__tabs-item" style={{backgroundColor: `${step === 1 ? '#32cd32' : '#9b9b9b'}`}}>
                        Разминка
                    </div>
                    <div className="header__tabs-item" style={{backgroundColor: `${step === 2 ? '#32cd32' : '#9b9b9b'}`}}>
                        Воробьиные
                    </div>
                    <div className="header__tabs-item" style={{backgroundColor: `${step === 3 ? '#32cd32' : '#9b9b9b'}`}}>
                        Лесные
                    </div>
                    <div className="header__tabs-item" style={{backgroundColor: `${step === 4 ? '#32cd32' : '#9b9b9b'}`}}>
                        Певчие
                    </div>
                    <div className="header__tabs-item" style={{backgroundColor: `${step === 5 ? '#32cd32' : '#9b9b9b'}`}}>
                        Хищныe
                    </div>
                    <div className="header__tabs-item" style={{backgroundColor: `${step === 6 ? '#32cd32' : '#9b9b9b'}`}}>
                        Морские
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header