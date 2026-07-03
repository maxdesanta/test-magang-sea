import homeIcon from '../../assets/bi_house.svg'
import arrowRightIcon from '../../assets/bi_chevron-right.svg'
import './style.css'

export default function MenuDetails() {
    return (
        <div className='menu-details'>
            <img src={homeIcon} alt="icon-home" />
            <p>Beranda</p>
            <img src={arrowRightIcon} alt="arrow-right" />
            <p>Nasional</p>
            <img src={arrowRightIcon} alt="arrow-right" />
            <p>Detail</p>
        </div>
    )
}
