import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X, Phone } from 'lucide-react';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Bios', path: '/bios' },
        { label: 'Practice Areas', path: '/practice-areas' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'Ebook', path: '/ebook' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <Scale size={40} className="text-primary-gold group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                        <div>
                            <h1 className="text-2xl font-serif font-bold tracking-tight text-primary-navy leading-none">GOLDMAN</h1>
                            <p className="text-[10px] tracking-[0.35em] text-primary-gold uppercase font-bold mt-1">& ASSOCIATES</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-bold tracking-wide transition-colors duration-200 ${isActive(item.path) ? 'text-primary-gold' : 'text-primary-navy hover:text-primary-gold'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Phone */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <a href="tel:2485906600" className="flex items-center text-primary-navy font-bold hover:text-primary-gold transition-colors">
                            <Phone size={18} className="mr-2 text-primary-gold" />
                            (248) 590-6600
                        </a>
                        <Button variant="secondary" onClick={() => window.location.href = '/contact'}>
                            Schedule Consultation
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-primary-navy hover:text-primary-gold transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl animate-fade-in">
                    <div className="px-4 pt-4 pb-8 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-3 rounded-lg font-bold ${isActive(item.path)
                                    ? 'bg-secondary-cream text-primary-gold'
                                    : 'text-primary-navy hover:bg-slate-50'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-slate-100 space-y-4">
                            <a href="tel:2485906600" className="flex items-center justify-center text-primary-navy font-bold py-2">
                                <Phone size={18} className="mr-2 text-primary-gold" />
                                (248) 590-6600
                            </a>
                            <Button variant="secondary" fullWidth onClick={() => {
                                window.location.href = '/contact';
                                setIsMenuOpen(false);
                            }}>
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
