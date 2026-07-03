import './style.css'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'

export default function SlideButtom() {
    return (
        <div className='slide-button'>
            <img src={arrowLeftIcon} alt="arrow-left" />
            <p>1</p>
            <p>dari</p>
            <p>5</p>
            <img src={arrowRightIcon} alt="arrow-right" />
        </div>
    )
}
