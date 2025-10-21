export const articles = [
    {
        id: 1,
        title: "روتين العناية بالبشرة الدهنية: دليلك الكامل",
        author: "نورة محمد",
        date: "5 أكتوبر 2025",
        excerpt: "البشرة الدهنية تتطلب عناية خاصة. في هذا المقال، نستعرض أفضل المكونات والمنتجات للحفاظ على بشرة متوازنة وخالية من اللمعان.",
        image: "https://images.unsplash.com/photo-1556228852-6d45a7d8323e?q=80&w=1964&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "أسرار المكياج الطبيعي لإطلالة يومية مشرقة",
        author: "سارة عبدالله",
        date: "2 أكتوبر 2025",
        excerpt: "تعلمي كيفية تطبيق مكياج طبيعي يبرز جمالك دون مبالغة. خطوات بسيطة لأساس مثالي، حواجب محددة، ولمسة من اللون.",
        image: "https://images.unsplash.com/photo-1620916298379-2475a8a10523?q=80&w=1964&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "حمض الهيالورونيك: السحر في زجاجة لترطيب فائق",
        author: "فاطمة علي",
        date: "28 سبتمبر 2025",
        excerpt: "لماذا يعتبر حمض الهيالورونيك مكوناً أساسياً في كل روتين؟ اكتشفي فوائده المذهلة وكيفية استخدامه للحصول على بشرة ممتلئة وندية.",
        image: "https://images.unsplash.com/photo-1629198735660-e39ea99a4339?q=80&w=1965&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "أفضل 5 واقيات شمس لا تترك أثراً أبيض",
        author: "جمالكِ الذكي",
        date: "25 سبتمبر 2025",
        excerpt: "الحماية من الشمس هي أهم خطوة. قمنا بتجميع قائمة بأفضل أنواع واقيات الشمس التي تناسب جميع أنواع البشرة وتوفر حماية فعالة.",
        image: "https://images.unsplash.com/photo-1599999903936-36c1da517a94?q=80&w=1935&auto=format&fit=crop"
    }
];

export const quizQuestions = [
    {
        question: "لنبدأ بالأساس، ما هو نوع بشرتكِ في الغالب؟",
        key: "skinType",
        options: [
            { text: "جافة", icon: "wind" },
            { text: "دهنية", icon: "droplets" },
            { text: "مختلطة", icon: "blend" },
            { text: "حساسة", icon: "flower-2" }
        ],
        type: "single"
    },
    {
        question: "ما هي أبرز المشاكل التي تودين معالجتها؟ (اختاري حتى 3)",
        key: "skinConcerns",
        options: [
            { text: "حب الشباب والبثور", icon: "dot" },
            { text: "الجفاف والتقشر", icon: "leaf" },
            { text: "التجاعيد والخطوط الدقيقة", icon: "git-commit" },
            { text: "التصبغات والبقع الداكنة", icon: "paint-bucket" },
            { text: "المسامات الواسعة", icon: "circle-dashed" },
            { text: "الهالات السوداء", icon: "moon" }
        ],
        type: "multiple",
        max: 3
    },
    {
        question: "ما هي اهتماماتكِ الرئيسية في عالم الجمال؟",
        key: "interests",
        options: [
            { text: "منتجات طبيعية وعضوية", icon: "vegan" },
            { text: "مكافحة علامات الشيخوخة", icon: "activity" },
            { text: "حلول سريعة وفعالة", icon: "zap" },
            { text: "أحدث التقنيات والصيحات", icon: "sparkles" }
        ],
        type: "multiple",
        max: 2
    }
];

export const forumTopics = [
    {
        id: 1,
        title: "ما هو أفضل واقي شمس للبشرة الحساسة؟",
        author: "ريما",
        replies: 12,
        views: 145,
        lastReply: "قبل ساعة"
    },
    {
        id: 2,
        title: "تجربتي مع سيروم فيتامين سي من ماركة X",
        author: "لمى",
        replies: 8,
        views: 98,
        lastReply: "قبل 5 ساعات"
    },
    {
        id: 3,
        title: "مساعدة! كيف أختار لون كريم الأساس المناسب أونلاين؟",
        author: "هند",
        replies: 25,
        views: 302,
        lastReply: "قبل يوم"
    },
    {
        id: 4,
        title: "نقاش: هل الريتينول يستحق كل هذه الضجة؟",
        author: "سارة",
        replies: 31,
        views: 450,
        lastReply: "قبل يومين"
    }
];
