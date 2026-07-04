import './style.css'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'

export default function SlideButtom({current, total, onNext, onPrev}) {
    return (
        <div className='slide-button'>
            <img src={arrowLeftIcon} alt="arrow-left" onClick={onPrev} style={{cursor: 'pointer'}} />
            <p>{current}</p>
            <p>dari</p>
            <p>{total}</p>
            <img src={arrowRightIcon} alt="arrow-right" onClick={onNext} style={{cursor: 'pointer'}} />
        </div>
    )
}
