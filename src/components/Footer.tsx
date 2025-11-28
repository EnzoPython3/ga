
import { Link } from 'react-router-dom';
import { Scale, Facebook, Twitter, Linkedin, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-navy text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <Scale size={32} className="text-primary-gold" strokeWidth={1.5} />
                            <div>
                                <h2 className="text-xl font-serif font-bold tracking-tight text-white leading-none">GOLDMAN</h2>
                                <p className="text-[10px] tracking-[0.35em] text-primary-gold uppercase font-bold mt-1">& ASSOCIATES</p>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            We don't just practice law; we remove fear. Our brand exists to shepherd clients through the most difficult times of their lives with unshakeable expertise and genuine human care.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-slate-400 hover:text-primary-gold transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6 text-primary-gold">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Bios', 'Practice Areas', 'Testimonials', 'Ebook', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-300 hover:text-white transition-colors flex items-center group">
                                        <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6 text-primary-gold">Practice Areas</h3>
                        <ul className="space-y-4">
                            {['Divorce', 'Child Custody', 'Criminal Defense', 'Family Law', 'DUI Defense'].map((item) => (
                                <li key={item}>
                                    <Link to="/practice-areas" className="text-slate-300 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6 text-primary-gold">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="text-primary-gold shrink-0 mt-1" size={20} />
                                <span className="text-slate-300">
                                    29800 Middlebelt Rd<br />
                                    Farmington Hills, MI 48334
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone className="text-primary-gold shrink-0" size={20} />
                                <a href="tel:2485906600" className="text-slate-300 hover:text-white transition-colors">
                                    (248) 590-6600
                                </a>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail className="text-primary-gold shrink-0" size={20} />
                                <a href="mailto:info@akivagoldman.com" className="text-slate-300 hover:text-white transition-colors">
                                    info@akivagoldman.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {currentYear} Goldman & Associates Law Firm. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
