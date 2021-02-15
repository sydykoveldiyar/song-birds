import birdsCategories from "../birdsCategories";
import MenuStep from './MenuStep';

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
                    {birdsCategories.map(item => (
                        <MenuStep key={item} step={step} itemId = {birdsCategories.indexOf(item) + 1} item={item}/>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header