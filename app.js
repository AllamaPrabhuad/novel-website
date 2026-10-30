/* Novel website logic. Content and links live in config.js. */
(() => {

/* ---------- Hindi text (English text → Hindi) ---------- */
const HI = {
  // new sections
  "packs reaching Indian homes today":"पैक आज भारतीय घरों तक पहुँच रहे हैं",
  "Estimate based on our average of 2 million packs a month":"हर महीने औसतन 20 लाख पैक के आधार पर अनुमान",
  "What's inside":"अंदर क्या है", "Nothing hidden. Tap to see what's inside.":"कुछ भी छिपा नहीं। टैप करें और देखें अंदर क्या है।",
  "Key ingredients in each Novel product, explained in plain words. The full list is printed on every pack.":"हर Novel प्रोडक्ट के मुख्य तत्व, आसान शब्दों में। पूरी सूची हर पैक पर छपी है।",
  "Key ingredients":"मुख्य तत्व", "Free from":"इनसे मुक्त", "Fragrance":"ख़ुशबू", "Tap an ingredient to learn what it does.":"किसी तत्व पर टैप करें और जानें वह क्या करता है।",
  "The wipe test":"वाइप टेस्ट", "Pull it. Stretch it. It holds.":"खींचें। फैलाएँ। फिर भी मज़बूत।",
  "Novel wipes are extra thick and stay moist to the last sheet, thanks to the resealable lid. Try it below.":"Novel वाइप्स एक्स्ट्रा थिक हैं और रीसील ढक्कन की वजह से आख़िरी शीट तक नम रहते हैं। नीचे आज़माएँ।",
  "Pull the wipe":"वाइप खींचें", "Squeeze":"निचोड़ें", "Extra thick":"एक्स्ट्रा थिक", "Stays moist":"नम रहता है", "Soft on skin":"त्वचा पर मुलायम",
  "A thick sheet for a confident clean.":"भरोसेमंद सफ़ाई के लिए मोटी शीट।", "The resealable lid locks moisture in.":"रीसील ढक्कन नमी बंद रखता है।",
  "Gentle enough for newborn skin.":"नवजात की त्वचा के लिए भी कोमल।", "Illustration of the wipe for demonstration.":"समझाने के लिए वाइप का चित्रण।",
  "Gentle pull":"हल्का खिंचाव", "Stretching…":"खिंच रहा है…", "Still in one piece ✓":"अब भी एक टुकड़े में ✓", "Moisture you can see":"दिखने वाली नमी",
  "What parents say":"माता-पिता क्या कहते हैं", "Rated by lakhs of parents.":"लाखों माता-पिता ने रेटिंग दी।",
  "ratings across Flipkart, Amazon and Meesho":"Flipkart, Amazon और Meesho पर रेटिंग",
  "Your little moments make our day.":"आपके नन्हे पल, हमारी सबसे बड़ी ख़ुशी।",
  "Share a photo of your baby's Novel moment. Every month we feature our favourites here.":"अपने शिशु के Novel पल की फ़ोटो शेयर करें। हर महीने हम अपनी पसंदीदा फ़ोटो यहाँ दिखाते हैं।",
  "Share on Instagram":"Instagram पर शेयर करें", "Send on WhatsApp":"WhatsApp पर भेजें",
  "We only feature photos with the parent's permission.":"हम सिर्फ़ माता-पिता की अनुमति से ही फ़ोटो दिखाते हैं।",
  "Weekly tips on WhatsApp":"WhatsApp पर साप्ताहिक टिप्स", "A little help every week, made for your baby's age.":"हर हफ़्ते थोड़ी मदद, आपके शिशु की उम्र के हिसाब से।",
  "Pick your baby's age to see a sample tip. Tap the button and we'll send one every week on WhatsApp. Ask us to stop anytime.":"सैंपल टिप देखने के लिए शिशु की उम्र चुनें। बटन दबाएँ और हम हर हफ़्ते WhatsApp पर एक टिप भेजेंगे। जब चाहें बंद करवा सकते हैं।",
  "Get weekly tips on WhatsApp":"WhatsApp पर साप्ताहिक टिप्स पाएँ", "Tip of the week":"इस हफ़्ते की टिप", "Novel Baby Care":"Novel बेबी केयर",
  // nav + hero
  "Products":"प्रोडक्ट्स", "Product finder":"प्रोडक्ट फ़ाइंडर", "Mum & baby":"माँ और शिशु", "Factory":"फ़ैक्टरी",
  "Quality":"क्वालिटी", "Tips":"टिप्स", "FAQ":"सवाल-जवाब", "Shop now":"अभी ख़रीदें",
  "Order online":"ऑनलाइन ऑर्डर करें", "Need it now?":"अभी चाहिए?", "⚡ In minutes":"⚡ मिनटों में",
  "Aloe vera":"एलोवेरा", "Goat milk":"गोट मिल्क", "99% water":"99% पानी",
  "Buy on":"ख़रीदें", "Order on":"ऑर्डर करें",
  "Paraben-free":"पैराबेन-फ़्री", "Alcohol-free":"अल्कोहल-फ़्री", "pH balanced":"pH संतुलित",
  "Dermatologically tested":"डर्मेटोलॉजिकली टेस्टेड", "Hypoallergenic":"हाइपोएलर्जेनिक", "Resealable lid":"रीसील होने वाला ढक्कन",
  "Made in India":"मेड इन इंडिया", "Safe for newborns":"नवजात के लिए सुरक्षित",
  // best seller
  "Best seller in baby wipes":"बेबी वाइप्स में बेस्ट सेलर", "Parents keep coming back.":"माता-पिता बार-बार लौटते हैं।",
  "That's the whole story.":"यही हमारी असली पहचान है।", "packs sold every month":"पैक हर महीने बिकते हैं",
  "parents who ordered again":"माता-पिता ने दोबारा ऑर्डर किया", "average rating across marketplaces":"मार्केटप्लेस पर औसत रेटिंग",
  "pouches of monthly capacity":"पाउच की मासिक उत्पादन क्षमता", "on Flipkart, from 4.28 lakh+ ratings":"Flipkart पर, 4.28 लाख+ रेटिंग से", "OUT OF 5":"5 में से",
  // products
  "The Novel baby range":"Novel बेबी रेंज", "Everything baby's skin needs, nothing it doesn't.":"शिशु की त्वचा को जो चाहिए, बस वही।",
  "Hover a pack to open it. Every product is formulated for delicate baby skin in our own lab.":"पैक पर कर्सर ले जाएँ और उसे खुलते देखें। हर प्रोडक्ट हमारी अपनी लैब में शिशु की नाज़ुक त्वचा के लिए बनाया जाता है।",
  "Baby wipes":"बेबी वाइप्स", "Baby care":"बेबी केयर", "Baby essentials":"बेबी ज़रूरतें",
  "80 wipes":"80 वाइप्स", "72 wipes · with lid":"72 वाइप्स · ढक्कन के साथ",
  "Bestseller":"बेस्टसेलर", "Tear-free":"आँसू-रहित", "80 wipes · with lid":"80 वाइप्स · ढक्कन के साथ", "India's first":"भारत में पहला", "For newborns":"नवजात के लिए", "Shop on Amazon →":"Amazon पर ख़रीदें →",
  // finder
  "Not sure which one? Find out in three taps.":"कौन-सा चुनें? तीन टैप में जानें।",
  "Tell us about your baby and what you need. We'll suggest the right Novel product.":"अपने शिशु और ज़रूरत के बारे में बताएँ, हम सही Novel प्रोडक्ट सुझाएँगे।",
  "How old is your baby?":"आपका शिशु कितना बड़ा है?", "What do you need it for?":"किस काम के लिए चाहिए?", "How is your baby's skin?":"शिशु की त्वचा कैसी है?",
  "0–3 months":"0–3 महीने", "3–12 months":"3–12 महीने", "1–3 years":"1–3 साल", "3+ years":"3+ साल",
  "Nappy changes":"डायपर बदलना", "Bath time":"नहलाना", "Massage":"मालिश", "Tummy comfort":"पेट का आराम", "Out & about":"बाहर जाते समय",
  "Very sensitive":"बहुत संवेदनशील", "Dry":"रूखी", "Normal":"सामान्य",
  "We recommend":"हमारा सुझाव", "Also good with it":"इसके साथ ये भी",
  "Check the pack for age guidance and patch-test new products on a small area first.":"उम्र संबंधी जानकारी के लिए पैक देखें और नए प्रोडक्ट पहले त्वचा के छोटे हिस्से पर आज़माएँ।",
  "Fragrance-free and 99% water — the gentlest choice for newborns and sensitive skin.":"ख़ुशबू-रहित और 99% पानी — नवजात और संवेदनशील त्वचा के लिए सबसे कोमल विकल्प।",
  "Goat milk adds extra nourishment for dry skin.":"गोट मिल्क रूखी त्वचा को अतिरिक्त पोषण देता है।",
  "Aloe vera and chamomile for everyday changes.":"रोज़ के इस्तेमाल के लिए एलोवेरा और कैमोमाइल।",
  "One mild wash for hair and body keeps bath time short and simple.":"बालों और शरीर के लिए एक ही माइल्ड वॉश — नहलाना आसान और जल्दी।",
  "A light oil for a calm, bonding massage.":"सुकून भरी मालिश के लिए हल्का तेल।",
  "Rolls on in seconds when your little one is restless.":"नन्हा बेचैन हो तो सेकंडों में लग जाता है।",
  // kits
  "Kits we recommend":"हमारे सुझाए किट", "Ready-made routines for every stage.":"हर पड़ाव के लिए तैयार रूटीन।",
  "Our favourite combinations. Shop them on the app you already use.":"हमारे पसंदीदा कॉम्बिनेशन। इन्हें अपने पसंदीदा ऐप पर ख़रीदें।",
  "Shop this kit on":"यह किट यहाँ ख़रीदें",
  // moments
  "Made for both of you":"आप दोनों के लिए", "For baby's skin. For mum's peace of mind.":"शिशु की त्वचा के लिए। माँ के सुकून के लिए।",
  "What we left out":"जो हमने नहीं डाला", "Parabens":"पैराबेन", "Alcohol":"अल्कोहल", "Harsh chemicals":"कठोर केमिकल",
  "Every nappy change":"हर डायपर बदलते समय", "Gentle on the bottom":"नाज़ुक त्वचा पर कोमल",
  "pH-balanced wipes that clean without leaving a red, tight patch behind.":"pH-संतुलित वाइप्स जो साफ़ करते हैं, बिना लाली या खिंचाव छोड़े।",
  "After the bath":"नहाने के बाद", "Oil & massage time":"तेल और मालिश का समय",
  "Baby oil and turmeric balm for the warm, slow minutes after bath time.":"नहाने के बाद के सुकून भरे पलों के लिए बेबी ऑयल और टर्मरिक बाम।",
  "On the go":"सफ़र में", "Lid that stays shut":"मज़बूती से बंद रहने वाला ढक्कन",
  "The resealable lid keeps wipes moist in the diaper bag, the car and the train.":"रीसील ढक्कन डायपर बैग, कार और ट्रेन में भी वाइप्स को नम रखता है।",
  "Fussy evenings":"बेचैन शामें", "A soothed tummy":"पेट को आराम",
  "Our tummy roll-on goes on in seconds when your little one is restless.":"जब नन्हा बेचैन हो, हमारा टमी रोल-ऑन सेकंडों में लग जाता है।",
  // mums
  "Loved by mums":"माँओं की पसंद", "Real mums. Real routines.":"असली माँएँ। असली रूटीन।",
  "See how parents across India use Novel every day.":"देखें, देशभर के माता-पिता रोज़ Novel कैसे इस्तेमाल करते हैं।",
  "What doctors say":"डॉक्टर क्या कहते हैं", "Watch on Instagram":"Instagram पर देखें",
  // factory
  "Our factories":"हमारी फ़ैक्टरियाँ", "We don't outsource. We are the factory.":"हम आउटसोर्स नहीं करते। फ़ैक्टरी हमारी अपनी है।",
  "Every Novel baby product is formulated, filled and sealed under our own roof, so we control what touches your baby's skin from start to finish.":"हर Novel बेबी प्रोडक्ट हमारी अपनी छत के नीचे बनता, भरता और सील होता है — ताकि आपके शिशु की त्वचा को छूने वाली हर चीज़ पर शुरू से आख़िर तक हमारा नियंत्रण रहे।",
  "Mysuru":"मैसूरु", "Manesar":"मानेसर",
  "Our southern plant, with cleanroom-class production and minimal human contact.":"हमारा दक्षिणी प्लांट — क्लीनरूम-स्तर का उत्पादन, बहुत कम मानवीय संपर्क।",
  "Our northern plant, close to Delhi NCR, so packs reach North India faster and fresher.":"हमारा उत्तरी प्लांट, दिल्ली NCR के पास — ताकि उत्तर भारत तक पैक जल्दी और ताज़ा पहुँचें।",
  "Mysuru — wipes line":"मैसूरु — वाइप्स लाइन", "Manesar — packing":"मानेसर — पैकिंग", "QA microbiology lab":"QA माइक्रोबायोलॉजी लैब", "Cleanroom filling":"क्लीनरूम फ़िलिंग",
  "How a wipe is made":"वाइप कैसे बनता है", "1 crore+ pouches a month":"हर महीने 1 करोड़+ पाउच",
  "STEP 1":"चरण 1", "STEP 2":"चरण 2", "STEP 3":"चरण 3", "STEP 4":"चरण 4", "STEP 5":"चरण 5",
  "Formulation":"फ़ॉर्मूलेशन", "Blending":"ब्लेंडिंग", "Filling":"फ़िलिंग", "Packing":"पैकिंग",
  "Our lab develops and tests each formula for baby skin.":"हमारी लैब शिशु की त्वचा के लिए हर फ़ॉर्मूला बनाती और परखती है।",
  "Aloe vera, chamomile, goat milk or pure water — measured precisely.":"एलोवेरा, कैमोमाइल, गोट मिल्क या शुद्ध पानी — सटीक मात्रा में।",
  "Mixed in-house and checked before it ever touches a sheet.":"इन-हाउस मिलाया जाता है और शीट तक पहुँचने से पहले जाँचा जाता है।",
  "Soft non-woven sheets folded and soaked in cleanroom conditions.":"मुलायम नॉन-वोवन शीट्स क्लीनरूम में मोड़ी और भिगोई जाती हैं।",
  "Sealed with a lid, coded for traceability and shipped.":"ढक्कन से सील, ट्रेसबिलिटी कोड के साथ, फिर रवाना।",
  "Quality management":"क्वालिटी मैनेजमेंट", "Environmental management":"पर्यावरण मैनेजमेंट",
  "Good Manufacturing Practice":"गुड मैन्युफ़ैक्चरिंग प्रैक्टिस", "GMP certified":"GMP प्रमाणित", "Export ready":"एक्सपोर्ट के लिए तैयार",
  "UAE · Africa · Southeast Asia":"UAE · अफ़्रीका · दक्षिण-पूर्व एशिया", "Download PDF ↓":"PDF डाउनलोड करें ↓", "Request a copy →":"कॉपी मँगवाएँ →",
  // QC
  "Quality control":"क्वालिटी कंट्रोल", "No batch leaves without a pass.":"बिना पास हुए कोई बैच बाहर नहीं जाता।",
  "A dedicated QA team checks every batch, and each pack carries a code that traces it back to the day, the line and the raw materials it was made from.":"एक समर्पित QA टीम हर बैच की जाँच करती है, और हर पैक पर एक कोड होता है जो बताता है कि वह किस दिन, किस लाइन पर और किन कच्चे माल से बना।",
  "In-house microbiology lab":"इन-हाउस माइक्रोबायोलॉजी लैब", "Every batch is tested before release.":"हर बैच रिलीज़ से पहले टेस्ट होता है।",
  "Full batch traceability":"पूरी बैच ट्रेसबिलिटी", "From raw material to your doorstep.":"कच्चे माल से आपके दरवाज़े तक।",
  "Trusted by parents, paediatricians and hospitals.":"माता-पिता, शिशु रोग विशेषज्ञों और अस्पतालों का भरोसा।",
  // recognition
  "Recognition & achievements":"पहचान और उपलब्धियाँ", "Awarded by the people who matter most.":"उनसे मिला सम्मान, जो सबसे ज़्यादा मायने रखते हैं।",
  "Four Customer Satisfaction Awards — 2015, 2018, 2021 and 2023.":"चार कस्टमर सैटिस्फ़ैक्शन अवॉर्ड — 2015, 2018, 2021 और 2023।",
  "Customer Satisfaction Award":"कस्टमर सैटिस्फ़ैक्शन अवॉर्ड", "Marketplace status":"मार्केटप्लेस स्टेटस",
  "Gold & Premium Seller on India's biggest marketplaces":"भारत के सबसे बड़े मार्केटप्लेस पर गोल्ड और प्रीमियम सेलर",
  "Awarded to sellers with consistently high ratings and reliable service on Amazon, Flipkart and Meesho.":"Amazon, Flipkart और Meesho पर लगातार ऊँची रेटिंग और भरोसेमंद सेवा वाले सेलर्स को मिलता है।",
  "As featured in":"इनमें प्रकाशित",
  // tips
  "Parenting tips":"पेरेंटिंग टिप्स", "Little guides for big first moments.":"बड़े पहले पलों के लिए छोटी गाइड।",
  "Short, practical reads from the Novel team. Always follow your paediatrician's advice for your own baby.":"Novel टीम की छोटी, काम की बातें। अपने शिशु के लिए हमेशा अपने शिशु रोग विशेषज्ञ की सलाह मानें।",
  "Read the guide →":"गाइड पढ़ें →", "Products for this":"इसके लिए प्रोडक्ट्स", "Close":"बंद करें",
  "This guide is in English for now.":"यह गाइड अभी अंग्रेज़ी में है।",
  // faq + shop + footer
  "Questions parents ask":"माता-पिता के सवाल", "Good questions. Straight answers.":"अच्छे सवाल। सीधे जवाब।",
  "Still have a question?":"अब भी कोई सवाल?", "Chat with us on WhatsApp":"WhatsApp पर बात करें",
  "Questions? Chat with us":"सवाल? हमसे बात करें",
  "Shop Novel baby care":"Novel बेबी केयर ख़रीदें", "Order from the app you already use.":"उसी ऐप से ऑर्डर करें जो आप पहले से इस्तेमाल करते हैं।",
  "Delivered in minutes":"मिनटों में डिलीवरी",
  "Fast delivery across India":"पूरे भारत में तेज़ डिलीवरी", "Great deals all year":"पूरे साल शानदार डील्स",
  "Everyday low prices":"रोज़ कम दाम", "At your door in minutes":"मिनटों में आपके दरवाज़े पर",
  "Shop":"ख़रीदें", "Explore":"देखें", "Contact":"संपर्क", "Made with care in India":"भारत में प्यार से बना"
};

const norm = s => s.replace(/‑/g, "-").replace(/\s+/g, " ").trim();
let lang = "en";
try { if (localStorage.getItem("novel-lang") === "hi") lang = "hi"; } catch (e) {}
const hi = () => lang === "hi";
const L = s => (hi() && HI[norm(s)]) || s;
const pick = (en, h) => (hi() && h) ? h : en;
const ext = 'target="_blank" rel="noopener"';
const $ = id => document.getElementById(id);
const stores = Object.entries(STORES);
const online = stores.filter(([, s]) => !s.quick), quick = stores.filter(([, s]) => s.quick);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- link tracking ---------- */
function track(url, place){
  try {
    const u = new URL(url, location.href);
    if (!/^https?:$/.test(u.protocol)) return url;
    Object.entries(UTM).forEach(([k, v]) => u.searchParams.set(k, v));
    u.searchParams.set("utm_content", place);
    return u.toString();
  } catch (e) { return url; }
}
const storeLink = (k, url, place, inner, attrs = "") =>
  `<a href="${track(url, place)}" data-store="${k}" data-place="${place}" ${ext} ${attrs}>${inner}</a>`;
const buyRow = (q, place, links = {}) => stores.map(([k, s]) => storeLink(k, links[k] || s.search(q), place, s.short || s.name)).join("");
const buyP = (id, place) => buyRow(PRODUCTS[id].q, place, PRODUCTS[id].links);
document.addEventListener("click", e => {
  const a = e.target.closest("a[data-store], a[data-wa]");
  if (!a) return;
  (window.dataLayer = window.dataLayer || []).push(a.dataset.wa
    ? { event:"whatsapp_click", placement:a.dataset.wa }
    : { event:"store_click", store:a.dataset.store, placement:a.dataset.place });
});

/* ---------- illustrations ---------- */
let uid = 0;
function packSVG(p, label, autoOpen){
  const id = "dots" + (uid++);
  // the top face is drawn in a flat 240×150 plane, then projected with this matrix
  const face = "matrix(1,-0.2083,0.8,0.6,90,300)";
  let side = "";
  for (let i = 36; i > 0; i -= 3) side += `<rect width="240" height="150" rx="34" transform="translate(0 ${i}) ${face}" fill="${p.cs}"/>`;
  return `<svg class="pack" ${autoOpen ? "data-autoopen" : ""} viewBox="40 60 470 420" role="img" aria-label="${label}">
  <defs><pattern id="${id}" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="4.5" cy="4.5" r="1.2" fill="#DCE8D2"/></pattern></defs>
  <ellipse class="shadow" cx="272" cy="418" rx="190" ry="22"/>${side}
  <g transform="${face}">
    <rect width="240" height="150" rx="34" fill="${p.c}"/>
    <rect x="7" y="7" width="226" height="136" rx="28" fill="none" stroke="#fff" stroke-opacity=".55" stroke-dasharray="2 6" stroke-width="1.5"/>
    <rect x="80" y="45" width="80" height="30" rx="13" fill="#0e2a1a" opacity=".55"/>
    <text x="120" y="118" text-anchor="middle" font-family="Hanken Grotesk" font-weight="500" font-size="27" letter-spacing="3" fill="#fff">NOVEL</text>
    <text x="120" y="136" text-anchor="middle" font-family="IBM Plex Mono" font-weight="600" font-size="8.5" letter-spacing="1.4" fill="#fff">BABY WIPES · ${p.short.toUpperCase()} · ${p.count.split(" ")[0]}</text>
  </g>
  <g transform="matrix(1,-0.2083,0,1,118,321)"><rect class="lid-open" x="70" y="-46" width="100" height="46" rx="16" fill="#163F28"/></g>
  <g class="wipe"><g class="sway">
    <path d="M248 313 C 238 272, 196 246, 200 196 C 204 152, 238 160, 260 138 C 284 116, 324 148, 320 188 C 316 230, 282 266, 270 313 Z" fill="#fff" stroke="#D3DFCB" stroke-width="1.5"/>
    <path d="M248 313 C 238 272, 196 246, 200 196 C 204 152, 238 160, 260 138 C 284 116, 324 148, 320 188 C 316 230, 282 266, 270 313 Z" fill="url(#${id})"/>
    <path d="M236 200 C 250 186, 270 192, 290 176" stroke="#E8F0E2" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g></g>
  <g transform="${face}"><g class="lid-closed"><rect x="70" y="35" width="100" height="50" rx="18" fill="#163F28"/><rect x="84" y="42" width="72" height="7" rx="3.5" fill="#fff" opacity=".25"/></g></g>
</svg>`;
}

function careSVG(p){
  const label = (y, h) => `<rect x="64" y="${y}" width="72" height="${h}" rx="10" fill="#fff" opacity=".93"/>
    <text x="100" y="${y + h / 2 - 1}" text-anchor="middle" font-family="Hanken Grotesk" font-weight="600" font-size="13" letter-spacing="2" fill="#267146">NOVEL</text>
    <text x="100" y="${y + h / 2 + 12}" text-anchor="middle" font-family="IBM Plex Mono" font-size="6" letter-spacing=".8" fill="#163F28">${p.name.toUpperCase()}</text>`;
  const shapes = {
    pump: `<rect x="92" y="22" width="16" height="26" rx="3" fill="#163F28"/><path d="M92 26h-22a6 6 0 0 0-6 6v4h8v-3h20z" fill="#163F28"/>
           <rect x="84" y="44" width="32" height="16" rx="4" fill="#163F28"/><rect x="54" y="58" width="92" height="132" rx="26" fill="${p.c}"/>${label(98, 50)}`,
    oil:  `<rect x="86" y="30" width="28" height="26" rx="6" fill="#163F28"/><path d="M84 56h32l18 24v98a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14V80z" fill="${p.c}"/>${label(106, 50)}`,
    roll: `<circle cx="100" cy="54" r="12" fill="#fff" stroke="#D3DFCB" stroke-width="2"/><rect x="74" y="62" width="52" height="16" rx="5" fill="#163F28"/>
           <rect x="68" y="76" width="64" height="114" rx="18" fill="${p.c}"/><rect x="74" y="106" width="52" height="48" rx="10" fill="#fff" opacity=".93"/>
           <text x="100" y="128" text-anchor="middle" font-family="Hanken Grotesk" font-weight="600" font-size="11" letter-spacing="1.5" fill="#267146">NOVEL</text>
           <text x="100" y="142" text-anchor="middle" font-family="IBM Plex Mono" font-size="6" fill="#163F28">TUMMY ROLL-ON</text>`,
    tin:  `<ellipse cx="100" cy="172" rx="62" ry="16" fill="#C98D24"/><rect x="38" y="120" width="124" height="52" fill="${p.c}"/>
           <ellipse cx="100" cy="120" rx="62" ry="16" fill="#163F28"/><rect x="38" y="96" width="124" height="24" fill="#163F28"/><ellipse cx="100" cy="96" rx="62" ry="16" fill="#235C3B"/>
           <text x="100" y="101" text-anchor="middle" font-family="Hanken Grotesk" font-weight="600" font-size="14" letter-spacing="3" fill="#F4F9EA">NOVEL</text>
           <text x="100" y="154" text-anchor="middle" font-family="IBM Plex Mono" font-weight="600" font-size="8" letter-spacing="1" fill="#fff">TURMERIC BALM</text>`
  };
  return `<svg viewBox="0 0 200 210" role="img" aria-label="Novel ${p.name}"><ellipse cx="100" cy="196" rx="58" ry="8" fill="rgba(22,63,40,.12)"/><g class="bottle">${shapes[p.kind]}</g></svg>`;
}

const ICONS = {
  diaper:'<path d="M4 9h24v5c0 6-5 10-12 10S4 20 4 14z"/><path d="M10 9v4M22 9v4"/>',
  mat:'<rect x="4" y="8" width="24" height="16" rx="4"/><path d="M4 14h24M4 19h24"/>',
  bottle:'<path d="M13 4h6v4h-6zM11 8h10v3l2 3v12a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V14l2-3z"/><path d="M12 18h4M12 22h4"/>'
};
const iconSVG = (name, pad = 0) =>
  `<svg viewBox="${-pad} ${-pad} ${32 + pad * 2} ${32 + pad * 2}" fill="none" stroke="#267146" stroke-width="2" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

const pName = id => { const p = PRODUCTS[id]; return pick(p.name, p.hi && p.hi.name); };
function art(id, { open = false } = {}){
  const p = PRODUCTS[id];
  if (p.img) return `<img class="${p.photo === "cover" ? "cover" : "cut"}" src="${p.img}" alt="Novel ${p.name}" loading="lazy">`;
  if (p.type === "wipe") return packSVG(p, `Novel ${p.name} baby wipes pack`, open);
  if (p.type === "care") return careSVG(p);
  return iconSVG(p.icon, 10);
}
function autoOpen(root){
  root.querySelectorAll(".pack[data-autoopen]").forEach(svg =>
    requestAnimationFrame(() => requestAnimationFrame(() => svg.classList.add("open"))));
}

/* ---------- offer bar ---------- */
function renderOffer(){
  const bar = $("offer");
  let closed = false;
  try { closed = localStorage.getItem("novel-offer-closed") === OFFER.text; } catch (e) {}
  if (!OFFER.text || closed) { bar.hidden = true; return; }
  bar.hidden = false;
  $("offerText").innerHTML = `${pick(OFFER.text, OFFER.hi)} <a href="${OFFER.href}">${pick(OFFER.cta, OFFER.ctaHi)} →</a>`;
}
$("offerClose").addEventListener("click", () => {
  $("offer").hidden = true;
  try { localStorage.setItem("novel-offer-closed", OFFER.text); } catch (e) {}
});

/* ---------- hero ---------- */
const mkBtn = ([k, s]) => storeLink(k, s.url, "hero",
  `<span class="chip">${s.letter}</span><span><small>${L(s.quick ? "Order on" : "Buy on")}</small>${s.name}</span>`,
  `class="mk" style="--bg:${s.bg};--fg:${s.fg}"`);
function renderHeroShop(){
  $("heroOnline").innerHTML = online.map(mkBtn).join("");
  $("heroQuick").innerHTML = quick.map(mkBtn).join("");
}
let heroVariant = "aloe";
// real pack photo in the centre; falls back to the drawn pack if no photo is set
function setHero(id){
  heroVariant = id;
  const p = PRODUCTS[id];
  $("heroPack").innerHTML = p.img
    ? `<img class="hero-photo cut" src="${p.img}" alt="Novel ${p.name} baby wipes pack">`
    : packSVG(p, `Novel ${p.name} baby wipes pack`, true);
  autoOpen($("heroPack"));
}
// the rest of the range floats around the main pack
function renderHeroOrbit(){
  const ids = ["wash", "oil", "roll", "soap"].filter(id => PRODUCTS[id] && PRODUCTS[id].img);
  $("heroOrbit").innerHTML = ids.map((id, i) =>
    `<a class="orbit o${i + 1}" href="#prod-${id}" aria-label="${PRODUCTS[id].name}" style="--tint:${PRODUCTS[id].tint}">${art(id)}</a>`).join("");
}
document.querySelectorAll(".variants button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".variants button").forEach(x => x.setAttribute("aria-pressed", x === b));
  const cur = $("heroPack").firstElementChild;
  cur.classList.remove("open"); cur.classList.add("leaving");
  setTimeout(() => setHero(b.dataset.v), reduce ? 0 : 380);
}));

/* ---------- ratings ---------- */
const starPath = "M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.8z";
const star = `<svg viewBox="0 0 20 20"><path d="${starPath}" fill="#F2C66D"/></svg>`;
const halfStar = `<svg viewBox="0 0 20 20"><defs><linearGradient id="hs"><stop offset="50%" stop-color="#F2C66D"/><stop offset="50%" stop-color="#DCE8D2"/></linearGradient></defs><path d="${starPath}" fill="url(#hs)"/></svg>`;
function renderRatings(){
  $("ratings").innerHTML = online.map(([k, s], i) => storeLink(k, s.url, "ratings", `
    <div class="top"><span>${s.name}</span><span class="stars">${star.repeat(4)}${halfStar}</span></div>
    <div class="score">${RATINGS[k].score}<small>${L("OUT OF 5")}</small></div>
    <span class="count">${hi() ? `${RATINGS[k].hiCount} रेटिंग` : `${RATINGS[k].count} ratings`}</span>
    <span class="go">${hi() ? `${s.name} पर रिव्यू पढ़ें →` : `Read reviews on ${s.name} →`}</span>`,
    `class="rate reveal d${i}"`)).join("");
}

/* ---------- products ---------- */
const ids = type => Object.keys(PRODUCTS).filter(id => PRODUCTS[id].type === type);
function renderProducts(){
  $("pGrid").innerHTML = ids("wipe").map((id, i) => { const p = PRODUCTS[id]; return `
    <article class="card reveal d${i}" id="prod-${id}" style="--tint:${p.tint}">
      <span class="tag">${L(p.tag)}</span>
      <div class="art">${art(id)}</div>
      <h3>${p.name}</h3>
      <p class="meta">${L("Baby wipes")} · ${L(p.count)}</p>
      <p>${pick(p.desc, p.hi.desc)}</p>
      <ul class="feat">${pick(p.feat, p.hi.feat).map(f => `<li>${f}</li>`).join("")}</ul>
      <div class="buy">${buyP(id, "product-" + id)}</div>
    </article>`; }).join("");
  $("pGrid").querySelectorAll(".card").forEach(card => {
    const svg = card.querySelector(".pack");
    if (!svg) return;
    const on = () => svg.classList.add("open"), off = () => svg.classList.remove("open");
    card.addEventListener("mouseenter", on); card.addEventListener("mouseleave", off);
    card.addEventListener("focusin", on); card.addEventListener("focusout", off);
  });
  $("cGrid").innerHTML = ids("care").map((id, i) => { const p = PRODUCTS[id]; return `
    <article class="card reveal d${i}" id="prod-${id}" style="--tint:${p.tint}">
      ${p.tag ? `<span class="tag">${L(p.tag)}</span>` : ""}
      <div class="art">${art(id)}</div>
      <h3>${p.name}</h3>
      <p>${pick(p.desc, p.hi.desc)}</p>
      <div class="buy">${buyP(id, "product-" + id)}</div>
    </article>`; }).join("");
  $("more").innerHTML = ids("essential").map((id, i) => { const p = PRODUCTS[id]; return storeLink("amazon",
    STORES.amazon.search(p.q), "product-" + id,
    `<span class="ico">${iconSVG(p.icon)}</span><span><b>${pName(id)}</b><span>${pick(p.desc, p.hi.desc)} · ${L("Shop on Amazon →")}</span></span>`,
    `class="mini reveal d${i}" id="prod-${id}"`); }).join("");
}

/* ---------- product finder ---------- */
const WHY = {
  water:"Fragrance-free and 99% water — the gentlest choice for newborns and sensitive skin.",
  goat:"Goat milk adds extra nourishment for dry skin.",
  aloe:"Aloe vera and chamomile for everyday changes.",
  wash:"One mild wash for hair and body keeps bath time short and simple.",
  oil:"A light oil for a calm, bonding massage.",
  roll:"Rolls on in seconds when your little one is restless."
};
function recommend(age, need, skin){
  const wipe = (age === "newborn" || skin === "sensitive") ? "water" : skin === "dry" ? "goat" : "aloe";
  const plan = {
    nappy:  [wipe, ["diapers", "mat"]],
    go:     [wipe, ["mat", "diapers"]],
    bath:   ["wash", ["soap", wipe]],
    massage:["oil", ["balm", "roll"]],
    tummy:  ["roll", ["oil", "balm"]]
  }[need];
  return { main: plan[0], also: plan[1] };
}
const chip = id => `<a href="#prod-${id}"><span class="thumb" style="background:${PRODUCTS[id].tint}">${art(id)}</span>${pName(id)}</a>`;
function renderFinder(animate){
  const f = new FormData($("finderForm"));
  const { main, also } = recommend(f.get("age"), f.get("need"), f.get("skin"));
  const p = PRODUCTS[main];
  const needsNote = [main, ...also].some(id => ["oil", "balm", "roll"].includes(id));
  const box = $("result");
  box.innerHTML = `
    <p class="eyebrow">${L("We recommend")}</p>
    <div class="rec">
      <div class="art" style="--tint:${p.tint}">${art(main, { open:true })}</div>
      <div><h3>${pName(main)}</h3><p>${L(WHY[main])}</p></div>
    </div>
    <div class="buy">${buyP(main, "finder")}</div>
    ${needsNote ? `<p class="note">${L("Check the pack for age guidance and patch-test new products on a small area first.")}</p>` : ""}
    <p class="eyebrow">${L("Also good with it")}</p>
    <div class="also">${also.map(chip).join("")}</div>`;
  autoOpen(box);
  if (animate){ box.classList.remove("swap"); void box.offsetWidth; box.classList.add("swap"); }
}
$("finderForm").addEventListener("change", () => renderFinder(true));

/* ---------- mums: doctor + reels ---------- */
const playIcon = '<svg viewBox="0 0 20 20"><path d="M5 3l12 7-12 7z" fill="#267146"/></svg>';
function renderMums(){
  const reels = REELS.filter(r => r.url || r.thumb);
  const hasDoc = !!DOCTOR.quote;
  const showReels = reels.length || SHOW_PLACEHOLDERS;
  const showDoc = hasDoc || SHOW_PLACEHOLDERS;
  $("mums").hidden = !showReels && !showDoc;
  $("doctor").hidden = !showDoc;
  $("reels").hidden = !showReels;
  document.querySelector(".mums-grid").style.gridTemplateColumns = (showDoc && showReels) ? "" : "1fr";

  $("doctor").innerHTML = hasDoc ? `
    <div class="doc reveal">
      <p class="eyebrow">${L("What doctors say")}</p>
      <blockquote>${pick(DOCTOR.quote, DOCTOR.hiQuote)}</blockquote>
      <div class="who">${DOCTOR.photo ? `<img src="${DOCTOR.photo}" alt="${DOCTOR.name}">` : `<span class="avatar"></span>`}
        <div><b>${DOCTOR.name}</b><span>${DOCTOR.title}</span></div></div>
    </div>` : `
    <div class="doc ph-doc reveal">
      <p class="eyebrow">${L("What doctors say")}</p>
      <blockquote>Add a quote your doctor has written or approved.</blockquote>
      <div class="who"><span class="avatar"></span><div><b>Doctor's name</b><span>Specialisation</span></div></div>
      <p class="ph-label" style="position:static">DOCTOR SLOT · config.js → DOCTOR</p>
    </div>`;

  $("reels").innerHTML = reels.length
    ? reels.map((r, i) => `<a class="reel reveal d${i}" href="${r.url}" ${ext} aria-label="${L("Watch on Instagram")} ${r.handle}">
        ${r.thumb ? `<img src="${r.thumb}" alt="" loading="lazy">` : ""}<span class="play">${playIcon}</span><span class="handle">${r.handle}</span></a>`).join("")
    : [0, 1, 2, 3].map(i => `<div class="reel ph reveal d${i}"><span class="play">${playIcon}</span>
        <span class="ph-label">REEL SLOT ${i + 1} · config.js → REELS (thumb, url, handle)</span></div>`).join("");
}

/* ---------- factory photos + certificates ---------- */
function renderFactory(){
  const photos = FACTORY_PHOTOS.filter(p => p.src);
  const list = photos.length ? photos : (SHOW_PLACEHOLDERS ? FACTORY_PHOTOS : []);
  $("fphotos").hidden = !list.length;
  $("fphotos").innerHTML = list.map((p, i) => p.src
    ? `<figure class="fphoto reveal d${i}"><img src="${p.src}" alt="${L(p.caption)}" loading="lazy"><figcaption>${L(p.caption)}</figcaption></figure>`
    : `<figure class="fphoto ph reveal d${i}"><span class="ph-label">PHOTO SLOT · config.js → FACTORY_PHOTOS[${i}]</span><figcaption>${L(p.caption)}</figcaption></figure>`).join("");

  $("certs").innerHTML = CERTS.map(c => {
    const inner = `<div class="seal">${c.seal}</div><div><b>${L(c.name)}</b><span>${L(c.label)}</span>${c.noDoc ? "" : `<em>${L(c.file ? "Download PDF ↓" : "Request a copy →")}</em>`}</div>`;
    if (c.noDoc) return `<div class="cert">${inner}</div>`;
    const href = c.file ? c.file : `mailto:${CERT_EMAIL}?subject=${encodeURIComponent(c.name + " certificate request")}`;
    return `<a class="cert" href="${href}" ${c.file ? "download" : ""}>${inner}</a>`;
  }).join("");
}

/* ---------- awards ---------- */
const trophy = c => `<svg viewBox="0 0 84 84"><circle cx="42" cy="42" r="40" fill="${c}" opacity=".45"/><path d="M28 22h28v10a14 14 0 0 1-28 0z" fill="#163F28"/><path d="M28 26h-6a6 6 0 0 0 6 8M56 26h6a6 6 0 0 1-6 8" stroke="#163F28" stroke-width="3" fill="none"/><rect x="39" y="45" width="6" height="9" fill="#163F28"/><rect x="31" y="54" width="22" height="7" rx="2" fill="#163F28"/><path d="M42 26l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z" fill="#F2C66D"/></svg>`;
function renderAwards(){
  const colors = ["#8DC163", "#F2C66D", "#9ED3E6", "#CAE5A5"];
  $("awards").innerHTML = [2015, 2018, 2021, 2023].map((y, i) =>
    `<div class="award reveal d${i}">${trophy(colors[i])}<div class="yr">${y}</div><p>${L("Customer Satisfaction Award")}</p></div>`).join("");
}

/* ---------- tips + article dialog ---------- */
function renderTips(){
  $("tGrid").innerHTML = TIPS.map((t, i) => `
    <button type="button" class="tip reveal d${i}" data-tip="${t.id}" style="--tint:${t.tint}">
      <span class="cover"><small>${pick(t.tag, t.hiTag)} · ${t.mins} ${hi() ? "मिनट" : "min read"}</small>${art(t.icon)}</span>
      <span class="body"><h3>${pick(t.title, t.hiTitle)}</h3><p>${pick(t.excerpt, t.hiExcerpt)}</p><span class="more-link">${L("Read the guide →")}</span></span>
    </button>`).join("");
}
const dlg = $("article");
function openTip(id){
  const t = TIPS.find(x => x.id === id);
  dlg.innerHTML = `
    <div class="a-head" style="background:${t.tint}">
      <p class="eyebrow">${pick(t.tag, t.hiTag)} · ${t.mins} ${hi() ? "मिनट" : "min read"}</p>
      <h2 id="articleTitle">${pick(t.title, t.hiTitle)}</h2>
      <button type="button" class="close" aria-label="${L("Close")}">×</button>
    </div>
    <div class="a-body">${hi() ? `<p class="lang-note">${L("This guide is in English for now.")}</p>` : ""}${t.body}</div>
    <div class="a-foot"><p class="eyebrow">${L("Products for this")}</p><div class="also">${t.products.map(chip).join("")}</div></div>`;
  dlg.querySelector(".close").addEventListener("click", () => dlg.close());
  dlg.querySelectorAll(".also a").forEach(a => a.addEventListener("click", () => dlg.close()));
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
}
$("tGrid").addEventListener("click", e => { const b = e.target.closest("[data-tip]"); if (b) openTip(b.dataset.tip); });
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

/* ---------- FAQ ---------- */
function renderFAQ(){
  const mail = s => s.replace(/([\w.+-]+@[\w-]+\.[\w.]+)/g, '<a href="mailto:$1">$1</a>');
  $("faqList").innerHTML = FAQ.map((f, i) =>
    `<details ${i === 0 ? "open" : ""}><summary>${pick(f.q, f.hq)}</summary><div class="ans">${mail(pick(f.a, f.ha))}</div></details>`).join("");
}

/* ---------- shop tiles, footer, WhatsApp ---------- */
const BLURBS = { amazon:"Fast delivery across India", flipkart:"Great deals all year", meesho:"Everyday low prices",
                 blinkit:"At your door in minutes", instamart:"At your door in minutes" };
function renderShop(){
  const tile = ([k, s], i) => storeLink(k, s.url, "shop-tiles", `
    <div><b style="color:${s.fg}">${s.name}</b><br><span>${L(BLURBS[k])}</span></div>
    <div class="arrow"><span>${L("Shop Novel baby care")}</span><i>→</i></div>`,
    `class="tile reveal d${i}" style="background:${s.bg};color:${s.text}"`);
  $("tiles").innerHTML = online.map(tile).join("");
  $("tilesQuick").innerHTML = quick.map(tile).join("");
  $("fShop").innerHTML = stores.map(([k, s]) => `<li>${storeLink(k, s.url, "footer", s.name)}</li>`).join("");
  $("yr").textContent = new Date().getFullYear();
}
function renderWhatsApp(){
  const url = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`;
  [["waFloat", "float"], ["faqWa", "faq"], ["footWa", "footer"]].forEach(([id, place]) => {
    const a = $(id); if (!a) return;
    a.href = url; a.dataset.wa = place;
  });
  $("waFloat").setAttribute("aria-label", L("Chat with us on WhatsApp"));
}


/* ---------- live "packs today" counter (estimate) ---------- */
const PACKS_PER_SEC = 2000000 / (30 * 86400);
function packsToday(){
  const ist = new Date(Date.now() + 5.5 * 3600e3);              // shift to India time
  const secs = ist.getUTCHours() * 3600 + ist.getUTCMinutes() * 60 + ist.getUTCSeconds();
  return Math.floor(secs * PACKS_PER_SEC);
}
function startLive(){
  const el = $("liveCount");
  const show = () => { el.textContent = packsToday().toLocaleString("en-IN"); };
  show(); setInterval(show, 1000);
}

/* ---------- what's inside ---------- */
let insideProduct = "aloe", insideIng = null;
function renderInside(){
  const ids = Object.keys(INSIDE).filter(id => PRODUCTS[id]);
  $("insideTabs").innerHTML = ids.map(id => { const p = PRODUCTS[id]; return `
    <button type="button" role="tab" aria-selected="${id === insideProduct}" data-id="${id}" style="--tint:${p.tint}">
      ${p.img ? `<img class="${p.photo === "cover" ? "cover" : ""}" src="${p.img}" alt="">` : ""}${p.name}</button>`; }).join("");
  const p = PRODUCTS[insideProduct], info = INSIDE[insideProduct];
  if (!insideIng || !info.items.includes(insideIng)) insideIng = info.items[0];
  const spots = [[8,10],[60,6],[66,78],[6,72],[34,86],[70,40]];
  $("insidePanel").innerHTML = `
    <div class="in-photo" style="--tint:${p.tint}">
      ${p.img ? `<img class="${p.photo === "cover" ? "cover" : ""}" src="${p.img}" alt="Novel ${p.name}">` : art(insideProduct)}
      ${info.items.map((k, i) => `<button type="button" class="in-chip" aria-pressed="${k === insideIng}" data-ing="${k}"
          style="left:${spots[i][0]}%;top:${spots[i][1]}%;animation-delay:${.15 + i * .12}s">${INGREDIENTS[k].icon} ${pick(INGREDIENTS[k].name, INGREDIENTS[k].hi)}</button>`).join("")}
    </div>
    <div class="in-info">
      <p class="eyebrow">${L("Key ingredients")}</p>
      <h3>${pName(insideProduct)}</h3>
      <p style="color:var(--muted)">${L("Tap an ingredient to learn what it does.")}</p>
      <div class="in-list">${info.items.map(k => { const g = INGREDIENTS[k]; return `
        <button type="button" class="in-item" aria-pressed="${k === insideIng}" data-ing="${k}">
          <i aria-hidden="true">${g.icon}</i><span><b>${pick(g.name, g.hi)}</b><span>${pick(g.why, g.hiWhy)}</span></span></button>`; }).join("")}</div>
      ${info.free ? `<div class="in-free">${L("Free from")} ${info.free.map(f => `<s>${L(f)}</s>`).join("")}</div>` : ""}
      <div class="buy" style="margin-top:18px">${buyP(insideProduct, "inside")}</div>
    </div>`;
}
$("insideTabs").addEventListener("click", e => { const b = e.target.closest("[data-id]"); if (!b) return; insideProduct = b.dataset.id; insideIng = null; renderInside(); });
$("insidePanel").addEventListener("click", e => {
  const b = e.target.closest("[data-ing]"); if (!b) return;
  insideIng = b.dataset.ing;
  $("insidePanel").querySelectorAll("[data-ing]").forEach(x => x.setAttribute("aria-pressed", x.dataset.ing === insideIng));
});

/* ---------- wipe test ---------- */
function updatePull(){
  const v = +$("wtPull").value;
  $("wtSheet").style.transform = `scaleX(${1 + v * .0035}) scaleY(${1 - v * .0009})`;
  const shift = v * .5;
  $("wtHandL").style.transform = `translateX(${-shift}px)`;
  $("wtHandR").style.transform = `translateX(${shift}px)`;
  const st = $("wtStatus");
  st.textContent = L(v < 30 ? "Gentle pull" : v < 75 ? "Stretching…" : "Still in one piece ✓");
  st.classList.toggle("ok", v >= 75);
}
$("wtPull").addEventListener("input", updatePull);
$("wtSqueeze").addEventListener("click", () => {
  const g = $("wtDrops");
  g.innerHTML = Array.from({ length: 9 }, (_, i) =>
    `<path class="drop" style="animation-delay:${i * .08}s" transform="translate(${170 + i * 22} ${245 + (i % 3) * 6})" d="M0 0 C -5 8 -5 13 0 15 C 5 13 5 8 0 0 Z" fill="#7CC4E8"/>`).join("");
  $("wtStatus").textContent = L("Moisture you can see");
  $("wtStatus").classList.add("ok");
});

/* ---------- reviews ---------- */
const fmtLakh = n => n >= 100000 ? (Math.floor(n / 10000) / 10) + (hi() ? " लाख+" : " lakh+") : Math.round(n / 1000) + "K+";
function renderReviews(){
  const total = Object.values(RATINGS).reduce((a, r) => a + (r.n || 0), 0);
  $("rvSummary").innerHTML = `
    <div class="big">${fmtLakh(total)}</div>
    <p>${L("ratings across Flipkart, Amazon and Meesho")}</p>
    ${online.map(([k, s]) => `<div class="rv-bar"><span>${s.name}</span><span class="track"><span class="fill" style="--w:${RATINGS[k].score / 5}"></span></span><b>${RATINGS[k].score}★</b>
      <small>${hi() ? RATINGS[k].hiCount + " रेटिंग" : RATINGS[k].count + " ratings"}</small></div>`).join("")}`;
  const list = REVIEWS.length ? REVIEWS : (SHOW_PLACEHOLDERS ? [0, 1, 2] : []);
  $("rvCards").innerHTML = list.map((r, i) => typeof r === "number"
    ? `<article class="rv-card ph reveal d${i}"><span class="stars">${star.repeat(5)}</span><blockquote>A short review a parent sent you, with their permission.</blockquote>
        <footer><b>Parent's first name</b>City · Product</footer><span class="ph-label" style="position:static">REVIEW SLOT · config.js → REVIEWS</span></article>`
    : `<article class="rv-card reveal d${i}"><span class="stars">${star.repeat(r.stars || 5)}</span><blockquote>${pick(r.text, r.hiText)}</blockquote>
        <footer><b>${r.name}</b>${r.city} · ${r.product}</footer></article>`).join("");
  $("rvCards").hidden = !list.length;
  document.querySelector(".rv-grid").style.gridTemplateColumns = list.length ? "" : "minmax(0,520px)";
}

/* ---------- #NovelMoms wall ---------- */
function renderMomWall(){
  const ratios = ["3/4", "1/1", "4/5", "3/4", "1/1", "4/5", "3/4", "1/1"];
  $("mwGrid").innerHTML = MOM_PHOTOS.length
    ? MOM_PHOTOS.map((m, i) => `<figure class="mw-item reveal d${i % 4}"><img src="${m.src}" alt="${m.handle}" loading="lazy"><figcaption>${m.handle}</figcaption></figure>`).join("")
    : (SHOW_PLACEHOLDERS ? ratios.map((r, i) => `<figure class="mw-item ph reveal d${i % 4}" style="--ar:${r}"><span class="ph-label">PHOTO SLOT · config.js → MOM_PHOTOS</span></figure>`).join("") : "");
  $("mwGrid").hidden = !$("mwGrid").innerHTML;
  $("mwInsta").href = `https://www.instagram.com/explore/tags/${MOM_HASHTAG.toLowerCase()}/`;
  $("mwWa").href = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(`Hi Novel, I'd like to share a photo for #${MOM_HASHTAG}. I'm happy for Novel to feature it on the website.`)}`;
  $("mwWa").dataset.wa = "novelmoms";
}

/* ---------- weekly tips on WhatsApp ---------- */
let wkAge = "0-3", wkTimer;
function renderWeekly(animate){
  $("wkAges").innerHTML = AGE_TIPS.map(a =>
    `<button type="button" role="radio" aria-checked="${a.id === wkAge}" data-age="${a.id}">${pick(a.label, a.hiLabel)}</button>`).join("");
  const a = AGE_TIPS.find(x => x.id === wkAge), p = PRODUCTS[a.product];
  const msg = `Hi Novel, please send me weekly baby care tips. My baby's age: ${a.label}.`;
  $("wkBtn").href = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(msg)}`;
  $("wkBtn").dataset.wa = "weekly-" + a.id;
  const me = `<div class="bubble-msg me">${hi() ? `नमस्ते Novel, मुझे साप्ताहिक टिप्स भेजें। शिशु की उम्र: ${a.hiLabel}` : `Hi Novel, weekly tips please! Baby's age: ${a.label}`}</div>`;
  const reply = `<div class="bubble-msg"><b>${L("Tip of the week")}</b>${pick(a.tip, a.hiTip)}
      <a class="prod" href="#prod-${a.product}">${p.img ? `<img class="${p.photo === "cover" ? "cover" : ""}" src="${p.img}" alt="">` : ""}${pName(a.product)}</a></div>`;
  clearTimeout(wkTimer);
  if (animate && !reduce){
    $("wkChat").innerHTML = me + `<div class="typing"><i></i><i></i><i></i></div>`;
    wkTimer = setTimeout(() => { $("wkChat").innerHTML = me + reply; }, 900);
  } else $("wkChat").innerHTML = me + reply;
}
$("wkAges").addEventListener("click", e => { const b = e.target.closest("[data-age]"); if (!b) return; wkAge = b.dataset.age; renderWeekly(true); });

/* ---------- static text translation ---------- */
const original = new WeakMap();
function applyStatic(){
  document.querySelectorAll("[data-hi]").forEach(el => {
    if (el._en === undefined) el._en = el.innerHTML;
    el.innerHTML = hi() ? el.dataset.hi : el._en;
    if (el.dataset.hiLabel){
      if (el._enLabel === undefined) el._enLabel = el.getAttribute("aria-label");
      el.setAttribute("aria-label", hi() ? el.dataset.hiLabel : el._enLabel);
    }
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: n => (!n.nodeValue.trim() || n.parentElement.closest("script,style,[data-hi],svg"))
      ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n => {
    if (hi()){
      const src = original.has(n) ? original.get(n) : n.nodeValue;
      const t = HI[norm(src)];
      if (t){ original.set(n, src); n.nodeValue = src.replace(src.trim(), t); }
    } else if (original.has(n)){
      n.nodeValue = original.get(n);
    }
  });
}

/* ---------- reveal on scroll, counters, QC ticket ---------- */
function countUp(el){
  const end = parseFloat(el.dataset.count), dec = +el.dataset.dec, dur = reduce ? 0 : 1600, t0 = performance.now();
  const tick = t => {
    const k = dur ? Math.min(1, (t - t0) / dur) : 1;
    el.textContent = (end * (1 - Math.pow(1 - k, 3))).toFixed(dec);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function runTicket(){
  const checks = [...document.querySelectorAll("#ticket .check")];
  checks.forEach((c, i) => setTimeout(() => c.classList.add("done"), reduce ? 0 : 350 + i * 380));
  setTimeout(() => $("stamp").classList.add("on"), reduce ? 0 : 350 + checks.length * 380 + 200);
}
const io = new IntersectionObserver(list => list.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  e.target.querySelectorAll("[data-count]").forEach(countUp);
  if (e.target.querySelector("#ticket")) runTicket();
  io.unobserve(e.target);
}), { threshold:.15, rootMargin:"0px 0px -40px 0px" });
const observeReveals = () => document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));

/* ---------- language ---------- */
function renderAll(){
  renderOffer(); renderHeroShop(); renderRatings(); renderProducts(); renderFinder(false);
  renderInside(); renderReviews(); renderMums(); renderMomWall(); renderWeekly(false); updatePull(); renderFactory(); renderAwards(); renderTips(); renderFAQ();
  renderShop(); renderWhatsApp();
}
function setLang(l){
  lang = l;
  try { localStorage.setItem("novel-lang", l); } catch (e) {}
  document.documentElement.lang = l;
  const btn = $("langBtn");
  btn.textContent = l === "hi" ? "English" : "हिंदी";
  btn.lang = l === "hi" ? "en" : "hi";
  btn.setAttribute("aria-label", l === "hi" ? "Switch to English" : "हिंदी में देखें");
  renderAll();
  applyStatic();
  observeReveals();
}
$("langBtn").addEventListener("click", () => setLang(hi() ? "en" : "hi"));

/* ---------- nav ---------- */
const head = $("siteHead");
addEventListener("scroll", () => head.classList.toggle("scrolled", scrollY > 20), { passive:true });
const menuBtn = $("menuBtn"), menu = $("menu");
menuBtn.addEventListener("click", () => { const o = menu.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); });
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));

/* ---------- start ---------- */
setHero(heroVariant);
renderHeroOrbit();
startLive();
setLang(lang);
// a gentle nudge so parents notice the WhatsApp button
if (!reduce) setTimeout(() => { $("waFloat").classList.add("hint"); setTimeout(() => $("waFloat").classList.remove("hint"), 4000); }, 6000);
})();
