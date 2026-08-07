import './style.css'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'

export default function SlideButtom({current, total, onNext, onPrev}) {
    return (
        <div className='slide-button'>
            <button type="button" aria-label="Slide sebelumnya" onClick={onPrev}>
                <img src={arrowLeftIcon} alt="" />
            </button>
            <p>{current}</p>
            <p>dari</p>
            <p>{total}</p>
            <button type="button" aria-label="Slide berikutnya" onClick={onNext}>
                <img src={arrowRightIcon} alt="" />
            </button>
        </div>
    )
}
