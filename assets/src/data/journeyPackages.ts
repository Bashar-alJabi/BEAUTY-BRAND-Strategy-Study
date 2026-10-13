/**
 * RUYA concept portfolio — source of truth for the seven curated packages.
 * Customer-facing: precisely 2 care + 2 makeup products.
 * Delight is an INTERNAL post-purchase reveal: never show it in product listings,
 * checkout copy, public advertisements or pre-purchase previews.
 */
export type DelightChoice = {
  name: string;
  connection: string;
  cardInstruction: string;
};

export type RuyaJourneyPackage = {
  title: string;
  context: string;
  mood: string;
  result: string;
  care: readonly [string, string];
  makeup: readonly [string, string];
  delight: {
    discovery: DelightChoice;
    bite: DelightChoice;
    perfume: DelightChoice;
  };
};

export const JOURNEY_PACKAGES: readonly RuyaJourneyPackage[] = [
  {
    title: 'Everyday Glow',
    context: 'EVERYDAY / QUICK READY',
    mood: 'Fresh · Natural · Effortless',
    result: 'إطلالة يومية ناعمة ومنتعشة بخطوات بسيطة ومنتجات متناسقة.',
    care: ['Lightweight Facial Moisturizer', 'Anti-Frizz Hair Serum'],
    makeup: ['Cream Blush', 'Lip Gloss'],
    delight: {
      discovery: {
        name: 'Mini Highlighter',
        connection: 'لمسة إشراق إضافية تسمح بالانتقال من اللوك اليومي إلى Evening Glow.',
        cardInstruction: 'ضعي كمية صغيرة على أعلى الخدين بعد البلاشر لإضافة لمعة ناعمة عند الرغبة.',
      },
      bite: {
        name: 'Mini Oat & Cocoa Cookie',
        connection: 'لقمة خفيفة تناسب بداية يوم بسيطة وسريعة.',
        cardInstruction: 'استمتعي بها خلال استراحة صغيرة بعد الانتهاء من روتينك اليومي.',
      },
      perfume: {
        name: 'Fresh Floral Perfume Sample',
        connection: 'رائحة خفيفة تكمل الإحساس بالانتعاش اليومي.',
        cardInstruction: 'جرّبي العينة كلمسة نهائية بعد الاستعداد ليومك.',
      },
    },
  },
  {
    title: 'Date Night Ready',
    context: 'DATE / DINNER',
    mood: 'Soft · Romantic · Warm',
    result: 'إطلالة رومانسية ناعمة ترتكز على لون الشفاه وعمق العيون.',
    care: ['Hydrating Face Mask', 'Hair Smoothing Cream'],
    makeup: ['Satin Rouge', 'Soft Eyeshadow Quad'],
    delight: {
      discovery: {
        name: 'Mini Liquid Highlighter',
        connection: 'يضيف لمسة Luminous إلى إطلالة الموعد دون تغيير طابعها الناعم.',
        cardInstruction: 'أضيفي نقطة صغيرة إلى أعلى الخدين بعد إكمال المكياج للحصول على Glow خفيف.',
      },
      bite: {
        name: 'Premium Dark Chocolate',
        connection: 'قطعة صغيرة تناسب أجواء الموعد أو العشاء.',
        cardInstruction: 'احتفظي بها للحظة استمتاع قصيرة قبل الخروج أو بعده.',
      },
      perfume: {
        name: 'Soft Amber Perfume Sample',
        connection: 'نفحات دافئة تتوافق مع أجواء الـDate Night.',
        cardInstruction: 'اختبري العطر كلمسة أخيرة قبل الخروج إذا كان مناسباً لذوقك.',
      },
    },
  },
  {
    title: 'Wedding Glam',
    context: 'WEDDING / CELEBRATION',
    mood: 'Elegant · Refined · Long-Wear',
    result: 'قاعدة أنيقة وتحديد للرموش، مع تحضير البشرة والشعر للمناسبة.',
    care: ['Lightweight Facial Moisturizer', 'Anti-Frizz Hair Serum'],
    makeup: ['Long-Wear Foundation', 'Waterproof Mascara'],
    delight: {
      discovery: {
        name: 'Mini Lip Gloss',
        connection: 'يفتح خياراً لإضافة بريق ناعم للشفاه في إطلالة المناسبة.',
        cardInstruction: 'استخدميه بعد Rouge مناسب لإضافة لمعة احتفالية أو جرّبيه وحده.',
      },
      bite: {
        name: 'Elegant Mini Praline',
        connection: 'تفصيل صغير يعكس طابع المناسبة الاحتفالي.',
        cardInstruction: 'احتفظي بها للاستمتاع بلحظة صغيرة من أجواء الاحتفال.',
      },
      perfume: {
        name: 'Floral-Musk Perfume Sample',
        connection: 'لمسة عطرية ناعمة تكمل أناقة المناسبة.',
        cardInstruction: 'جرّبي العينة كإضافة نهائية بعد الاستعداد للمناسبة.',
      },
    },
  },
  {
    title: 'Beach & Pool Ready',
    context: 'BEACH / POOL / SUMMER',
    mood: 'Bronzed · Fresh · Swim-Ready',
    result: 'مظهر صيفي برونزي خفيف مع عناية بالشعر وإطلالة تناسب أجواء السباحة.',
    care: ['Bronzing Body Oil', 'Protective Swimming Hair Cream'],
    makeup: ['Waterproof Mascara', 'Water-Resistant Rouge'],
    delight: {
      discovery: {
        name: 'Mini After-Sun Gel',
        connection: 'إضافة مرتبطة بالاسترخاء والعناية بعد يوم البحر أو المسبح.',
        cardInstruction: 'استخدمي الجل بعد العودة من البحر أو المسبح ضمن روتين العناية بعد السباحة.',
      },
      bite: {
        name: 'Wrapped Coconut Bite',
        connection: 'نكهة صيفية تكمل أجواء البحر والإجازة.',
        cardInstruction: 'استمتعي بالقطعة خلال استراحة في يومك الصيفي.',
      },
      perfume: {
        name: 'Fresh Aquatic Perfume Sample',
        connection: 'رائحة منعشة مستوحاة من الأجواء البحرية.',
        cardInstruction: 'استخدمي العينة بعد السباحة والاستحمام لإكمال الـSummer Mood.',
      },
    },
  },
  {
    title: 'Professional Confidence',
    context: 'WORK / PROFESSIONAL',
    mood: 'Polished · Practical · Confident',
    result: 'مظهر عملي مرتب بلمسات مكياج واضحة وغير متكلفة.',
    care: ['Lightweight Facial Moisturizer', 'Non-Greasy Hand Cream'],
    makeup: ['Concealer', 'Neutral Rouge'],
    delight: {
      discovery: {
        name: 'Mini Lip Gloss',
        connection: 'خيار سريع لتجديد اللوك بعد العمل أو قبل موعد مسائي.',
        cardInstruction: 'أضيفيه فوق الروج المحايد عند الرغبة في تحويل الإطلالة بعد ساعات العمل.',
      },
      bite: {
        name: 'Date & Oat Bite',
        connection: 'لقمة صغيرة وعملية تناسب استراحة يوم العمل.',
        cardInstruction: 'احتفظي بها لاستراحة قصيرة خلال اليوم.',
      },
      perfume: {
        name: 'Clean Musk Perfume Sample',
        connection: 'رائحة هادئة تناسب الأجواء المهنية اليومية.',
        cardInstruction: 'جرّبي العينة بكمية خفيفة كلمسة نهائية قبل يوم العمل.',
      },
    },
  },
  {
    title: 'Party & Night Out',
    context: 'PARTY / NIGHT OUT',
    mood: 'Bold · Defined · Expressive',
    result: 'تركيز على تحديد العيون وألوانها لإطلالة واضحة وجريئة.',
    care: ['Hydrating Face Mask', 'Hair Styling Cream'],
    makeup: ['Bold Eyeshadow Palette', 'Precision Eyeliner'],
    delight: {
      discovery: {
        name: 'Mini Shimmer Highlighter',
        connection: 'يضيف بعداً لامعاً يناسب إضاءة الحفلات والسهرات.',
        cardInstruction: 'طبّقي لمسة صغيرة على أعلى الخدين عند الرغبة في Glow أقوى.',
      },
      bite: {
        name: 'Dark Chocolate Truffle',
        connection: 'قطعة غنية تكمل الاستعداد لأجواء السهرة.',
        cardInstruction: 'استمتعي بها كلحظة لطيفة ضمن التحضيرات قبل السهرة.',
      },
      perfume: {
        name: 'Warm Oriental Perfume Sample',
        connection: 'نفحات عميقة تتناغم مع الـBold Night-Out Mood.',
        cardInstruction: 'استخدمي العينة بعد إنهاء الـLook كلمسة عطرية للسهرات.',
      },
    },
  },
  {
    title: 'Travel Beauty Edit',
    context: 'TRAVEL / ON THE GO',
    mood: 'Compact · Versatile · Ready',
    result: 'أساسيات مختصرة للعناية والنظافة والمكياج أثناء التنقل.',
    care: ['Travel-Size Shampoo', 'Travel-Size Shower Gel'],
    makeup: ['Multi-Use Lip & Cheek Tint', 'Mini Mascara'],
    delight: {
      discovery: {
        name: 'Mini Hair Serum',
        connection: 'إضافة صغيرة للعناية بمظهر الشعر خلال السفر.',
        cardInstruction: 'استخدمي كمية صغيرة على أطراف الشعر عند الحاجة خلال الرحلة.',
      },
      bite: {
        name: 'Individually Wrapped Mini Cookie',
        connection: 'لقمة صغيرة وسهلة الحمل تناسب التنقل.',
        cardInstruction: 'احتفظي بها لاستراحة في الطريق أو خلال السفر.',
      },
      perfume: {
        name: 'Travel Perfume Vial',
        connection: 'تجربة عطرية صغيرة تتناسب مع فكرة التنقل.',
        cardInstruction: 'جرّبي العينة كلمسة نهائية خلال أيام الرحلة.',
      },
    },
  },
];

/** Exactly four advertised products per Essential Journey. */
export function getVisibleProducts(journey: RuyaJourneyPackage) {
  return [
    { category: 'Care' as const, name: journey.care[0] },
    { category: 'Care' as const, name: journey.care[1] },
    { category: 'Makeup' as const, name: journey.makeup[0] },
    { category: 'Makeup' as const, name: journey.makeup[1] },
  ];
}

export const JOURNEY_EXPANSION_NOTE =
  'مع إمكانية توسيع الباكج مستقبلاً ليضم منتجات إضافية تناسب احتياجات كل Journey.';
