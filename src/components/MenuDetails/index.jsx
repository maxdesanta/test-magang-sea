import homeIcon from '../../assets/bi_house.svg'
import arrowRightIcon from '../../assets/bi_chevron-right.svg'
import './style.css'

export default function MenuDetails({ titleCategory = 'Politik', source = 'Beranda' }) {
    const categoryString = Array.isArray(titleCategory) 
        ? titleCategory[0] 
        : (typeof titleCategory === 'string' ? titleCategory : 'Politik');
    const cleanSource = source ? source.replace("Berita ", "") : "Beranda";

    if (cleanSource !== "Beranda" && cleanSource !== "Terbaru") {
        return (
            <div className='menu-details'>
                <img src={homeIcon} alt="icon-home" />
                <p>{categoryString}</p>
                <img src={arrowRightIcon} alt="arrow-right" />
                <p>Detail</p>
            </div>
        );
    }

    return (
        <div className='menu-details'>
            <img src={homeIcon} alt="icon-home" />
            <p>{cleanSource}</p>
            <img src={arrowRightIcon} alt="arrow-right" />
            <p>{categoryString}</p>
            <img src={arrowRightIcon} alt="arrow-right" />
            <p>Detail</p>
        </div>
    )
}
