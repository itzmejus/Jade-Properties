import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'ru' | 'zh';

export interface Translations {
    // Navbar
    nav: {
        home: string;
        about: string;
        properties: string;
        services: string;
        contact: string;
    };

    // HomePage
    home: {
        brandName: string;
        heroTitle: string;
        heroHighlight: string;
        heroSubtitle: string;
        tabRent: string;
        tabBuy: string;
        tabOffPlan: string;
        tabCommercial: string;
        locationPlaceholder: string;
        searchBtn: string;
        advancedFilters: string;
        hideFilters: string;
        resetAll: string;
        listingsAvailable: string;
        priceRange: string;
        anyPrice: string;
        bedsBaths: string;
        any: string;
        studio: string;
        propertyType: string;
        anyType: string;
        apartment: string;
        villa: string;
        townhouse: string;
        penthouse: string;
        furnishing: string;
        furnished: string;
        unfurnished: string;
        semiFurnished: string;
        statProperties: string;
        statClients: string;
        statAgents: string;
        statExperience: string;
    };

    // PropertyCardSection
    properties: {
        sectionLabel: string;
        featured: string;
        featuredSub: string;
        beds: string;
        baths: string;
        viewDetails: string;
        viewAll: string;
    };

    // WhyChooseUs
    why: {
        sectionLabel: string;
        title: string;
        subtitle: string;
        secureTitle: string;
        secureDesc: string;
        ratesTitle: string;
        ratesDesc: string;
        supportTitle: string;
        supportDesc: string;
        financeTitle: string;
        financeDesc: string;
        ctaTitle: string;
        ctaSubtitle: string;
        browse: string;
        contactUs: string;
        statProperties: string;
        statClients: string;
        statRating: string;
        statExperience: string;
    };

    // AllProperties
    allProperties: {
        sectionLabel: string;
        title: string;
        subtitle: string;
        searchLabel: string;
        searchPlaceholder: string;
        locationLabel: string;
        typeLabel: string;
        reset: string;
        showing: string;
        of: string;
        noFound: string;
        noFoundSub: string;
        clearFilters: string;
        beds: string;
        baths: string;
        viewDetails: string;
        all: string;
        dubai: string;
        abuDhabi: string;
    };

    // AboutPage
    about: {
        sectionLabel: string;
        heroTitle: string;
        heroHighlight: string;
        heroSub: string;
        primeTitle: string;
        primeDesc: string;
        expertTitle: string;
        expertDesc: string;
        secureTitle: string;
        secureDesc: string;
        supportTitle: string;
        supportDesc: string;
        missionLabel: string;
        missionText: string;
        visionLabel: string;
        visionText: string;
        whyTitle: string;
        whyHighlight: string;
        why1Title: string; why1Desc: string;
        why2Title: string; why2Desc: string;
        why3Title: string; why3Desc: string;
        why4Title: string; why4Desc: string;
        why5Title: string; why5Desc: string;
        why6Title: string; why6Desc: string;
        ctaTitle: string;
        ctaSub: string;
        browse: string;
        touchTitle: string;
        email: string;
        phone: string;
        support: string;
        supportVal: string;
        statProperties: string;
        statClients: string;
        statAgents: string;
        statExperience: string;
    };

    // ContactPage
    contact: {
        sectionLabel: string;
        title: string;
        subtitle: string;
        sendMessage: string;
        nameLabel: string;
        emailLabel: string;
        messageLabel: string;
        sendBtn: string;
        successMsg: string;
        errorMsg: string;
        getInTouch: string;
        phone: string;
        email: string;
        address: string;
        addressLine1: string;
        addressLine2: string;
        orContact: string;
        callUs: string;
        emailUs: string;
    };

    // PropertyDetail
    detail: {
        forSale: string;
        description: string;
        propertyDetails: string;
        features: string;
        location: string;
        sendEnquiry: string;
        fullName: string;
        emailAddress: string;
        phoneNumber: string;
        message: string;
        messagePlaceholder: string;
        sendBtn: string;
        successMsg: string;
        orContact: string;
        callUs: string;
        emailUs: string;
        bedrooms: string;
        bathrooms: string;
        area: string;
        type: string;
        propType: string;
        yearBuilt: string;
        furnishing: string;
        status: string;
        viewDetails: string;
    };

    // Services
    services: {
        sectionLabel: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        includes: string;
        notSure: string;
        talkExpert: string;
        s1Title: string; s1Tagline: string; s1Desc: string; s1i1: string; s1i2: string; s1i3: string;
        s2Title: string; s2Tagline: string; s2Desc: string; s2i1: string; s2i2: string; s2i3: string;
        s3Title: string; s3Tagline: string; s3Desc: string; s3i1: string; s3i2: string; s3i3: string;
        s4Title: string; s4Tagline: string; s4Desc: string; s4i1: string; s4i2: string; s4i3: string;
        s5Title: string; s5Tagline: string; s5Desc: string; s5i1: string; s5i2: string; s5i3: string;
        s6Title: string; s6Tagline: string; s6Desc: string; s6i1: string; s6i2: string; s6i3: string;
    };

    // MortgageCalculator
    mortgage: {
        sectionLabel: string;
        title: string;
        subtitle: string;
        propPrice: string;
        downPayment: string;
        interestRate: string;
        loanTerm: string;
        monthlyPayment: string;
        perMonth: string;
        loanAmount: string;
        downPaymentLabel: string;
        totalInterest: string;
        overTerm: string;
        totalRepayment: string;
        principalInterest: string;
        breakdown: string;
        principal: string;
        interest: string;
        upfront: string;
        ofPrice: string;
        advisor: string;
        hint1: string;
        hint2: string;
        hint3: string;
        hint4: string;
        years: string;
    };

    // Marquee
    marquee: string[];

    // Common
    common: {
        scrollDown: string;
    };
}

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────

