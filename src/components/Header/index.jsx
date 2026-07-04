import './style.css'
import logo from '../../assets/logo-primary.svg'
import logoLight from '../../assets/logo-light.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const detailPage = location.pathname.startsWith('/details');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })
    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="logo-group">
                {isScrolled ? <img src={logoLight} alt="logo" width={60} /> : <img src={logo} alt="logo" width={60} />}
                <h1>Berita Kini</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/" end>Beranda</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/terbaru">Terbaru</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/hiburan">Hiburan</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/gaya-hidup">Gaya Hidup</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/olahraga">Olahraga</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/nasional">Nasional</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/internasional">Internasional</NavLink></li>
                </ul>
            </div>
        </header>
    )
}
