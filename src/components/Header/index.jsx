import './style.css'
import logo from '../../assets/logo-primary.svg'

export default function Header() {
    return (
        <header>
            <div className="logo-group">
                <img src={logo} alt="logo" width={60} />
                <h1>Berita Kini</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#" className="active">Beranda</a></li>
                    <li><a href="#">Terbaru</a></li>
                    <li><a href="#">Hiburan</a></li>
                    <li><a href="#">Gaya Hidup</a></li>
                    <li><a href="#">Olahraga</a></li>
                    <li><a href="#">Nasional</a></li>
                    <li><a href="#">Internasional</a></li>
                </ul>
            </div>
        </header>
    )
}