const en: Translations = {
    nav: { home: 'Home', about: 'About Us', properties: 'Properties', services: 'Our Services', contact: 'Contact Us' },
    home: {
        brandName: 'Jade Properties & Real Estate',
        heroTitle: 'The Journey To Modern Living',
        heroHighlight: 'Starts Here',
        heroSubtitle: 'Discover your dream property with exceptional service and unmatched expertise',
        tabRent: 'RENT', tabBuy: 'BUY', tabOffPlan: 'OFF PLAN', tabCommercial: 'COMMERCIAL',
        locationPlaceholder: 'City, neighborhood, or area...',
        searchBtn: 'Search Properties',
        advancedFilters: 'Advanced Filters', hideFilters: 'Hide Filters', resetAll: 'Reset all',
        listingsAvailable: '500+ listings available',
        priceRange: 'Price Range', anyPrice: 'Any price',
        bedsBaths: 'Beds & Baths', any: 'Any', studio: 'Studio',
        propertyType: 'Property Type', anyType: 'Any type',
        apartment: 'Apartment', villa: 'Villa', townhouse: 'Townhouse', penthouse: 'Penthouse',
        furnishing: 'Furnishing', furnished: 'Furnished', unfurnished: 'Unfurnished', semiFurnished: 'Semi-Furnished',
        statProperties: 'Properties Listed', statClients: 'Happy Clients', statAgents: 'Expert Agents', statExperience: 'Years Experience',
    },
    properties: {
        sectionLabel: 'Jade Properties & Real Estate', featured: 'Featured Properties',
        featuredSub: 'Discover our handpicked selection of exceptional properties in prime locations',
        beds: 'Beds', baths: 'Baths', viewDetails: 'View Details', viewAll: 'View All Properties',
    },
    why: {
        sectionLabel: 'Jade Properties & Real Estate', title: 'Why Choose Us',
        subtitle: 'We turn your real estate dreams into reality with exceptional service and unmatched expertise',
        secureTitle: 'Secure Transactions', secureDesc: '100% safe and transparent property dealings',
        ratesTitle: 'Best Market Rates', ratesDesc: 'Competitive pricing with no hidden fees',
        supportTitle: '24/7 Support', supportDesc: 'Expert assistance whenever you need',
        financeTitle: 'Flexible Financing', financeDesc: 'Multiple payment options available',
        ctaTitle: 'Ready to Find Your Dream Property?',
        ctaSubtitle: 'Explore our exclusive listings and let our experts guide you to your perfect home',
        browse: 'Browse Properties', contactUs: 'Contact Us',
        statProperties: 'Properties Listed', statClients: 'Happy Clients', statRating: 'Client Rating', statExperience: 'Years Experience',
    },
    allProperties: {
        sectionLabel: 'Jade Properties & Real Estate', title: 'Explore Our Properties',
        subtitle: 'Find your perfect home from our exclusive collection',
        searchLabel: 'Search Properties', searchPlaceholder: 'Search by name or location...',
        locationLabel: 'Location', typeLabel: 'Property Type', reset: 'Reset',
        showing: 'Showing', of: 'of', noFound: 'No Properties Found',
        noFoundSub: 'Try adjusting your filters or search query', clearFilters: 'Clear All Filters',
        beds: 'Beds', baths: 'Baths', viewDetails: 'View Details', all: 'All', dubai: 'Dubai', abuDhabi: 'Abu Dhabi',
    },
    about: {
        sectionLabel: 'About Jade Properties & Real Estate',
        heroTitle: 'Your Trusted Partner in',
        heroHighlight: 'Finding Perfect Properties',
        heroSub: 'We make it easy to find, buy, and rent exceptional properties across the UAE with unmatched expertise and personalized service',
        primeTitle: 'Prime Locations', primeDesc: 'Properties in the most sought-after areas of Dubai and Abu Dhabi',
        expertTitle: 'Expert Guidance', expertDesc: 'Professional agents with deep market knowledge to guide you',
        secureTitle: 'Secure Transactions', secureDesc: 'Safe and transparent property dealings you can trust',
        supportTitle: '24/7 Support', supportDesc: 'Always available to answer your questions and concerns',
        missionLabel: 'Our Mission', missionText: 'To provide exceptional real estate services that exceed expectations. We\'re committed to helping you find not just a property, but your perfect home or investment opportunity.',
        visionLabel: 'Our Vision', visionText: 'To become the most trusted real estate agency in the UAE, known for integrity, innovation, and creating lasting relationships with our clients.',
        whyTitle: 'Why Choose', whyHighlight: 'Jade Properties?',
        why1Title: 'Verified Properties', why1Desc: 'All listings are thoroughly verified and legally compliant',
        why2Title: 'Best Market Rates', why2Desc: 'Competitive pricing with complete transparency on fees',
        why3Title: 'Personalized Service', why3Desc: 'Tailored solutions based on your specific needs and budget',
        why4Title: 'End-to-End Support', why4Desc: 'Complete assistance from property search to final handover',
        why5Title: 'Market Insights', why5Desc: 'Regular updates on market trends and investment opportunities',
        why6Title: 'Flexible Viewing', why6Desc: 'Schedule property viewings at your convenience',
        ctaTitle: 'Ready to Find Your Dream Property?',
        ctaSub: 'Let our expert team help you discover the perfect property that matches your needs and budget',
        browse: 'Browse Properties', touchTitle: 'Get in Touch',
        email: 'Email', phone: 'Phone', support: 'Support', supportVal: 'Available 24/7',
        statProperties: 'Properties Listed', statClients: 'Happy Clients', statAgents: 'Expert Agents', statExperience: 'Years Experience',
    },
    contact: {
        sectionLabel: 'Jade Properties & Real Estate', title: 'Contact Us', subtitle: "We'd love to hear from you",
        sendMessage: 'Send a Message', nameLabel: 'Name', emailLabel: 'Email', messageLabel: 'Message',
        sendBtn: 'Send Message', successMsg: '✅ Message sent successfully!', errorMsg: '❌ Something went wrong. Please try again.',
        getInTouch: 'Get in Touch', phone: 'Phone', email: 'Email', address: 'Address',
        addressLine1: 'Al Ghaith Tower Hamdan Street', addressLine2: 'Abu Dhabi, UAE',
        orContact: 'Or contact us directly', callUs: 'Call us', emailUs: 'Email us',
    },
    detail: {
        forSale: 'For Sale', description: 'Description', propertyDetails: 'Property Details',
        features: 'Features & Amenities', location: 'Location', sendEnquiry: 'Send Enquiry',
        fullName: 'Full Name', emailAddress: 'Email Address', phoneNumber: 'Phone Number',
        message: 'Message', messagePlaceholder: "I'm interested in this property...",
        sendBtn: 'Send Enquiry', successMsg: "✓ Enquiry sent! We'll contact you soon.",
        orContact: 'Or contact us directly', callUs: 'Call us', emailUs: 'Email us',
        bedrooms: 'Bedrooms', bathrooms: 'Bathrooms', area: 'Area', type: 'Type',
        propType: 'Property Type', yearBuilt: 'Year Built', furnishing: 'Furnishing', status: 'Status', viewDetails: 'View Details',
    },
    services: {
        sectionLabel: 'Our Services',
        title: 'Tailored Real Estate Solutions,', titleHighlight: 'Designed for Distinction',
        subtitle: "Whether you're an investor, homeowner, developer, or tenant — our services are crafted to deliver value, precision, and peace of mind at every step.",
        includes: 'Includes', notSure: 'Not sure which service fits your needs?', talkExpert: 'Talk to an Expert',
        s1Title: 'Property Buying Assistance', s1Tagline: 'Find more than just a house — discover your future.', s1Desc: 'We assist buyers in finding the perfect residential or commercial property, offering curated listings, expert guidance, and smooth negotiations.', s1i1: 'Personalized property matching', s1i2: 'Market analysis & neighborhood insights', s1i3: 'Legal & financial support through trusted partners',
        s2Title: 'Property Selling & Marketing', s2Tagline: 'Sell smart. Sell with style.', s2Desc: 'Our selling service combines premium marketing, strategic pricing, and an exclusive buyer network to showcase your property at its best.', s2i1: 'Professional photography & video tours', s2i2: 'Online + offline marketing campaigns', s2i3: 'Negotiation & sales management',
        s3Title: 'Property Leasing & Rental Services', s3Tagline: 'Connecting tenants with the perfect space.', s3Desc: "Whether you're a landlord seeking trustworthy tenants or a tenant looking for a comfortable, well-located space — we simplify the leasing process.", s3i1: 'Tenant screening', s3i2: 'Lease documentation', s3i3: 'Ongoing support',
        s4Title: 'Investment Advisory', s4Tagline: 'Maximize your ROI with smart real estate moves.', s4Desc: 'We offer deep market analysis and strategic advice to help you make informed, high-yield investment decisions.', s4i1: 'ROI-focused property sourcing', s4i2: 'Investment portfolio planning', s4i3: 'Off-plan property insights',
        s5Title: 'Property Management', s5Tagline: 'Hands-off ownership, hassle-free profits.', s5Desc: 'We provide end-to-end property management, handling everything from maintenance to tenant communication.', s5i1: 'Rent collection & renewals', s5i2: 'Property maintenance coordination', s5i3: 'Tenant relations',
        s6Title: "Off-Plan Projects & Developer Deals", s6Tagline: "Be part of what's next.", s6Desc: 'Gain early access to the most promising off-plan projects in Dubai. We collaborate directly with developers.', s6i1: 'Priority access to new launches', s6i2: 'Project comparison & analysis', s6i3: 'Assistance with payment plans & contracts',
    },
    mortgage: {
        sectionLabel: 'Jade Properties & Real Estate', title: 'Mortgage Calculator',
        subtitle: 'Estimate your monthly repayments and plan your property investment with confidence',
        propPrice: 'Property Price', downPayment: 'Down Payment', interestRate: 'Annual Interest Rate', loanTerm: 'Loan Term',
        monthlyPayment: 'Monthly Payment', perMonth: 'per month for', loanAmount: 'Loan Amount',
        downPaymentLabel: 'Down Payment', totalInterest: 'Total Interest', overTerm: 'over loan term',
        totalRepayment: 'Total Repayment', principalInterest: 'principal + interest',
        breakdown: 'Payment Breakdown', principal: 'Principal', interest: 'Interest',
        upfront: 'upfront', ofPrice: '% of price', advisor: 'Speak to a Mortgage Advisor',
        hint1: 'Total purchase price of the property',
        hint2: 'UAE minimum is typically 20% for expats, 15% for UAE nationals',
        hint3: 'Average UAE mortgage rate is currently 4–5%',
        hint4: 'Maximum term in UAE is typically 25 years',
        years: 'years',
    },
    marquee: ['Buy, Sell & Rent', 'Prime Locations', 'Family Communities', 'Real Estate Experts', 'Abu Dhabi Properties', 'Dubai Real Estate', 'Waterfront Villas', 'Investment Properties', 'Commercial Spaces', 'Off-Plan Projects'],
    common: { scrollDown: 'Scroll down' },
};

