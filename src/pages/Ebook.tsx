
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Download } from 'lucide-react';

const Ebook = () => {
    return (
        <Layout>
            <PageHeader
                title="Free Legal Resources"
                subtitle="Empower yourself with knowledge. Download our free guides."
            />
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-slate-200 min-h-[300px] flex items-center justify-center">
                        {/* Placeholder for Book Cover */}
                        <div className="w-48 h-64 bg-primary-navy shadow-2xl flex items-center justify-center text-white text-center p-4">
                            <span className="font-serif font-bold text-xl">Divorce Guide</span>
                        </div>
                    </div>
                    <div className="md:w-2/3 p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-serif font-bold text-primary-navy mb-4">The Ultimate Guide to Divorce in Michigan</h2>
                        <p className="text-slate-600 mb-8 text-lg">
                            Learn everything you need to know about the divorce process, from filing to final judgment. Protect your assets and your rights with this comprehensive guide.
                        </p>
                        <div>
                            <Button icon={Download}>Download Free Ebook</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Ebook;
