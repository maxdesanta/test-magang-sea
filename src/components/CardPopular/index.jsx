import DateWritter from '../DateWritter'
import './style.css'

export default function CardPopular() {
    return (
        <div class="news-card">
            <div class="image-container">
                <div class="badge-number">
                    <p>1</p>
                </div>
                <img src="https://images.unsplash.com/photo-1566566716921-b50e82140547?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Berita" class="news-image" />
            </div>

            <div class="content-container">
                <h4 class="news-title">Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</h4>
                <DateWritter  />
            </div>
        </div>
    )
    }
