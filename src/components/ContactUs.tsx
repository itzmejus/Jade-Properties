import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUsPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {

    };

    const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:bg-white text-black placeholder-gray-400 transition-colors duration-200 text-sm";

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">Contact Us</h1>
                    <p className="text-gray-800 text-base">We'd love to hear from you</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Contact Form */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                        {/* Gold accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#B8960C] via-[#D4AF37] to-[#E5C84A] rounded-full mb-6" />
                        <h2 className="text-xl font-bold text-black mb-6">Send a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="How can we help you?" />
                            </div>

                            <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8960C] text-black font-bold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md">
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl font-bold text-black mb-6">Get in Touch</h2>
                            <div className="space-y-5">

                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black mb-1 text-sm">Phone</h3>
                                        <a href="tel:+971508872028" className="block text-gray-800 hover:text-[#B8960C] transition-colors text-sm">+971 50 887 2028</a>
                                        <a href="tel:+97126313564" className="block text-gray-800 hover:text-[#B8960C] transition-colors text-sm">+971 26 313 564</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black mb-1 text-sm">Email</h3>
                                        <a href="mailto:info@jadeprops.com" className="block text-gray-800 hover:text-[#B8960C] transition-colors text-sm">info@jadeprops.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black mb-1 text-sm">Address</h3>
                                        <p className="text-gray-800 text-sm">Al Ghaith Tower Hamdan Street</p>
                                        <p className="text-gray-800 text-sm">Abu Dhabi, UAE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden h-64 border border-gray-200 shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.561142858375!2d54.36137571073158!3d24.49077797808145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67005e9d2825%3A0xd62a94102734a53a!2sAl%20Ghaith%20Tower!5e1!3m2!1sen!2sae!4v1772190881606!5m2!1sen!2sae"
                                width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}