
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <Layout>
            <PageHeader
                title="Client Testimonials"
                subtitle="Don't just take our word for it. Hear from those we've helped."
            />
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex text-primary-gold mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-600 italic mb-6 text-lg">
                                "Akiva Goldman and his team were incredible. They guided me through a very difficult divorce with compassion and expertise. I couldn't have asked for better representation."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary-navy rounded-full flex items-center justify-center text-white font-bold">JD</div>
                                <div>
                                    <p className="font-bold text-primary-navy">John Doe</p>
                                    <p className="text-sm text-slate-500">Divorce Client</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Testimonials;
