import './style.css'
import logo from '../../assets/logo-primary.svg'
import logoLight from '../../assets/logo-light.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const detailPage = location.pathname.startsWith('/detail');

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="logo-group">
                {isScrolled ? <img src={logoLight} alt="logo" width={60} /> : <img src={logo} alt="logo" width={60} />}
                <h1>Berita Kini</h1>
            </div>
            <button
                type="button"
                className="menu-toggle"
                aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                {menuOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </button>
            <div className={`menu ${menuOpen ? 'open' : ''}`} id="site-menu">
                <ul>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/" end onClick={() => setMenuOpen(false)}>Beranda</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/terbaru" onClick={() => setMenuOpen(false)}>Terbaru</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/hiburan" onClick={() => setMenuOpen(false)}>Hiburan</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/gaya-hidup" onClick={() => setMenuOpen(false)}>Gaya Hidup</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/olahraga" onClick={() => setMenuOpen(false)}>Olahraga</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/nasional" onClick={() => setMenuOpen(false)}>Nasional</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && !detailPage ? 'active' : '')} to="/internasional" onClick={() => setMenuOpen(false)}>Internasional</NavLink></li>
                </ul>
            </div>
        </header>
    )
}
