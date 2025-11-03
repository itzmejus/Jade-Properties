import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUsPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const FormspreeURL = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_URL}`;

        try {
            const response = await fetch(FormspreeURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 pt-24">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl text-gray-300">We'd love to hear from you</p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>

                        {formStatus === 'success' && (
                            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-700 font-medium text-sm">
                                    ✅ Your message has been sent successfully!
                                </p>
                            </div>
                        )}
                        {formStatus === 'error' && (
                            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-700 font-medium text-sm">
                                    ❌ Something went wrong. Please try again.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <a href="tel:+971508872028" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            +971 50 887 2028
                                        </a>
                                        <a href="tel:+971508872028" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            +971 26 313 564
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:info@jadeprops.com" className="block text-gray-600 hover:text-purple-600 transition-colors">
                                            info@jadeprops.com
                                        </a>
                                        {/* <a href="mailto:support@jadeproperties.ae" className="block text-gray-600 hover:text-purple-600 transition-colors">
                                            support@jadeproperties.ae
                                        </a> */}
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600">Al Ghaith Tower Hamdan street</p>
                                        <p className="text-gray-600">Abu Dhabi, UAE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 shadow-lg border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.176734276103!2d55.139160315020996!3d25.07725998395127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7b5d3c3af%3A0x5e1a8c3f4c8a9d23!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                title="Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}