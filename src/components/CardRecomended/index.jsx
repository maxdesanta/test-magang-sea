import './style.css'
import DateWritter from '../DateWritter'
import { Link } from 'react-router-dom'

export default function CardRecomended({title, image, date, category = "Politik", fullData, id}) {
    return (
        <div className='card-recomended'>
            <Link to={`/detail/${id}`} state={{ articleData: fullData }} className='news-card-link'>
                <div className="image-card">
                    <img src={image == null || image == "" ? "https://taawon.com/images_default/default.jpg" : image} alt={title} />
                </div>
                <div className='text-card'>
                    <h4>{title}</h4>
                    <DateWritter date={date} category={category} />
                </div>
            </Link>
        </div>
    )
}
