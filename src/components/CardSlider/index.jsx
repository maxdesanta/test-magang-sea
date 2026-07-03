import './style.css'
import SliderIcon from '../../assets/icon-slider.svg'

export default function CardSlider() {
    return (
        <div className="card-slider">
            <div className="title-card-slider">
                <h1>Petualangan Edukatif bersama Malang Mbois City Tour!</h1>
                <p>Petualangan Edukatif bersama Malang Mbois City Tour!</p>
            </div>
            <div className="image-card-slider">
                <img src={SliderIcon} alt='slider-card'/>
            </div>
        </div>
    )
}