const ar: Translations = {
    nav: { home: 'الرئيسية', about: 'من نحن', properties: 'العقارات', services: 'خدماتنا', contact: 'اتصل بنا' },
    home: {
        brandName: 'جيد للعقارات والاستثمار',
        heroTitle: 'رحلتك نحو الحياة العصرية',
        heroHighlight: 'تبدأ هنا',
        heroSubtitle: 'اكتشف عقار أحلامك مع خدمة استثنائية وخبرة لا مثيل لها',
        tabRent: 'إيجار', tabBuy: 'شراء', tabOffPlan: 'على الخارطة', tabCommercial: 'تجاري',
        locationPlaceholder: 'مدينة، حي، أو منطقة...',
        searchBtn: 'بحث عن العقارات',
        advancedFilters: 'فلاتر متقدمة', hideFilters: 'إخفاء الفلاتر', resetAll: 'إعادة ضبط',
        listingsAvailable: '+500 عقار متاح',
        priceRange: 'نطاق السعر', anyPrice: 'أي سعر',
        bedsBaths: 'غرف وحمامات', any: 'الكل', studio: 'استوديو',
        propertyType: 'نوع العقار', anyType: 'أي نوع',
        apartment: 'شقة', villa: 'فيلا', townhouse: 'تاون هاوس', penthouse: 'بنتهاوس',
        furnishing: 'الأثاث', furnished: 'مفروش', unfurnished: 'غير مفروش', semiFurnished: 'مفروش جزئياً',
        statProperties: 'عقار مدرج', statClients: 'عميل سعيد', statAgents: 'وكيل خبير', statExperience: 'سنوات خبرة',
    },
    properties: {
        sectionLabel: 'جيد للعقارات والاستثمار', featured: 'العقارات المميزة',
        featuredSub: 'اكتشف مجموعتنا المختارة من العقارات الاستثنائية في أفضل المواقع',
        beds: 'غرف', baths: 'حمامات', viewDetails: 'عرض التفاصيل', viewAll: 'عرض جميع العقارات',
    },
    why: {
        sectionLabel: 'جيد للعقارات والاستثمار', title: 'لماذا تختارنا',
        subtitle: 'نحوّل أحلامك العقارية إلى واقع بخدمة استثنائية وخبرة لا مثيل لها',
        secureTitle: 'معاملات آمنة', secureDesc: 'تعاملات عقارية آمنة وشفافة 100%',
        ratesTitle: 'أفضل أسعار السوق', ratesDesc: 'أسعار تنافسية بدون رسوم خفية',
        supportTitle: 'دعم على مدار الساعة', supportDesc: 'مساعدة خبراء متى احتجت',
        financeTitle: 'تمويل مرن', financeDesc: 'خيارات دفع متعددة متاحة',
        ctaTitle: 'هل أنت مستعد للعثور على عقار أحلامك؟',
        ctaSubtitle: 'استكشف قوائمنا الحصرية ودع خبراءنا يرشدونك',
        browse: 'تصفح العقارات', contactUs: 'اتصل بنا',
        statProperties: 'عقار مدرج', statClients: 'عميل سعيد', statRating: 'تقييم العملاء', statExperience: 'سنوات خبرة',
    },
    allProperties: {
        sectionLabel: 'جيد للعقارات والاستثمار', title: 'استكشف عقاراتنا',
        subtitle: 'ابحث عن منزل أحلامك من مجموعتنا الحصرية',
        searchLabel: 'بحث عن العقارات', searchPlaceholder: 'ابحث بالاسم أو الموقع...',
        locationLabel: 'الموقع', typeLabel: 'نوع العقار', reset: 'إعادة',
        showing: 'يعرض', of: 'من', noFound: 'لا توجد عقارات',
        noFoundSub: 'حاول تعديل الفلاتر أو البحث', clearFilters: 'مسح جميع الفلاتر',
        beds: 'غرف', baths: 'حمامات', viewDetails: 'عرض التفاصيل', all: 'الكل', dubai: 'دبي', abuDhabi: 'أبوظبي',
    },
    about: {
        sectionLabel: 'عن جيد للعقارات والاستثمار',
        heroTitle: 'شريكك الموثوق في',
        heroHighlight: 'إيجاد العقارات المثالية',
        heroSub: 'نجعل البحث والشراء والإيجار سهلاً عبر الإمارات بخبرة لا مثيل لها',
        primeTitle: 'مواقع متميزة', primeDesc: 'عقارات في أرقى مناطق دبي وأبوظبي',
        expertTitle: 'توجيه متخصص', expertDesc: 'وكلاء محترفون بمعرفة عميقة بالسوق',
        secureTitle: 'معاملات آمنة', secureDesc: 'تعاملات عقارية آمنة وشفافة',
        supportTitle: 'دعم على مدار الساعة', supportDesc: 'متاحون دائماً للإجابة على استفساراتك',
        missionLabel: 'رسالتنا', missionText: 'تقديم خدمات عقارية استثنائية تتجاوز التوقعات. نحن ملتزمون بمساعدتك في إيجاد ليس مجرد عقار، بل منزل أحلامك.',
        visionLabel: 'رؤيتنا', visionText: 'أن نكون الوكالة العقارية الأكثر ثقة في الإمارات، معروفين بالنزاهة والابتكار.',
        whyTitle: 'لماذا تختار', whyHighlight: 'جيد للعقارات؟',
        why1Title: 'عقارات موثقة', why1Desc: 'جميع القوائم موثقة ومتوافقة قانونياً',
        why2Title: 'أفضل أسعار السوق', why2Desc: 'أسعار تنافسية بشفافية كاملة',
        why3Title: 'خدمة مخصصة', why3Desc: 'حلول مصممة وفق احتياجاتك وميزانيتك',
        why4Title: 'دعم متكامل', why4Desc: 'مساعدة كاملة من البحث حتى التسليم',
        why5Title: 'رؤى السوق', why5Desc: 'تحديثات منتظمة حول اتجاهات السوق والفرص',
        why6Title: 'مشاهدة مرنة', why6Desc: 'جدول مواعيد المشاهدة على راحتك',
        ctaTitle: 'هل أنت مستعد للعثور على عقار أحلامك؟',
        ctaSub: 'دع فريق خبرائنا يساعدك في اكتشاف العقار المثالي',
        browse: 'تصفح العقارات', touchTitle: 'تواصل معنا',
        email: 'البريد الإلكتروني', phone: 'الهاتف', support: 'الدعم', supportVal: 'متاح 24/7',
        statProperties: 'عقار مدرج', statClients: 'عميل سعيد', statAgents: 'وكيل خبير', statExperience: 'سنوات خبرة',
    },
    contact: {
        sectionLabel: 'جيد للعقارات والاستثمار', title: 'اتصل بنا', subtitle: 'يسعدنا التواصل معك',
        sendMessage: 'أرسل رسالة', nameLabel: 'الاسم', emailLabel: 'البريد الإلكتروني', messageLabel: 'الرسالة',
        sendBtn: 'إرسال الرسالة', successMsg: '✅ تم إرسال الرسالة بنجاح!', errorMsg: '❌ حدث خطأ. يرجى المحاولة مرة أخرى.',
        getInTouch: 'تواصل معنا', phone: 'الهاتف', email: 'البريد الإلكتروني', address: 'العنوان',
        addressLine1: 'برج الغيث شارع حمدان', addressLine2: 'أبوظبي، الإمارات',
        orContact: 'أو تواصل معنا مباشرة', callUs: 'اتصل بنا', emailUs: 'راسلنا',
    },
    detail: {
        forSale: 'للبيع', description: 'الوصف', propertyDetails: 'تفاصيل العقار',
        features: 'المميزات والمرافق', location: 'الموقع', sendEnquiry: 'إرسال استفسار',
        fullName: 'الاسم الكامل', emailAddress: 'البريد الإلكتروني', phoneNumber: 'رقم الهاتف',
        message: 'الرسالة', messagePlaceholder: 'أنا مهتم بهذا العقار...',
        sendBtn: 'إرسال الاستفسار', successMsg: '✓ تم الإرسال! سنتواصل معك قريباً.',
        orContact: 'أو تواصل معنا مباشرة', callUs: 'اتصل بنا', emailUs: 'راسلنا',
        bedrooms: 'غرف النوم', bathrooms: 'الحمامات', area: 'المساحة', type: 'النوع',
        propType: 'نوع العقار', yearBuilt: 'سنة البناء', furnishing: 'التأثيث', status: 'الحالة', viewDetails: 'عرض التفاصيل',
    },
    services: {
        sectionLabel: 'خدماتنا',
        title: 'حلول عقارية مخصصة،', titleHighlight: 'مصممة للتميز',
        subtitle: 'سواء كنت مستثمراً أو مالكاً أو مطوراً أو مستأجراً، خدماتنا مصممة لتوفير القيمة والدقة وراحة البال.',
        includes: 'يشمل', notSure: 'غير متأكد من الخدمة المناسبة؟', talkExpert: 'تحدث إلى خبير',
        s1Title: 'مساعدة شراء العقارات', s1Tagline: 'اعثر على أكثر من مجرد منزل — اكتشف مستقبلك.', s1Desc: 'نساعد المشترين في إيجاد العقار المثالي مع توجيه الخبراء والتفاوض السلس.', s1i1: 'مطابقة عقارية مخصصة', s1i2: 'تحليل السوق ورؤى الأحياء', s1i3: 'دعم قانوني ومالي',
        s2Title: 'بيع وتسويق العقارات', s2Tagline: 'بع بذكاء. بع بأسلوب.', s2Desc: 'خدمة البيع تجمع بين التسويق المتميز والتسعير الاستراتيجي وشبكة المشترين الحصرية.', s2i1: 'تصوير احترافي وجولات فيديو', s2i2: 'حملات تسويقية عبر الإنترنت وخارجها', s2i3: 'إدارة التفاوض والمبيعات',
        s3Title: 'خدمات تأجير العقارات', s3Tagline: 'ربط المستأجرين بالمساحة المثالية.', s3Desc: 'سواء كنت مالكاً يبحث عن مستأجرين موثوقين أو مستأجراً يبحث عن مساحة مريحة، نبسط عملية التأجير.', s3i1: 'فحص المستأجرين', s3i2: 'توثيق عقود الإيجار', s3i3: 'دعم مستمر',
        s4Title: 'الاستشارات الاستثمارية', s4Tagline: 'حقق أقصى عائد استثماري بخطوات عقارية ذكية.', s4Desc: 'نقدم تحليلاً عميقاً للسوق ومشورة استراتيجية لمساعدتك في اتخاذ قرارات استثمارية مدروسة.', s4i1: 'استهداف العقارات عالية العائد', s4i2: 'تخطيط محفظة الاستثمار', s4i3: 'رؤى مشاريع على الخارطة',
        s5Title: 'إدارة العقارات', s5Tagline: 'ملكية بدون تعقيدات، أرباح بدون متاعب.', s5Desc: 'نوفر إدارة متكاملة للعقارات، من الصيانة إلى التواصل مع المستأجرين.', s5i1: 'تحصيل الإيجارات والتجديدات', s5i2: 'تنسيق صيانة العقار', s5i3: 'علاقات المستأجرين',
        s6Title: 'مشاريع على الخارطة وصفقات المطورين', s6Tagline: 'كن جزءاً مما هو قادم.', s6Desc: 'احصل على وصول مبكر لأكثر المشاريع واعدة في دبي من خلال تعاوننا المباشر مع المطورين.', s6i1: 'وصول أولوي للإطلاقات الجديدة', s6i2: 'مقارنة وتحليل المشاريع', s6i3: 'المساعدة في خطط الدفع والعقود',
    },
    mortgage: {
        sectionLabel: 'جيد للعقارات والاستثمار', title: 'حاسبة الرهن العقاري',
        subtitle: 'احسب أقساطك الشهرية وخطط لاستثمارك العقاري بثقة',
        propPrice: 'سعر العقار', downPayment: 'الدفعة الأولى', interestRate: 'معدل الفائدة السنوي', loanTerm: 'مدة القرض',
        monthlyPayment: 'القسط الشهري', perMonth: 'شهرياً لمدة', loanAmount: 'مبلغ القرض',
        downPaymentLabel: 'الدفعة الأولى', totalInterest: 'إجمالي الفائدة', overTerm: 'على مدار القرض',
        totalRepayment: 'إجمالي السداد', principalInterest: 'أصل + فائدة',
        breakdown: 'تفصيل المدفوعات', principal: 'الأصل', interest: 'الفائدة',
        upfront: 'مقدماً', ofPrice: '% من السعر', advisor: 'تحدث إلى مستشار الرهن',
        hint1: 'إجمالي سعر شراء العقار',
        hint2: 'الحد الأدنى في الإمارات عادةً 20% للمقيمين و15% للمواطنين',
        hint3: 'متوسط معدل الرهن في الإمارات حالياً 4-5%',
        hint4: 'الحد الأقصى للمدة في الإمارات عادةً 25 سنة',
        years: 'سنوات',
    },
    marquee: ['شراء وبيع وإيجار', 'مواقع متميزة', 'مجتمعات عائلية', 'خبراء العقارات', 'عقارات أبوظبي', 'عقارات دبي', 'فلل على الواجهة البحرية', 'عقارات استثمارية', 'مساحات تجارية', 'مشاريع على الخارطة'],
    common: { scrollDown: 'انتقل للأسفل' },
};

