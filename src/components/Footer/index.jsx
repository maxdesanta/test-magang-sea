import './style.css'
import logoLight from '../../assets/logo-light.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import sendIcon from '../../assets/send.svg'

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-column brand-column">
                    <div className="footer-logo">
                        <img src={logoLight} alt="logo" width={60} />
                        <h2>Berita Kini</h2>
                    </div>
                    <p className="copyright">© 2023 Berita Kini. All Rights Reserved.</p>
                    
                    <div className="social-section">
                    <h3>Ikuti Kami</h3>
                    <div className="social-icons">
                        <a href="#youtube" className="social-icon">
                            <img src={youtube} alt="youtube" width={20} />
                        </a>
                        <a href="#instagram" className="social-icon">
                            <img src={instagram} alt="instagram" width={20} />
                        </a>
                        <a href="#facebook" className="social-icon">
                            <img src={facebook} alt="facebook" width={20} />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="footer-column links-column">
                    <h3>Telusuri</h3>
                    <ul>
                    <li><a href="#beranda">Beranda</a></li>
                    <li><a href="#kesehatan">Kesehatan</a></li>
                    <li><a href="#otomotif">Otomotif</a></li>
                    <li><a href="#politik">Politik</a></li>
                    <li><a href="#olahraga">Olahraga</a></li>
                    <li><a href="#nasional">Nasional</a></li>
                    <li><a href="#internasional">Internasional</a></li>
                    </ul>
                </div>
                <div className="footer-column links-column">
                    <h3>Bantuan</h3>
                    <ul>
                    <li><a href="#kontak">Kontak Kami</a></li>
                    <li><a href="#laporan">Laporan Pembajakan</a></li>
                    <li><a href="#kebijakan">Kebijakan</a></li>
                    </ul>
                </div>
                <div className="footer-column newsletter-column">
                    <h3>Berlangganan Berita Terbaru</h3>
                    <div className="subscribe-box">
                        <input type="email" placeholder="Masukan email" />
                        <button type="submit" className="subscribe-btn">
                            <img src={sendIcon} alt="logo" width={42} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}