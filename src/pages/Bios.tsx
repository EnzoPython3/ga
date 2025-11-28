
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const Bios = () => {
    return (
        <Layout>
            <PageHeader
                title="Our Attorneys"
                subtitle="Meet the dedicated legal professionals fighting for your rights."
            />
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 group hover:shadow-md transition-all">
                            <div className="h-64 bg-slate-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-primary-navy mb-1">Attorney Name</h3>
                                <p className="text-primary-gold font-bold text-sm uppercase tracking-wider mb-4">Senior Partner</p>
                                <p className="text-slate-600 mb-4">Dedicated to providing exceptional legal representation with compassion and integrity.</p>
                                <button className="text-primary-navy font-bold hover:text-primary-gold transition-colors">View Profile →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Bios;
