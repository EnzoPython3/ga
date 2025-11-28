
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <Layout>
            <PageHeader
                title="Contact Us"
                subtitle="We are here to help. Reach out to schedule your free consultation."
            />
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary-navy mb-6">Get In Touch</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our team is available 24/7 to answer your questions and provide the legal support you need. Don't hesitate to call us.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary-gold/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="text-primary-gold" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary-navy text-lg">Phone</h3>
                                    <p className="text-slate-600 mb-1">Available 24/7 for emergency calls.</p>
                                    <a href="tel:2485906600" className="text-xl font-bold text-primary-gold hover:text-primary-navy transition-colors">(248) 590-6600</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary-gold/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="text-primary-gold" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary-navy text-lg">Email</h3>
                                    <p className="text-slate-600 mb-1">Send us a message anytime.</p>
                                    <a href="mailto:info@akivagoldman.com" className="text-xl font-bold text-primary-gold hover:text-primary-navy transition-colors">info@akivagoldman.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary-gold/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary-gold" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary-navy text-lg">Office</h3>
                                    <p className="text-slate-600">
                                        29800 Middlebelt Rd<br />
                                        Farmington Hills, MI 48334
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <h3 className="text-2xl font-serif font-bold text-primary-navy mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-primary-navy mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary-navy mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary-navy mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary-navy mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all" placeholder="(555) 123-4567" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary-navy mb-2">Case Type</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all bg-white">
                                    <option>Divorce</option>
                                    <option>Child Custody</option>
                                    <option>Criminal Defense</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary-navy mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-all h-32" placeholder="Tell us about your situation..."></textarea>
                            </div>
                            <Button fullWidth>Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
