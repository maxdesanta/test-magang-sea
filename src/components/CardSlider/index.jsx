import './style.css'
import SliderIcon from '../../assets/icon-slider.svg'

export default function CardSlider({ data }) {
    console.log(data);
    return (
        <div className="card-slider" style={{ backgroundColor: data.backgroundColor || '#ffffff', transition: 'background-color 0.5s ease' }}>
            <div className="title-card-slider">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
            <div className="image-card-slider">
                <img src={SliderIcon} alt='slider-card'/>
            </div>
        </div>
    )
}
