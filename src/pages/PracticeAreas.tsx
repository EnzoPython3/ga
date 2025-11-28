
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Scale, Users, Heart, Home as HomeIcon, Briefcase, Gavel } from 'lucide-react';

const PracticeAreas = () => {
    const areas = [
        { icon: Heart, title: 'Divorce', desc: 'Navigating the complexities of ending a marriage with dignity and fairness.' },
        { icon: Users, title: 'Child Custody', desc: 'Protecting your parental rights and the best interests of your children.' },
        { icon: Scale, title: 'Criminal Defense', desc: 'Aggressive defense against criminal charges to protect your freedom.' },
        { icon: HomeIcon, title: 'Family Law', desc: 'Comprehensive legal support for all family-related legal matters.' },
        { icon: Briefcase, title: 'Alimony', desc: 'Ensuring fair spousal support arrangements for your financial future.' },
        { icon: Gavel, title: 'Litigation', desc: 'Experienced trial attorneys ready to fight for you in court.' },
    ];

    return (
        <Layout>
            <PageHeader
                title="Practice Areas"
                subtitle="Comprehensive legal solutions tailored to your unique situation."
            />
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areas.map((area, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-primary-gold transition-colors group">
                            <area.icon className="w-10 h-10 text-primary-navy mb-6 group-hover:text-primary-gold transition-colors" />
                            <h3 className="text-2xl font-serif font-bold text-primary-navy mb-3">{area.title}</h3>
                            <p className="text-slate-600 mb-6">{area.desc}</p>
                            <span className="text-primary-gold font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More <span>→</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default PracticeAreas;
