import birdsData from '../birdsData';

const Next = (props) => {
    const updateStep = () => {
        props.setStep(props.currentStep + 1);
        props.setIsRight(false);
        props.setAnswer({});
        birdsData.forEach(bd => bd.forEach(b => b.isChecked = false))
    }

    return (
        <section className="next">
            <button className="next-btn" onClick={updateStep} disabled={!props.isRight} style={{ backgroundColor: `${props.isRight ? '#008b00' : '#9b9b9b'}` }}>
                Следующий вопрос
                </button>
        </section>
    );
}

export default Next;