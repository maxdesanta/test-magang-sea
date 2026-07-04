import DateWritter from "../../components/DateWritter";
import MenuDetails from "../../components/menuDetails";
import TitlePages from "../../components/TitlePages";
import './style.css'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'
import CardPopular from "../../components/CardPopular";
import CardRecomended from "../../components/CardRecomended";
import { useLocation, useNavigate } from "react-router-dom";
import { topNewsApi } from "../../api/topNewsApi";
import { useEffect, useState } from "react";
import { todayNewsApi } from "../../api/todayNewsApi";


export default function Details() {
    const location = useLocation();
    const navigate = useNavigate();
    const [topNews, setTopNews] = useState();
    const [relatedNews, setRelatedNews] = useState([]);
    const article = location.state?.articleData;
    const rawCategory = article?.categories;
    const displayCategory = Array.isArray(rawCategory) ? rawCategory[0] : (rawCategory || "News");
    const source = article?.sourcePage || "Beranda";

    const getDataTopNews = async () => {
        try {
            const response = await topNewsApi();
            setTopNews(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSeeAll = () => {
        if (source === "Beranda" || source === "Terbaru") {
            navigate('/terbaru');
        } else {
            // Mengarah ke route kategori tertentu (dibuat lowercase, misal: /nasional atau /politik)
            navigate(`/${source.toLowerCase()}`);
        }
    };

    const fetchRelatedNews = async () => {
        try {
            const response = await todayNewsApi(); 
            const clearCurrentArticle = response.filter(item => item.link !== article?.link);

            let filtered = clearCurrentArticle.filter(item => {
                const relatedCategory = Array.isArray(item.categories) ? item.categories[0] : item.categories;
                return relatedCategory?.toLowerCase() === displayCategory?.toLowerCase();
            });

            if (filtered.length === 0) {
                filtered = clearCurrentArticle;
            }

            const shuffled = [...filtered].sort(() => 0.5 - Math.random());
            
            setRelatedNews(shuffled.slice(0, 4));
        } catch (error) {
            console.log("Gagal memuat berita terkait:", error.message);
        }
    };

    useEffect(() => {
        fetchRelatedNews();
        getDataTopNews();

        return () => setRelatedNews([]);
    }, [article?.link, displayCategory]);
    return (
        <main>
            <MenuDetails titleCategory={displayCategory} source={source} />
            <div className="details-main">
                <div className="details-article">
                    <div className="details-article-title">
                        <h1>{article.title}</h1>
                        <DateWritter date={article.isoDate} category={article?.categories} />
                    </div>
                    <div className="details-article-img">
                        <img src={typeof article?.image === 'object' ? article?.image?.small : article?.image} alt="image-details" />
                        <p className="details-article-caption">{article.link}</p>
                    </div>
                    <div className="details-article-content">
                        <p>
                            {article?.description || article?.contentSnippet}
                        </p>
                    </div>
                    <div className="details-article-comment">
                        <TitlePages title='Komentar' />
                        <div className="comment-group-input">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            
                            <div className="comment-form">
                                <div className="comment-input">
                                    <textarea placeholder="Tulis komentar" cols={100} rows={10}></textarea>  
                                </div>
                                <p>0 / 50</p>
                                <button type="submit" className="btn-comment" onClick={handleSeeAll}>Kirim</button>
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
                        {relatedNews.map((item, index) => {
                            const relatedCategory = Array.isArray(item.categories) ? item.categories[0] : (item.categories || "News");
                            
                            // Buat data tiruan baru untuk dioper ke halaman detail berikutnya saat diklik
                            const updatedRelatedItem = {
                                ...item,
                                categories: [relatedCategory],
                                sourcePage: source // Pertahankan halaman asal agar breadcrumb tetap konsisten
                            };

                            return (
                                <CardRecomended 
                                    key={index} 
                                    id={encodeURIComponent(item.link)} 
                                    title={item.title} 
                                    image={typeof item.image === 'object' ? item.image?.small : item.image} 
                                    date={item.isoDate} 
                                    category={relatedCategory} 
                                    fullData={updatedRelatedItem} 
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="popular-news">
                    <TitlePages title='Berita Terpopuler' />
                    <div className="sidebar-popular-list">
                        {topNews?.slice(0, 3).map((item, index) => {
                            return (
                                <div key={index} className="sidebar-card-wrapper">
                                    <CardPopular id={encodeURIComponent(item.link)} number={index + 1} image={item.image} title={item.title} date={item.isoDate} fullData={item} />
                                </div>
                            )
                        })}
                        </div>
                </div>
            </div>
        </main>
    )
}
