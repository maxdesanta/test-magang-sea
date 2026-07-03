import "./style.css";
import iconDate from '../../assets/calendar-event.svg';

export default function SlideCard() {
    return (
        <div className="slide-card">
            <div className="slide-text">
                <h3>Headline</h3>
                <div className="slide-group-title-news">
                    <h1>
                        Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi
                    </h1>
                    <p>
                        Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas
                        Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila
                        lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
                    </p>
                    <div className="date-group-slide-text">
                        <img src={iconDate} alt="icon-date" />
                        <p>22 Januari 2024</p>
                    </div>
                </div>
                <div className="link-detail-group">
                    <a href="#">Baca Selengkapnya ↗ </a>
                </div>
            </div>
            <div className="slide-img">
                <img src="https://images.unsplash.com/photo-1602674809970-89073c530b0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide-news" width={600} />
            </div>
        </div>
    );
}