const ru: Translations = {
    nav: { home: 'Главная', about: 'О нас', properties: 'Недвижимость', services: 'Услуги', contact: 'Контакты' },
    home: {
        brandName: 'Jade Properties & Real Estate',
        heroTitle: 'Путь к современной жизни',
        heroHighlight: 'начинается здесь',
        heroSubtitle: 'Найдите недвижимость мечты с исключительным сервисом и непревзойдённым опытом',
        tabRent: 'АРЕНДА', tabBuy: 'КУПИТЬ', tabOffPlan: 'OFF-PLAN', tabCommercial: 'КОММЕРЧЕСКАЯ',
        locationPlaceholder: 'Город, район или область...',
        searchBtn: 'Найти недвижимость',
        advancedFilters: 'Расширенные фильтры', hideFilters: 'Скрыть фильтры', resetAll: 'Сбросить',
        listingsAvailable: '500+ объектов',
        priceRange: 'Ценовой диапазон', anyPrice: 'Любая цена',
        bedsBaths: 'Спальни и ванные', any: 'Любое', studio: 'Студия',
        propertyType: 'Тип недвижимости', anyType: 'Любой тип',
        apartment: 'Квартира', villa: 'Вилла', townhouse: 'Таунхаус', penthouse: 'Пентхаус',
        furnishing: 'Меблировка', furnished: 'С мебелью', unfurnished: 'Без мебели', semiFurnished: 'Частично меблирована',
        statProperties: 'Объектов в базе', statClients: 'Довольных клиентов', statAgents: 'Агентов-экспертов', statExperience: 'Лет опыта',
    },
    properties: {
        sectionLabel: 'Jade Properties & Real Estate', featured: 'Избранные объекты',
        featuredSub: 'Наша подборка исключительной недвижимости в лучших локациях',
        beds: 'Спальни', baths: 'Ванные', viewDetails: 'Подробнее', viewAll: 'Все объекты',
    },
    why: {
        sectionLabel: 'Jade Properties & Real Estate', title: 'Почему мы',
        subtitle: 'Мы воплощаем ваши мечты о недвижимости с исключительным сервисом',
        secureTitle: 'Безопасные сделки', secureDesc: '100% безопасные и прозрачные сделки',
        ratesTitle: 'Лучшие рыночные цены', ratesDesc: 'Конкурентные цены без скрытых комиссий',
        supportTitle: 'Поддержка 24/7', supportDesc: 'Помощь экспертов в любое время',
        financeTitle: 'Гибкое финансирование', financeDesc: 'Несколько вариантов оплаты',
        ctaTitle: 'Готовы найти недвижимость мечты?',
        ctaSubtitle: 'Изучите наши эксклюзивные предложения',
        browse: 'Смотреть объекты', contactUs: 'Связаться',
        statProperties: 'Объектов в базе', statClients: 'Довольных клиентов', statRating: 'Рейтинг клиентов', statExperience: 'Лет опыта',
    },
    allProperties: {
        sectionLabel: 'Jade Properties & Real Estate', title: 'Наши объекты',
        subtitle: 'Найдите идеальный дом из нашей эксклюзивной коллекции',
        searchLabel: 'Поиск объектов', searchPlaceholder: 'Поиск по названию или локации...',
        locationLabel: 'Локация', typeLabel: 'Тип недвижимости', reset: 'Сброс',
        showing: 'Показано', of: 'из', noFound: 'Объекты не найдены',
        noFoundSub: 'Попробуйте изменить фильтры или запрос', clearFilters: 'Очистить фильтры',
        beds: 'Спальни', baths: 'Ванные', viewDetails: 'Подробнее', all: 'Все', dubai: 'Дубай', abuDhabi: 'Абу-Даби',
    },
    about: {
        sectionLabel: 'О Jade Properties & Real Estate',
        heroTitle: 'Ваш надёжный партнёр в',
        heroHighlight: 'поиске идеальной недвижимости',
        heroSub: 'Мы упрощаем поиск, покупку и аренду исключительной недвижимости по всему ОАЭ',
        primeTitle: 'Лучшие локации', primeDesc: 'Объекты в самых востребованных районах Дубая и Абу-Даби',
        expertTitle: 'Экспертные консультации', expertDesc: 'Профессиональные агенты с глубокими знаниями рынка',
        secureTitle: 'Безопасные сделки', secureDesc: 'Безопасные и прозрачные сделки с недвижимостью',
        supportTitle: 'Поддержка 24/7', supportDesc: 'Всегда доступны для ответа на ваши вопросы',
        missionLabel: 'Наша миссия', missionText: 'Предоставлять исключительные услуги в сфере недвижимости, превосходящие ожидания. Мы помогаем найти не просто объект, а дом или инвестиционную возможность мечты.',
        visionLabel: 'Наше видение', visionText: 'Стать наиболее доверенным агентством недвижимости в ОАЭ, известным честностью, инновациями и долгосрочными отношениями с клиентами.',
        whyTitle: 'Почему выбирают', whyHighlight: 'Jade Properties?',
        why1Title: 'Проверенные объекты', why1Desc: 'Все объекты тщательно проверены и юридически соответствуют требованиям',
        why2Title: 'Лучшие рыночные цены', why2Desc: 'Конкурентные цены с полной прозрачностью',
        why3Title: 'Персональный сервис', why3Desc: 'Решения с учётом ваших потребностей и бюджета',
        why4Title: 'Комплексная поддержка', why4Desc: 'Полная помощь от поиска до передачи ключей',
        why5Title: 'Аналитика рынка', why5Desc: 'Регулярные обновления о тенденциях и возможностях',
        why6Title: 'Гибкий просмотр', why6Desc: 'Запланируйте просмотр в удобное для вас время',
        ctaTitle: 'Готовы найти недвижимость мечты?',
        ctaSub: 'Наша команда экспертов поможет найти идеальный объект',
        browse: 'Смотреть объекты', touchTitle: 'Связаться с нами',
        email: 'Email', phone: 'Телефон', support: 'Поддержка', supportVal: 'Доступно 24/7',
        statProperties: 'Объектов в базе', statClients: 'Довольных клиентов', statAgents: 'Агентов-экспертов', statExperience: 'Лет опыта',
    },
    contact: {
        sectionLabel: 'Jade Properties & Real Estate', title: 'Контакты', subtitle: 'Будем рады услышать вас',
        sendMessage: 'Отправить сообщение', nameLabel: 'Имя', emailLabel: 'Email', messageLabel: 'Сообщение',
        sendBtn: 'Отправить', successMsg: '✅ Сообщение успешно отправлено!', errorMsg: '❌ Что-то пошло не так. Попробуйте снова.',
        getInTouch: 'Связаться с нами', phone: 'Телефон', email: 'Email', address: 'Адрес',
        addressLine1: 'Башня Аль-Гейт, улица Хамдан', addressLine2: 'Абу-Даби, ОАЭ',
        orContact: 'Или свяжитесь напрямую', callUs: 'Позвонить', emailUs: 'Написать',
    },
    detail: {
        forSale: 'Продаётся', description: 'Описание', propertyDetails: 'Детали объекта',
        features: 'Характеристики и удобства', location: 'Местоположение', sendEnquiry: 'Отправить запрос',
        fullName: 'Полное имя', emailAddress: 'Email', phoneNumber: 'Телефон',
        message: 'Сообщение', messagePlaceholder: 'Меня интересует этот объект...',
        sendBtn: 'Отправить запрос', successMsg: '✓ Запрос отправлен! Мы свяжемся с вами.',
        orContact: 'Или свяжитесь напрямую', callUs: 'Позвонить', emailUs: 'Написать',
        bedrooms: 'Спальни', bathrooms: 'Ванные', area: 'Площадь', type: 'Тип',
        propType: 'Тип недвижимости', yearBuilt: 'Год постройки', furnishing: 'Меблировка', status: 'Статус', viewDetails: 'Подробнее',
    },
    services: {
        sectionLabel: 'Наши услуги',
        title: 'Индивидуальные решения в сфере недвижимости,', titleHighlight: 'созданные для успеха',
        subtitle: 'Будь вы инвестором, владельцем, застройщиком или арендатором — наши услуги обеспечивают ценность, точность и спокойствие.',
        includes: 'Включает', notSure: 'Не уверены, какая услуга подходит?', talkExpert: 'Поговорить с экспертом',
        s1Title: 'Помощь в покупке', s1Tagline: 'Найдите больше, чем просто дом — откройте своё будущее.', s1Desc: 'Помогаем покупателям найти идеальный объект с экспертным руководством и плавными переговорами.', s1i1: 'Персональный подбор объектов', s1i2: 'Анализ рынка и районов', s1i3: 'Юридическая и финансовая поддержка',
        s2Title: 'Продажа и маркетинг', s2Tagline: 'Продавайте умно. Продавайте стильно.', s2Desc: 'Наша служба продаж сочетает премиальный маркетинг, стратегическое ценообразование и эксклюзивную сеть покупателей.', s2i1: 'Профессиональная фото и видеосъёмка', s2i2: 'Онлайн и офлайн кампании', s2i3: 'Переговоры и управление продажами',
        s3Title: 'Аренда и лизинг', s3Tagline: 'Связываем арендаторов с идеальным пространством.', s3Desc: 'Упрощаем процесс аренды как для арендодателей, так и для арендаторов.', s3i1: 'Проверка арендаторов', s3i2: 'Оформление договоров', s3i3: 'Постоянная поддержка',
        s4Title: 'Инвестиционные консультации', s4Tagline: 'Максимизируйте ROI с умными инвестициями.', s4Desc: 'Предлагаем глубокий анализ рынка и стратегические советы для обоснованных инвестиционных решений.', s4i1: 'Поиск высокодоходных объектов', s4i2: 'Планирование инвестпортфеля', s4i3: 'Аналитика off-plan проектов',
        s5Title: 'Управление недвижимостью', s5Tagline: 'Владение без хлопот, прибыль без проблем.', s5Desc: 'Предоставляем комплексное управление недвижимостью от технического обслуживания до общения с арендаторами.', s5i1: 'Сбор арендной платы', s5i2: 'Координация технического обслуживания', s5i3: 'Работа с арендаторами',
        s6Title: 'Off-plan проекты и сделки от застройщиков', s6Tagline: 'Будьте частью будущего.', s6Desc: 'Получите ранний доступ к самым перспективным off-plan проектам в Дубае через наше прямое сотрудничество с застройщиками.', s6i1: 'Приоритетный доступ к новым запускам', s6i2: 'Сравнение и анализ проектов', s6i3: 'Помощь с планами оплаты и контрактами',
    },
    mortgage: {
        sectionLabel: 'Jade Properties & Real Estate', title: 'Ипотечный калькулятор',
        subtitle: 'Рассчитайте ежемесячные платежи и спланируйте инвестицию в недвижимость',
        propPrice: 'Стоимость объекта', downPayment: 'Первоначальный взнос', interestRate: 'Годовая процентная ставка', loanTerm: 'Срок кредита',
        monthlyPayment: 'Ежемесячный платёж', perMonth: 'в месяц на', loanAmount: 'Сумма кредита',
        downPaymentLabel: 'Первоначальный взнос', totalInterest: 'Общая сумма процентов', overTerm: 'за весь срок',
        totalRepayment: 'Общая сумма выплат', principalInterest: 'основной долг + проценты',
        breakdown: 'Структура платежей', principal: 'Основной долг', interest: 'Проценты',
        upfront: 'аванс', ofPrice: '% от стоимости', advisor: 'Связаться с ипотечным консультантом',
        hint1: 'Полная стоимость покупки объекта',
        hint2: 'Минимум в ОАЭ: 20% для экспатов, 15% для граждан ОАЭ',
        hint3: 'Средняя ставка по ипотеке в ОАЭ сейчас 4–5%',
        hint4: 'Максимальный срок в ОАЭ — 25 лет',
        years: 'лет',
    },
    marquee: ['Купить, продать и арендовать', 'Лучшие локации', 'Семейные комплексы', 'Эксперты в недвижимости', 'Недвижимость Абу-Даби', 'Недвижимость Дубая', 'Виллы на берегу', 'Инвестиционная недвижимость', 'Коммерческие помещения', 'Off-plan проекты'],
    common: { scrollDown: 'Прокрутить вниз' },
};

