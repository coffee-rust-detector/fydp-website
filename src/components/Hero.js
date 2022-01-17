import './Hero.css';

function Hero(props) {
    return (
        <div className={props.cName}>
            <div className="hero-text">
                {props.text && <h1>{props.text}</h1>}
                {props.button_text && <button>{props.button_text}</button>}
            </div>
        </div>
    )
}

export default Hero
