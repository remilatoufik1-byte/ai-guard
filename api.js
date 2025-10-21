const API_KEY = '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';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function getBeautyAdvice(answers) {
    const { skinType, skinConcerns, interests } = answers;

    const prompt = `
        أنتِ خبيرة تجميل وعناية بالبشرة في منصة "جمالكِ الذكي".
        مستخدمة أكملت استبيان تحليل البشرة وهذه هي إجاباتها:
        - نوع البشرة: ${skinType}
        - المشاكل الرئيسية: ${skinConcerns.join(', ')}
        - الاهتمامات: ${interests.join(', ')}

        بناءً على هذه المعلومات، قدمي لها خطة عناية بالبشرة مخصصة ومفصلة.
        يجب أن تكون الخطة منظمة بشكل جيد وأن تتضمن:
        1.  **روتين صباحي**: قائمة بالخطوات (مثل غسول، تونر، سيروم، مرطب، واقي شمس) مع شرح بسيط لسبب أهمية كل خطوة لنوع بشرتها ومشاكلها. اقترحي أنواع المكونات الفعالة التي يجب أن تبحث عنها في كل منتج (مثال: "ابحثي عن غسول يحتوي على حمض الساليسيليك...").
        2.  **روتين مسائي**: قائمة بالخطوات مع شرح مماثل للروتين الصباحي.
        3.  **نصائح إضافية**: قدمي 2-3 نصائح إضافية مخصصة لها (مثال: "نظرًا لاهتمامك بمكافحة الشيخوخة، نوصي بإضافة الريتينول لروتينك المسائي مرتين في الأسبوع.").
        
        اكتبي الرد باللغة العربية بأسلوب ودود، احترافي، ومشجع. استخدمي تنسيق Markdown لتقسيم النص وجعله سهل القراءة (استخدمي العناوين والقوائم النقطية).
    `;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'deepseek/deepseek-chat-v3-0324:free',
                messages: [{ role: 'user', content: prompt }],
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        console.error("Error fetching beauty advice:", error);
        return "عذراً، حدث خطأ أثناء إنشاء توصيتك الشخصية. يرجى المحاولة مرة أخرى لاحقاً.";
    }
}
