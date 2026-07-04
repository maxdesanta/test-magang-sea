import { Link } from 'react-router-dom'
import DateWritter from '../DateWritter'
import './style.css'

export default function CardPopular({image, title, number, id, date, fullData, category = "Politik"}) {
    return (
        <Link to={`/detail/${id}`} state={{ articleData: fullData }} className='news-card-link' style={{ textDecoration: 'none', color: 'inherit' }}>
            <div class="news-card">
                <div class="image-container">
                    <div class="badge-number">
                        <p>{number}</p>
                    </div>
                    <img src={image} alt="Berita" class="news-image" />
                </div>

                <div class="content-container">
                    <h4 class="news-title">{title}</h4>
                    <DateWritter date={date} category={category}  />
                </div>
            </div>
        </Link>
    )
    }
