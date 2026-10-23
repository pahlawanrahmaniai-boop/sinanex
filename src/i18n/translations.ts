export type Language = 'en' | 'fa';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    products: string;
    about: string;
    principles: string;
    contact: string;
  };
  hero: {
    badge: string;
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    previewTitle: string;
    draftTab: string;
    aiTab: string;
    draftText: string;
    aiText: string;
    metric: string;
  };
  product: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    downloadLabel: string;
  };
  about: {
    title: string;
    text: string;
    badge: string;
  };
  principles: {
    title: string;
    items: {
      number: string;
      title: string;
      text: string;
    }[];
  };
  contact: {
    title: string;
    text: string;
    emailTitle: string;
    copy: string;
    copied: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    note: string;
  };
  footer: {
    tagline: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  modals: {
    comingSoon: {
      title: string;
      text: string;
      close: string;
    };
    legal: {
      privacyTitle: string;
      termsTitle: string;
      privacyText: string[];
      termsText: string[];
      close: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    meta: {
      title: 'SinaNex | AI Products',
      description: 'SinaNex builds simple, intelligent applications. Discover 7CV, our smart AI resume builder.',
    },
    nav: {
      products: 'Products',
      about: 'About',
      principles: 'Principles',
      contact: 'Contact',
    },
    hero: {
      badge: 'AI Product Company',
      headline: 'Smart apps for your daily life.',
      subtext: 'We build simple, easy-to-use AI tools that save you time and make hard tasks easy.',
      primaryCta: 'Explore 7CV',
      secondaryCta: 'Contact Us',
      previewTitle: '7CV AI Resume Polish',
      draftTab: 'Before',
      aiTab: 'With 7CV AI',
      draftText: 'Managed customer emails and helped team update files.',
      aiText: 'Managed 40+ client accounts and reduced issue resolution time by 34%.',
      metric: 'ATS Score: 98%',
    },
    product: {
      badge: 'Flagship Product',
      title: '7CV',
      subtitle: 'Smart AI Resume Builder',
      description: 'Make a professional resume in minutes. 7CV uses AI to write stronger bullet points, match job descriptions, and export clean, ready-to-send PDF resumes.',
      points: [
        'Build a complete resume with AI guidance',
        'Match keywords from any job posting',
        'Turn basic tasks into strong achievements',
        'Clean, recruiter-approved PDF format',
      ],
      downloadLabel: 'Get it on your mobile device:',
    },
    about: {
      title: 'About SinaNex',
      text: 'We are an independent software company. We focus 100% on building and running our own AI products. We do not do client agency work, outsourcing, or custom consulting.',
      badge: 'Independent Product Studio',
    },
    principles: {
      title: 'Our Principles',
      items: [
        {
          number: '01',
          title: 'Useful',
          text: 'AI should solve real everyday problems, not add complexity.',
        },
        {
          number: '02',
          title: 'Simple',
          text: 'Our products are clean, intuitive, and easy for anyone to use.',
        },
        {
          number: '03',
          title: 'Always Improving',
          text: 'We continuously listen to users and update our products regularly.',
        },
      ],
    },
    contact: {
      title: 'Get in Touch',
      text: 'Have a question, feedback, or idea? We would love to hear from you.',
      emailTitle: 'Email us directly',
      copy: 'Copy',
      copied: 'Copied!',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'name@example.com',
      message: 'Message',
      messagePlaceholder: 'What can we help you with?',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Thanks! Your note has been received.',
      note: 'SinaNex develops its own products and does not accept client outsourcing.',
    },
    footer: {
      tagline: 'Simple, intelligent software for everyone.',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    modals: {
      comingSoon: {
        title: 'Coming Soon to App Store',
        text: '7CV is currently in the final review process for this store. Links will be active once approved.',
        close: 'Got it',
      },
      legal: {
        privacyTitle: 'Privacy Policy',
        termsTitle: 'Terms of Use',
        privacyText: [
          '1. Privacy First: We respect your privacy. We only process data necessary to provide our resume tools.',
          '2. No Selling: We never sell or share your personal documents or email with third-party advertisers.',
          '3. Security: All data transmissions are encrypted using standard HTTPS protocol.',
          '4. Contact: For privacy questions, write to contact@sinanex.com.',
        ],
        termsText: [
          '1. Terms: By using sinanex.com and our products, you agree to these simple terms.',
          '2. Ownership: All software and designs belong to SinaNex. We build proprietary software.',
          '3. Review: You are responsible for reviewing resumes generated with our tools before sending them to employers.',
          '4. Contact: Reach us at contact@sinanex.com.',
        ],
        close: 'Close',
      },
    },
  },
  fa: {
    meta: {
      title: 'سینانکس | محصولات هوشمند هوش مصنوعی',
      description: 'سینانکس برنامه‌های کاربردی و هوشمند می‌سازد. با 7CV، رزومه‌ساز هوش مصنوعی ما آشنا شوید.',
    },
    nav: {
      products: 'محصولات',
      about: 'درباره ما',
      principles: 'اصول ما',
      contact: 'تماس',
    },
    hero: {
      badge: 'شرکت محصولات هوش مصنوعی',
      headline: 'برنامه‌های هوشمند برای کارهای روزمره',
      subtext: 'ما ابزارهای ساده و کاربردی مبتنی بر هوش مصنوعی می‌سازیم تا کارهایتان سریع‌تر و آسان‌تر انجام شوند.',
      primaryCta: 'آشنایی با 7CV',
      secondaryCta: 'تماس با ما',
      previewTitle: 'بهبود رزومه با 7CV',
      draftTab: 'قبل از بهینه‌سازی',
      aiTab: 'با هوش مصنوعی 7CV',
      draftText: 'پاسخگویی به ایمیل‌های مشتریان و کمک به به‌روزرسانی فایل‌های تیم.',
      aiText: 'مدیریت بیش از ۴۰ حساب مشتری و کاهش ۳۴ درصدی زمان پاسخگویی.',
      metric: 'تطابق با استانداردهای استخدام: ۹۸٪',
    },
    product: {
      badge: 'محصول شاخص',
      title: '7CV',
      subtitle: 'رزومه‌ساز هوشمند با هوش مصنوعی',
      description: 'رزومه کاری خود را در چند دقیقه بسازید. 7CV با هوش مصنوعی متن سوابق شما را تقویت می‌کند، آن را با آگهی استخدام هماهنگ می‌سازد و فایل تمیز PDF تحویل می‌دهد.',
      points: [
        'ساخت آسان رزومه با راهنمایی گام‌به‌گام',
        'تطبیق خودکار با کلمات کلیدی هر آگهی شغلی',
        'تبدیل جملات ساده به دستاوردهای دارای عدد و درصد',
        'خروجی استاندارد PDF مورد تایید کارفرمایان',
      ],
      downloadLabel: 'دریافت نسخه موبایل:',
    },
    about: {
      title: 'درباره سینانکس',
      text: 'ما یک شرکت نرم‌افزاری مستقل هستیم. تمرکز کامل ما روی تولید و اداره محصولات نرم‌افزاری خودمان است و هیچ‌گونه کار پروژه‌ای، پیمانکاری یا سفارشی برای مشتریان انجام نمی‌دهیم.',
      badge: 'تولیدکننده مستقل محصول',
    },
    principles: {
      title: 'اصول کاری ما',
      items: [
        {
          number: '۰۱',
          title: 'کاربردی',
          text: 'هوش مصنوعی باید مشکلات واقعی را حل کند، نه اینکه کارها را پیچیده‌تر کند.',
        },
        {
          number: '۰۲',
          title: 'ساده و آسان',
          text: 'محصولات ما ساده، خلوت و برای همه به راحتی قابل استفاده‌اند.',
        },
        {
          number: '۰۳',
          title: 'بهبود مداوم',
          text: 'ما همیشه به نظرات کاربران گوش می‌دهیم و برنامه‌ها را به‌روز می‌کنیم.',
        },
      ],
    },
    contact: {
      title: 'ارتباط با ما',
      text: 'پرسش، پیشنهاد یا نظری دارید؟ مشتاقانه پاسخگوی شما هستیم.',
      emailTitle: 'ایمیل مستقیم',
      copy: 'کپی',
      copied: 'کپی شد!',
      name: 'نام شما',
      namePlaceholder: 'علی محمدی',
      email: 'ایمیل',
      emailPlaceholder: 'name@example.com',
      message: 'پیام',
      messagePlaceholder: 'پیام خود را بنویسید...',
      send: 'ارسال پیام',
      sending: 'در حال ارسال...',
      success: 'پیام شما دریافت شد. متشکریم!',
      note: 'سینانکس فقط محصولات خود را می‌سازد و سفارش‌های پروژه‌ای نمی‌پذیرد.',
    },
    footer: {
      tagline: 'نرم‌افزارهای هوشمند و آسان برای همه.',
      rights: 'تمامی حقوق محفوظ است.',
      privacy: 'حریم خصوصی',
      terms: 'شرایط استفاده',
    },
    modals: {
      comingSoon: {
        title: 'به‌زودی در استورها',
        text: 'سامانه 7CV در مرحله بررسی نهایی انتشار است. پس از تایید لینک دانلود فعال خواهد شد.',
        close: 'متوجه شدم',
      },
      legal: {
        privacyTitle: 'سیاست حفظ حریم خصوصی',
        termsTitle: 'شرایط استفاده',
        privacyText: [
          '۱. احترام به حریم خصوصی: ما تنها اطلاعات لازم برای ساخت و ارتقای رزومه را پردازش می‌کنیم.',
          '۲. عدم فروش داده‌ها: اطلاعات یا اسناد شما هرگز به شرکت‌های تبلیغاتی واگذار نمی‌شود.',
          '۳. امنیت کامل: کلیه ارتباطات به صورت استاندارد با پروتکل امن HTTPS انجام می‌شود.',
          '۴. تماس: برای پرسش‌های حریم خصوصی با contact@sinanex.com در تماس باشید.',
        ],
        termsText: [
          '۱. شرایط کلی: استفاده از سایت و برنامه‌ها به منزله پذیرش این شرایط است.',
          '۲. مالکیت محصولات: تمامی نرم‌افزارها متعلق به سینانکس هستند. ما کار پیمانکاری انجام نمی‌دهیم.',
          '۳. بازبینی نهایی: بررسی نهایی متن رزومه‌ها قبل از ارسال به کارفرما بر عهده کاربر است.',
          '۴. ارتباط: نشانی ارتباطی ما contact@sinanex.com است.',
        ],
        close: 'بستن',
      },
    },
  },
};
