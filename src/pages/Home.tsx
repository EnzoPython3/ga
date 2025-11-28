
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Shield, Users, BookOpen, Star } from 'lucide-react';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero_bg.png"
                        alt="Legal Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-navy/90 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
                    <div className="inline-block animate-fade-in-up">
                        <span className="px-4 py-2 bg-primary-gold/10 border border-primary-gold/30 text-primary-gold rounded-full text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
                            Michigan's Premier Family Law Firm
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight animate-fade-in-up delay-100">
                        Compassionate Authority <br />
                        <span className="text-primary-gold">When You Need It Most.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        "To remove the fear associated with divorce and custody issues, guiding you to protect your finances and maximize time with your kids."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up delay-300">
                        <Button variant="secondary" className="w-full sm:w-auto text-lg px-10 py-4">
                            Schedule Free Consultation
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-primary-navy">
                            View Practice Areas
                        </Button>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="bg-white py-12 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for awards/logos - using text for now or simple icons */}
                        <div className="flex items-center space-x-2 font-serif font-bold text-xl text-primary-navy">
                            <Star className="text-primary-gold" fill="currentColor" /> <span>Super Lawyers</span>
                        </div>
                        <div className="flex items-center space-x-2 font-serif font-bold text-xl text-primary-navy">
                            <Star className="text-primary-gold" fill="currentColor" /> <span>Avvo 10.0</span>
                        </div>
                        <div className="flex items-center space-x-2 font-serif font-bold text-xl text-primary-navy">
                            <Star className="text-primary-gold" fill="currentColor" /> <span>Top 100 Trial Lawyers</span>
                        </div>
                        <div className="flex items-center space-x-2 font-serif font-bold text-xl text-primary-navy">
                            <Star className="text-primary-gold" fill="currentColor" /> <span>Google 5.0 Stars</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-secondary-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary-gold font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-4xl font-serif font-bold text-primary-navy mt-4 mb-6">The Goldman Standard</h2>
                        <p className="text-slate-600 text-lg">
                            We don't just practice law; we remove fear. Our brand exists to shepherd clients through the most difficult times of their lives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Protection",
                                desc: "We stand as a barrier between our clients and the chaos of the legal system, protecting their future and finances."
                            },
                            {
                                icon: Users,
                                title: "Compassion",
                                desc: "We understand that behind every case file is a broken family needing to be heard, understood, and healed."
                            },
                            {
                                icon: BookOpen,
                                title: "Education",
                                desc: "We empower clients by demystifying the law. Knowledge removes fear, and we are the teachers."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-primary-gold hover:-translate-y-2 transition-transform duration-300 group">
                                <feature.icon className="w-12 h-12 text-primary-navy mb-6 group-hover:text-primary-gold transition-colors" />
                                <h3 className="text-2xl font-serif font-bold text-primary-navy mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practice Areas Highlight */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <span className="text-primary-gold font-bold tracking-widest uppercase text-sm">Our Expertise</span>
                            <h2 className="text-4xl font-serif font-bold text-primary-navy mt-4">Legal Solutions for Families</h2>
                        </div>
                        <Button variant="outline" className="mt-6 md:mt-0">View All Practice Areas</Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {['Divorce', 'Child Custody', 'Alimony', 'Child Support', 'Paternity', 'Domestic Violence'].map((area, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-xl bg-primary-navy aspect-[4/3] cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary-gold transition-colors">{area}</h3>
                                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Expert legal guidance to protect your rights and future.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold opacity-10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-gold opacity-10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                        Ready to Take Back Control?
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                        Don't face the legal system alone. Our experienced team is ready to fight for your future. Schedule your free consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button variant="secondary" className="w-full sm:w-auto text-lg px-12 py-4">
                            Call (248) 590-6600
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto text-lg px-12 py-4 border-slate-600 text-white hover:bg-white hover:text-primary-navy">
                            Book Online
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
