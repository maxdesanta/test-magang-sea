import './style.css'
import SliderIcon from '../../assets/icon-slider.svg'

export default function CardSlider({ data }) {
    return (
        <div className="card-slider" style={{ backgroundColor: data?.backgroundColor || 'var(--color-white)' }}>
            <div className="title-card-slider">
                <h1>{data?.title}</h1>
                <p>{data?.description}</p>
            </div>
            <div className="image-card-slider">
                <img src={SliderIcon} alt='slider-card'/>
            </div>
        </div>
    )
}