const zh: Translations = {
    nav: { home: '首页', about: '关于我们', properties: '房产', services: '我们的服务', contact: '联系我们' },
    home: {
        brandName: 'Jade Properties 房地产',
        heroTitle: '迈向现代生活的旅程',
        heroHighlight: '从这里开始',
        heroSubtitle: '以卓越的服务和无与伦比的专业知识，发现您梦想中的房产',
        tabRent: '租赁', tabBuy: '购买', tabOffPlan: '期房', tabCommercial: '商业',
        locationPlaceholder: '城市、社区或区域...',
        searchBtn: '搜索房产',
        advancedFilters: '高级筛选', hideFilters: '隐藏筛选', resetAll: '重置',
        listingsAvailable: '500+ 房源',
        priceRange: '价格范围', anyPrice: '任意价格',
        bedsBaths: '卧室和卫浴', any: '不限', studio: '开间',
        propertyType: '房产类型', anyType: '任意类型',
        apartment: '公寓', villa: '别墅', townhouse: '联排别墅', penthouse: '顶层公寓',
        furnishing: '装修状态', furnished: '精装', unfurnished: '毛坯', semiFurnished: '半精装',
        statProperties: '在售房产', statClients: '满意客户', statAgents: '资深经纪人', statExperience: '年从业经验',
    },
    properties: {
        sectionLabel: 'Jade Properties 房地产', featured: '精选房产',
        featuredSub: '探索我们在黄金地段精心挑选的优质房产',
        beds: '卧室', baths: '卫浴', viewDetails: '查看详情', viewAll: '查看所有房产',
    },
    why: {
        sectionLabel: 'Jade Properties 房地产', title: '为什么选择我们',
        subtitle: '我们以卓越的服务和无与伦比的专业知识，将您的置业梦想变为现实',
        secureTitle: '安全交易', secureDesc: '100%安全透明的房产交易',
        ratesTitle: '最优市场价格', ratesDesc: '极具竞争力的价格，无隐藏费用',
        supportTitle: '全天候支持', supportDesc: '随时为您提供专业协助',
        financeTitle: '灵活融资', financeDesc: '多种付款方式可选',
        ctaTitle: '准备好找到您梦想中的房产了吗？',
        ctaSubtitle: '探索我们的独家房源，让专家引导您找到完美家园',
        browse: '浏览房产', contactUs: '联系我们',
        statProperties: '在售房产', statClients: '满意客户', statRating: '客户评分', statExperience: '年从业经验',
    },
    allProperties: {
        sectionLabel: 'Jade Properties 房地产', title: '探索我们的房产',
        subtitle: '从我们的独家精选中找到您的完美家园',
        searchLabel: '搜索房产', searchPlaceholder: '按名称或地址搜索...',
        locationLabel: '地区', typeLabel: '房产类型', reset: '重置',
        showing: '显示', of: '共', noFound: '未找到房产',
        noFoundSub: '请尝试调整筛选条件或搜索关键词', clearFilters: '清除所有筛选',
        beds: '卧室', baths: '卫浴', viewDetails: '查看详情', all: '全部', dubai: '迪拜', abuDhabi: '阿布扎比',
    },
    about: {
        sectionLabel: '关于 Jade Properties 房地产',
        heroTitle: '您值得信赖的合作伙伴',
        heroHighlight: '寻找完美房产',
        heroSub: '我们以无与伦比的专业知识和个性化服务，轻松帮您在阿联酋寻找、购买和租赁优质房产',
        primeTitle: '优质地段', primeDesc: '迪拜和阿布扎比最受欢迎地区的房产',
        expertTitle: '专业指导', expertDesc: '具有深厚市场知识的专业经纪人',
        secureTitle: '安全交易', secureDesc: '安全透明的房产交易值得信赖',
        supportTitle: '全天候支持', supportDesc: '随时解答您的问题和顾虑',
        missionLabel: '我们的使命', missionText: '提供超出期望的卓越房地产服务。我们致力于帮助您找到不仅仅是一处房产，而是您梦想中的家园或投资机会。',
        visionLabel: '我们的愿景', visionText: '成为阿联酋最受信赖的房地产机构，以诚信、创新和与客户建立持久关系而著称。',
        whyTitle: '为什么选择', whyHighlight: 'Jade Properties？',
        why1Title: '认证房产', why1Desc: '所有房源均经过严格核实，合法合规',
        why2Title: '最优市场价格', why2Desc: '完全透明的竞争价格',
        why3Title: '个性化服务', why3Desc: '根据您的需求和预算量身定制方案',
        why4Title: '全程支持', why4Desc: '从房产搜索到最终交付的完整协助',
        why5Title: '市场洞察', why5Desc: '定期更新市场趋势和投资机会',
        why6Title: '灵活看房', why6Desc: '按您方便的时间安排看房',
        ctaTitle: '准备好找到您梦想中的房产了吗？',
        ctaSub: '让我们的专家团队帮您发现符合需求和预算的完美房产',
        browse: '浏览房产', touchTitle: '联系我们',
        email: '电子邮件', phone: '电话', support: '支持', supportVal: '24/7 全天候',
        statProperties: '在售房产', statClients: '满意客户', statAgents: '资深经纪人', statExperience: '年从业经验',
    },
    contact: {
        sectionLabel: 'Jade Properties 房地产', title: '联系我们', subtitle: '欢迎随时联系我们',
        sendMessage: '发送消息', nameLabel: '姓名', emailLabel: '电子邮件', messageLabel: '消息',
        sendBtn: '发送消息', successMsg: '✅ 消息发送成功！', errorMsg: '❌ 出现问题，请重试。',
        getInTouch: '联系我们', phone: '电话', email: '电子邮件', address: '地址',
        addressLine1: 'Al Ghaith塔 哈姆丹街', addressLine2: '阿布扎比，阿联酋',
        orContact: '或直接联系我们', callUs: '致电我们', emailUs: '发邮件给我们',
    },
    detail: {
        forSale: '出售', description: '描述', propertyDetails: '房产详情',
        features: '特色与设施', location: '位置', sendEnquiry: '发送询盘',
        fullName: '全名', emailAddress: '电子邮件', phoneNumber: '电话号码',
        message: '消息', messagePlaceholder: '我对这处房产感兴趣...',
        sendBtn: '发送询盘', successMsg: '✓ 询盘已发送！我们将尽快联系您。',
        orContact: '或直接联系我们', callUs: '致电我们', emailUs: '发邮件给我们',
        bedrooms: '卧室', bathrooms: '卫浴', area: '面积', type: '类型',
        propType: '房产类型', yearBuilt: '建造年份', furnishing: '装修状态', status: '状态', viewDetails: '查看详情',
    },
    services: {
        sectionLabel: '我们的服务',
        title: '量身定制的房地产解决方案，', titleHighlight: '专为卓越而设计',
        subtitle: '无论您是投资者、房主、开发商还是租户——我们的服务旨在提供价值、精确性和安心感。',
        includes: '包含', notSure: '不确定哪项服务适合您？', talkExpert: '咨询专家',
        s1Title: '购房协助', s1Tagline: '寻找超越房子的东西——发现您的未来。', s1Desc: '我们协助买家找到完美的住宅或商业房产，提供精选房源、专业指导和顺畅谈判。', s1i1: '个性化房产匹配', s1i2: '市场分析和社区洞察', s1i3: '可靠合作伙伴的法律和财务支持',
        s2Title: '房产销售与营销', s2Tagline: '精明出售，风格出售。', s2Desc: '我们的销售服务结合高端营销、战略定价和独家买家网络，以最佳方式展示您的房产。', s2i1: '专业摄影和视频导览', s2i2: '线上+线下营销活动', s2i3: '谈判和销售管理',
        s3Title: '房产租赁服务', s3Tagline: '连接租户与完美空间。', s3Desc: '无论您是寻找可靠租户的房东，还是寻找舒适空间的租户，我们都能简化租赁流程。', s3i1: '租户筛选', s3i2: '租约文件', s3i3: '持续支持',
        s4Title: '投资顾问', s4Tagline: '用聪明的房地产投资最大化您的回报。', s4Desc: '我们提供深入的市场分析和战略建议，帮助您做出明智的高收益投资决策。', s4i1: '以回报为导向的房产采购', s4i2: '投资组合规划', s4i3: '期房项目洞察',
        s5Title: '房产管理', s5Tagline: '免手动所有权，轻松获利。', s5Desc: '我们提供端到端的房产管理，处理从维护到租户沟通的一切事务。', s5i1: '租金收取和续签', s5i2: '房产维护协调', s5i3: '租户关系',
        s6Title: '期房项目和开发商优惠', s6Tagline: '成为未来的一部分。', s6Desc: '通过我们与开发商的直接合作，提前获得迪拜最有前景的期房项目。', s6i1: '优先获取新项目', s6i2: '项目比较和分析', s6i3: '协助付款计划和合同',
    },
    mortgage: {
        sectionLabel: 'Jade Properties 房地产', title: '房贷计算器',
        subtitle: '估算每月还款额，自信规划您的房产投资',
        propPrice: '房产价格', downPayment: '首付款', interestRate: '年利率', loanTerm: '贷款期限',
        monthlyPayment: '月还款额', perMonth: '每月，共', loanAmount: '贷款金额',
        downPaymentLabel: '首付款', totalInterest: '总利息', overTerm: '贷款期内',
        totalRepayment: '总还款额', principalInterest: '本金 + 利息',
        breakdown: '还款结构', principal: '本金', interest: '利息',
        upfront: '首付', ofPrice: '%的房价', advisor: '咨询房贷顾问',
        hint1: '房产总购买价格',
        hint2: '阿联酋最低首付：外籍人士20%，阿联酋公民15%',
        hint3: '阿联酋当前平均房贷利率4-5%',
        hint4: '阿联酋最长贷款期限通常为25年',
        years: '年',
    },
    marquee: ['买卖租赁', '黄金地段', '家庭社区', '房产专家', '阿布扎比房产', '迪拜房产', '海滨别墅', '投资房产', '商业空间', '期房项目'],
    common: { scrollDown: '向下滚动' },
};

export const translations: Record<Language, Translations> = { en, ar, ru, zh };

// ─────────────────────────────────────────────
// CONTEXT
// ─────────────────────────────────────────────

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        return (localStorage.getItem('jade_lang') as Language) || 'en';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('jade_lang', lang);
        // Arabic is RTL
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    };

    useEffect(() => {
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            t: translations[language],
            isRTL: language === 'ar',
        }
        }>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
};