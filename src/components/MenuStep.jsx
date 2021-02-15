import { useEffect, useState } from "react";

const MenuStep = (props) => {
    const step = props.step;
    const id = props.itemId;

    const [color, setColor] = useState('');

    useEffect(() => {
        setBgColor();
    });

    const setBgColor = () => {
        if (step === id)
            setColor('#32cd32');
        else if (id < step)
            setColor('#008b00');
    }

    return (
        <div className="header__tabs-item" style={{ backgroundColor: `${color}` }}>{props.item}</div>
    );
}

export default MenuStep;