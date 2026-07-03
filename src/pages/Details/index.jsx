import DateWritter from "../../components/DateWritter";
import MenuDetails from "../../components/menuDetails";
import TitlePages from "../../components/TitlePages";
import './style.css'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'
import CardPopular from "../../components/CardPopular";
import CardRecomended from "../../components/CardRecomended";


export default function Details() {
    return (
        <main>
            <MenuDetails />
            <div className="details-main">
                <div className="details-article">
                    <div className="details-article-title">
                        <h1>Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo</h1>
                        <DateWritter />
                    </div>
                    <div className="details-article-img">
                        <img src="https://images.unsplash.com/photo-1602674809970-89073c530b0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-details" />
                        <p className="details-article-caption">Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah kandang. (CNN Indonesia/Adhi Wicaksono)</p>
                    </div>
                    <div className="details-article-content">
                        <p>Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas  Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila  lolos ke putaran ketiga Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan Stadion GBK yang jadi markas Indonesia  dalam babak kedua Kualifikasi Piala Dunia 2026 kerap bermasalah. Pada pertandingan kandang pertama melawan Vietnam, Maret lalu, rumput  GBK rusak parah. PPKGBK selalu pengelola pun mendapat kritik deras.Acara-acara di luar  sepak bola itu kerap membuat kondisi rumput tidak sehat dan tidak  terlihat bagus saat pertandingan, khususnya laga Timnas Indonesia. Sampai saat melawan Irak, rumput GBK tidak terlihat sempurna meskipun  kondisinya lebih bagus dibanding lawan Vietnam. Opsi pindah kandang pun  muncul."Nanti kami akan  sampaikan [rencana pindah dari GBK]," ujar Sumardji saat ditanya  kemungkinan menggunakan stadion lain di putaran ketiga kualifikasi. Sumardji tidak membantah kondisi rumput GBK yang masih kurang bagus  dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK bisa lebih  memperhatikan kondisi rumput untuk pertandingan Skuad Garuda. "Kami sampai saat ini sudah telepon dengan pengelola GBK karena kondisi  rumput kemarin kurang bagus, kami memohon ke pihak GBK supaya  betul-betul disiapkan dan diperhatikan kondisi rumput," tutur Sumardji. "Kalau dilihat-lihat sepertinya kondisi rumput GBK kayaknya stres itu,  sehingga dengan kondisi itu akan memengaruhi, tadi saya telepon supaya  diperhatikan," kata Sumardji menambahkan.</p>
                    </div>
                    <div className="details-article-comment">
                        <TitlePages title='Komentar' />
                        <div className="comment-group-input">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            
                            <div className="comment-form">
                                <div className="comment-input">
                                    <textarea placeholder="Tulis komentar" cols={30} rows={10}></textarea>  
                                </div>
                                <p>0 / 50</p>
                                <button type="submit" className="btn-comment">Kirim</button>
                            </div>
                        </div>
                        <div className="comment-list">
                            <div className="comment-item">
                                <img 
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
                                alt="Avatar Ujang" 
                                className="comment-avatar"
                                />
                                <div className="comment-body">
                                <div className="comment-meta">
                                    <span className="comment-author">UJANG YUSMEIDI S.P., M.Agr.</span>
                                    <span className="comment-dot"></span>
                                    <span className="comment-date">28 Mar 2024 11:15</span>
                                </div>
                                <p className="comment-text">
                                    Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?
                                </p>
                                <button className="reply-btn">Balas</button>
                                </div>
                            </div>
                            <div className="comment-item reply">
                                <img 
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                                alt="Avatar Dina" 
                                className="comment-avatar small"
                                />
                                <div className="comment-body">
                                <div className="comment-meta">
                                    <span className="comment-author">DINA RIKHA RIYANAWATI, S.Pd</span>
                                    <span className="comment-dot"></span>
                                    <span className="comment-date">28 Mar 2024 11:15</span>
                                </div>
                                <p className="comment-text">
                                    saya mengunduh sertifikatnya kok juga belumbisa
                                </p>
                                <button className="reply-btn">Balas</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-pagination-container">
                            <div className="pagination-left">
                                <span className="pagination-text">Item per page</span>
                                <div className="select-wrapper">
                                <select defaultValue="5">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                </select>
                                </div>
                                <span className="pagination-text">of 200</span>
                            </div>
                            <div className="pagination-right">
                                <button className="arrow-btn" disabled>
                                    <img src={arrowLeftIcon} alt="arrow-left" />
                                </button>
                                
                                <button className="page-btn active">1</button>
                                <button className="page-btn">2</button>
                                
                                <button className="arrow-btn">
                                    <img src={arrowRightIcon} alt="arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="see-all-group">
                        <TitlePages title='Berita Terkait' />
                        <button className="see-all-btn">Lihat Semua</button>
                    </div>
                    <div className="container-popular-news">
                        <CardRecomended />
                        <CardRecomended />
                        <CardRecomended />
                        <CardRecomended />
                    </div>
                </div>
                <div className="popular-news">
                    <TitlePages title='Berita Terpopuler' />
                    <CardPopular />
                    <CardPopular />
                    <CardPopular />
                </div>
            </div>
        </main>
    )
}
