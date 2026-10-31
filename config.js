/* =====================================================================
   NOVEL WEBSITE — EVERYTHING YOU CAN EDIT LIVES IN THIS FILE
   Change text, links, photos and offers here. You don't need to touch
   index.html or app.js.
   ===================================================================== */

/* While true, empty photo / reel / doctor slots show a dashed box that
   says what to add. Set to false before going live: empty slots then
   disappear instead. */
const SHOW_PLACEHOLDERS = false;

/* ---------- Announcement bar at the very top ----------
   Put any deal here (e.g. "Buy 5 Get 5 free on Goat Milk wipes").
   Set text to "" to hide the bar. */
const OFFER = {
  text: "Now from Novel: Head to Toe Wash, Coconut Baby Oil, Tummy Roll-On & After Bite Turmeric Balm.",
  hi:   "अब Novel से: हेड टू टो वॉश, कोकोनट बेबी ऑयल, टमी रोल-ऑन और आफ़्टर बाइट टर्मरिक बाम।",
  cta: "Explore", ctaHi: "देखें",
  href: "products.html#care"
};

/* ---------- WhatsApp chat ----------
   Country code + number, digits only. */
const WHATSAPP = {
  number: "919845398453",
  message: "Hi Novel, I have a question about your baby products."
};

/* ---------- Store links ----------
   `url` is where the big shop buttons go — replace with your exact
   brand-store pages. `search` builds per-product links. */
const STORES = {
  amazon:    { name:"Amazon", letter:"a", bg:"#232F3E", fg:"#FF9900", text:"#FFFFFF",
               url:"https://www.amazon.in/s?k=Novel+baby+wipes",
               search:q => `https://www.amazon.in/s?k=${encodeURIComponent(q)}` },
  flipkart:  { name:"Flipkart", letter:"F", bg:"#2874F0", fg:"#FFE11B", text:"#FFFFFF",
               url:"https://www.flipkart.com/baby-care/pr?sid=kyh&q=wipes&p%5B%5D=facets.brand%255B%255D%3DNOVEL",
               search:q => `https://www.flipkart.com/search?q=${encodeURIComponent(q)}` },
  meesho:    { name:"Meesho", letter:"m", bg:"#9F2089", fg:"#FFFFFF", text:"#FFFFFF",
               url:"https://www.meesho.com/search?q=novel%20baby%20wipes",
               search:q => `https://www.meesho.com/search?q=${encodeURIComponent(q)}` },
  blinkit:   { name:"Blinkit", letter:"b", bg:"#F8CB46", fg:"#0C831F", text:"#0C3B16", quick:true,
               url:"https://blinkit.com/s/?q=novel%20baby%20wipes",
               search:q => `https://blinkit.com/s/?q=${encodeURIComponent(q)}` },
  instamart: { name:"Swiggy Instamart", short:"Instamart", letter:"S", bg:"#FC8019", fg:"#FFFFFF", text:"#FFFFFF", quick:true,
               url:"https://www.swiggy.com/instamart/search?custom_back=true&query=novel%20baby%20wipes",
               search:q => `https://www.swiggy.com/instamart/search?custom_back=true&query=${encodeURIComponent(q)}` }
};

/* ---------- Sales tracking ----------
   Added to every store link so your analytics can see which sales came
   from the website. For Amazon, also create Amazon Attribution tags in
   Seller Central — Amazon ignores these utm tags in its own reports. */
const UTM = { utm_source:"novel_website", utm_medium:"referral", utm_campaign:"brand_site" };

/* ---------- Products ----------
   img: path to a photo in assets/products. Photos on a white background
   blend into the coloured cards automatically. photo:"cover" is for a
   photo with its own background (it fills the frame instead).
   Leave img:"" to show the drawn illustration.
   links: exact product pages per store. Any store without a link here
   falls back to a search for `q`. */
const PRODUCTS = {
  aloe:  { type:"wipe", name:"Aloe Vera & Chamomile", short:"Aloe vera", count:"80 wipes · with lid", tag:"Bestseller",
           img:"assets/products/aloe-wipes.webp",
           c:"#8DC163", cs:"#6FA548", tint:"#E6F2D4", q:"Novel aloe vera baby wipes",
           links:{ amazon:"https://www.amazon.in/dp/B09GP8BLSM", flipkart:"https://www.flipkart.com/novel-baby-wipes-80-sheets-pack-lid/p/itmc0c6b52313ab2", meesho:"https://www.meesho.com/novel-baby-wipes-80-sheets-with-lid/p/4ruy7g" },
           desc:"Our everyday wipe. Soothing aloe vera and chamomile keep skin hydrated through every change.",
           feat:["Plant extracts","Extra thick","Daily use"],
           hi:{ desc:"हमारा रोज़ का वाइप। एलोवेरा और कैमोमाइल हर बार त्वचा को नम और आरामदायक रखते हैं।", feat:["प्लांट एक्सट्रैक्ट","एक्स्ट्रा थिक","रोज़ाना इस्तेमाल"] } },
  goat:  { type:"wipe", name:"Goat Milk", short:"Goat milk", count:"72 wipes · with lid", tag:"India's first",
           img:"assets/products/goat-milk-wipes.webp",
           c:"#8A6BB8", cs:"#6A4E98", tint:"#EFE8F7", q:"Novel goat milk baby wipes",
           links:{ flipkart:"https://www.flipkart.com/novel-goat-milk-baby-wipes-72-s-sheet-pack-3/p/itm208df145a790a", meesho:"https://www.meesho.com/novel-goat-milk-baby-wipes-72s-sheet/p/6957ih" },
           desc:"India's first goat milk baby wipes. Rich and nourishing for dry or delicate skin.",
           feat:["Deep nourishment","Hypoallergenic","Resealable lid"],
           hi:{ desc:"भारत के पहले गोट मिल्क बेबी वाइप्स। रूखी या नाज़ुक त्वचा के लिए भरपूर पोषण।", feat:["गहरा पोषण","हाइपोएलर्जेनिक","रीसील ढक्कन"] } },
  water: { type:"wipe", name:"99% Pure Water", short:"99% water", count:"80 wipes · with lid", tag:"For newborns",
           img:"assets/products/water-wipes.webp",
           c:"#3FA7DB", cs:"#2A86BC", tint:"#E1F1FA", q:"Novel 99% pure water baby wipes",
           links:{ amazon:"https://www.amazon.in/dp/B0CB1F238Q" },
           desc:"Fragrance-free and ultra-pure. The one to choose for newborns and extra-sensitive skin.",
           feat:["Fragrance-free","99% water","Newborn safe"],
           hi:{ desc:"ख़ुशबू-रहित और बेहद शुद्ध। नवजात और अति-संवेदनशील त्वचा के लिए सही चुनाव।", feat:["ख़ुशबू-रहित","99% पानी","नवजात के लिए सुरक्षित"] } },

  wash:  { type:"care", kind:"pump", name:"Head to Toe Baby Wash", tag:"Tear-free", c:"#9ED3E6", tint:"#E1F1FA",
           img:"assets/products/head-to-toe-wash.webp", q:"Novel head to toe baby wash", video:"baby-shampoo",
           links:{ amazon:"https://www.amazon.in/dp/B0HCW2HGJF" },
           desc:"Tear-free daily moisturising wash for hair and body, with oat extract.",
           hi:{ desc:"बालों और शरीर के लिए आँसू-रहित, रोज़ाना मॉइस्चराइज़िंग वॉश, ओट एक्सट्रैक्ट के साथ।" } },
  oil:   { type:"care", kind:"oil", name:"Coconut Baby Oil", c:"#F2C66D", tint:"#FBEFD0",
           img:"assets/products/coconut-baby-oil.webp", q:"Novel cold pressed coconut oil for babies",
           links:{ amazon:"https://www.amazon.in/dp/B0HCVX77MV", flipkart:"https://www.flipkart.com/novel-cold-pressed-coconut-oil-babies-100-natural-0-months-200-ml/p/itmc7ea54af699ff" }, video:"baby-oil",
           desc:"Cold-pressed coconut oil for gentle baby massage.",
           hi:{ desc:"शिशु की कोमल मालिश के लिए कोल्ड-प्रेस्ड नारियल तेल।" } },
  roll:  { type:"care", kind:"roll", name:"Tummy Roll-On", c:"#8DC163", tint:"#E6F2D4",
           img:"assets/products/tummy-roll-on.webp", q:"Novel tummy roll on for babies",
           links:{ amazon:"https://www.amazon.in/dp/B0H9L7L6NX" },
           desc:"Ayurvedic hing and saunf oil for gentle comfort from gas and colic.",
           hi:{ desc:"गैस और कोलिक में कोमल आराम के लिए आयुर्वेदिक हींग और सौंफ़ तेल।" } },
  balm:  { type:"care", kind:"tin", name:"After Bite Turmeric Balm", count:"25 g", c:"#E8A93A", tint:"#FAE6C2",
           img:"assets/products/turmeric-balm.webp", photo:"cover", q:"Novel after bite turmeric balm", video:"turmeric-balm",
           links:{ flipkart:"https://www.flipkart.com/novel-after-bite-turmeric-balm-soothing-comfort-insect-bites-25-g/p/itmedec09420d5b0" },
           desc:"A turmeric balm that soothes little arms and legs after insect bites.", hi:{ desc:"कीड़े के काटने के बाद नन्हे हाथ-पैरों को आराम देने वाला हल्दी बाम।" } },
  soap:  { type:"care", kind:"tin", name:"Babio Natural Baby Soap", c:"#8A6BB8", tint:"#EFE8F7",
           img:"assets/photos/babio-soap-almonds.webp", photo:"cover", q:"Novel Babio baby soap",
           links:{ amazon:"https://www.amazon.in/dp/B0HHFX9DZJ", flipkart:"https://www.flipkart.com/novel-baby-soap-buy-6-3-free/p/itmaab3e5acb924f", meesho:"https://www.meesho.com/novel-babio-baby-soap-buy-4-get-2-free-75g-x-6-value-pack-gentle-moisturizing-cleanser-with-olive-almond-oil-for-delicate-baby-skin/p/bczdk0" }, video:"baby-soap",
           desc:"Moisturising baby soap with glycerine, almond oil and olive oil.",
           hi:{ desc:"ग्लिसरीन, बादाम तेल और जैतून तेल वाला मॉइस्चराइज़िंग बेबी सोप।" } },
  detergent:{ type:"care", kind:"pump", name:"Baby Liquid Detergent", count:"1000 ml", tag:"Baby laundry", c:"#8DC163", tint:"#E6F2D4",
           img:"assets/products/baby-liquid-detergent.webp", q:"Novel plant enriched baby liquid detergent", video:"baby-detergent",
           links:{ amazon:"https://www.amazon.in/dp/B0GTZSBDWD", flipkart:"https://www.flipkart.com/novel-baby-liquid-detergent-anti-bacterial-neem-coconut-removes-milk-food-stains-detergent/p/itmf1a2ed7d3961d" },
           desc:"Plant-enriched laundry detergent for baby clothes, with neem and coconut-based cleansers that help lift stains and odours.",
           hi:{ desc:"बच्चों के कपड़ों के लिए प्लांट-एनरिच्ड लॉन्ड्री डिटर्जेंट, नीम और नारियल-आधारित क्लींज़र के साथ, जो दाग और गंध हटाने में मदद करते हैं।" } },

  diapers:{ type:"essential", icon:"diaper", name:"Baby diapers", tint:"#ECF5D8", q:"Novel baby diapers",
           desc:"Soft, leak-guarded comfort", hi:{ name:"बेबी डायपर", desc:"मुलायम, लीक से सुरक्षा" } },
  mat:   { type:"essential", icon:"mat", name:"Dry baby mat", tint:"#ECF5D8", q:"Novel baby dry sheet mat",
           desc:"Waterproof sheet for cot & travel", hi:{ name:"ड्राई बेबी मैट", desc:"पालने और सफ़र के लिए वॉटरप्रूफ़ शीट" } },
  bottle:{ type:"essential", icon:"bottle", name:"Feeding bottles", tint:"#ECF5D8", q:"Novel baby feeding bottle",
           desc:"Easy-grip, easy to clean", hi:{ name:"फ़ीडिंग बोतल", desc:"पकड़ने और साफ़ करने में आसान" } }
};

/* ---------- Ratings shown on the site ----------
   Checked on the marketplaces on 29 Oct 2026 — update when they change. */
const RATINGS = {
  amazon:   { score:"4.3", count:"14.5K",      hiCount:"14.5 हज़ार", n:14500 },
  flipkart: { score:"4.4", count:"4.28 lakh",  hiCount:"4.28 लाख", n:428920 },
  meesho:   { score:"4.3", count:"49.6K",      hiCount:"49.6 हज़ार", n:49600 }
};

/* ---------- Photos ----------
   Put files in the assets folder and write the path in src. */
const FACTORY_PHOTOS = [
  { src:"", caption:"Mysuru — wipes line" },
  { src:"", caption:"Manesar — packing" },
  { src:"", caption:"QA microbiology lab" },
  { src:"", caption:"Cleanroom filling" }
];

/* ---------- Instagram reels from mums ----------
   Only add creators who have agreed to be featured.
   thumb: a cover image in assets; url: the reel link; handle: @name */
const REELS = [
  { thumb:"", url:"", handle:"" },
  { thumb:"", url:"", handle:"" },
  { thumb:"", url:"", handle:"" },
  { thumb:"", url:"", handle:"" }
];

/* ---------- Doctor's word ----------
   Use only a quote the doctor has written or approved, with consent. */
const DOCTOR = { quote:"", hiQuote:"", name:"", title:"", photo:"" };

/* ---------- Certificates ----------
   file: path to a PDF in assets (e.g. "assets/certs/iso-9001.pdf").
   Without a file, the badge offers "Request a copy" by email instead. */
const CERTS = [
  { seal:"ISO<br>9001",  name:"ISO 9001",      label:"Quality management",          file:"" },
  { seal:"ISO<br>14001", name:"ISO 14001",     label:"Environmental management",    file:"" },
  { seal:"GMP",          name:"GMP certified", label:"Good Manufacturing Practice", file:"" },
  { seal:"EXP",          name:"Export ready",  label:"UAE · Africa · Southeast Asia", file:"", noDoc:true }
];
const CERT_EMAIL = "partner@noveltissues.com";

/* ---------- FAQ ----------
   Please have your product / medical team review these answers. */
const FAQ = [
  { q:"Are Novel wipes safe for newborns?",
    a:"All Novel wipes are paraben-free, alcohol-free, pH-balanced and dermatologically tested. For newborns and very sensitive skin, we suggest our 99% Pure Water wipes, which are fragrance-free.",
    hq:"क्या Novel वाइप्स नवजात के लिए सुरक्षित हैं?",
    ha:"सभी Novel वाइप्स पैराबेन-फ़्री, अल्कोहल-फ़्री, pH-संतुलित और डर्मेटोलॉजिकली टेस्टेड हैं। नवजात और बहुत संवेदनशील त्वचा के लिए हम ख़ुशबू-रहित 99% प्योर वॉटर वाइप्स सुझाते हैं।" },
  { q:"Which wipe should I choose?",
    a:"Pick 99% Pure Water for newborns and sensitive skin, Goat Milk for dry skin, and Aloe Vera & Chamomile for everyday use. The product finder on this page can help you decide.",
    hq:"मुझे कौन-सा वाइप चुनना चाहिए?",
    ha:"नवजात और संवेदनशील त्वचा के लिए 99% प्योर वॉटर, रूखी त्वचा के लिए गोट मिल्क, और रोज़ के इस्तेमाल के लिए एलोवेरा और कैमोमाइल चुनें। इस पेज पर दिया प्रोडक्ट फ़ाइंडर भी मदद करेगा।" },
  { q:"Can I use the wipes on my baby's face and hands?",
    a:"Yes, they're gentle enough for face and hands after meals. Avoid wiping directly over the eyes.",
    hq:"क्या मैं वाइप्स शिशु के चेहरे और हाथों पर इस्तेमाल कर सकती हूँ?",
    ha:"हाँ, खाने के बाद चेहरे और हाथों के लिए ये काफ़ी कोमल हैं। सीधे आँखों पर न पोंछें।" },
  { q:"Can I flush baby wipes?",
    a:"No. Please throw used wipes in the dustbin. Flushing wipes can block pipes and drains.",
    hq:"क्या बेबी वाइप्स फ़्लश कर सकते हैं?",
    ha:"नहीं। इस्तेमाल किए वाइप्स डस्टबिन में डालें। फ़्लश करने से पाइप और नालियाँ जाम हो सकती हैं।" },
  { q:"How do I stop wipes from drying out?",
    a:"Press the lid shut after every use and keep the pack away from direct sunlight and heat.",
    hq:"वाइप्स को सूखने से कैसे बचाएँ?",
    ha:"हर बार इस्तेमाल के बाद ढक्कन दबाकर बंद करें और पैक को सीधी धूप और गर्मी से दूर रखें।" },
  { q:"How do I use the After Bite Turmeric Balm and Tummy Roll-On?",
    a:"Follow the directions and age guidance on the pack. Try any new product on a small patch of skin first, and ask your paediatrician if you're unsure.",
    hq:"आफ़्टर बाइट टर्मरिक बाम और टमी रोल-ऑन कैसे इस्तेमाल करें?",
    ha:"पैक पर दिए निर्देश और उम्र संबंधी जानकारी का पालन करें। कोई भी नया प्रोडक्ट पहले त्वचा के छोटे हिस्से पर आज़माएँ, और शक हो तो अपने शिशु रोग विशेषज्ञ से पूछें।" },
  { q:"Is the Baby Liquid Detergent safe for newborn clothes?",
    a:"It's made for baby laundry: pH-balanced, with an IFRA-certified allergen-free fragrance, and made without phosphates, sulphates, parabens, phthalates and dyes. You can use it for hand wash or machine wash.",
    hq:"क्या बेबी लिक्विड डिटर्जेंट नवजात के कपड़ों के लिए सुरक्षित है?",
    ha:"यह बच्चों के कपड़ों के लिए बना है: pH-संतुलित, IFRA-प्रमाणित एलर्जन-फ़्री ख़ुशबू के साथ, और फ़ॉस्फ़ेट, सल्फ़ेट, पैराबेन, थैलेट और रंगों के बिना। इसे हाथ से या मशीन में धुलाई, दोनों के लिए इस्तेमाल कर सकते हैं।" },
  { q:"Where can I buy Novel products?",
    a:"On Amazon, Flipkart and Meesho, or in minutes on Blinkit and Swiggy Instamart. Use the shop buttons on this page.",
    hq:"Novel प्रोडक्ट्स कहाँ से ख़रीदें?",
    ha:"Amazon, Flipkart और Meesho पर, या Blinkit और Swiggy Instamart पर मिनटों में। इस पेज के शॉप बटन इस्तेमाल करें।" },
  { q:"Do you supply hospitals or bulk orders?",
    a:"Yes. Email partner@noveltissues.com with what you need and our team will reply.",
    hq:"क्या आप अस्पतालों या बल्क ऑर्डर के लिए सप्लाई करते हैं?",
    ha:"हाँ। अपनी ज़रूरत partner@noveltissues.com पर ईमेल करें, हमारी टीम जवाब देगी।" }
];

/* ---------- Parenting tips ----------
   General guidance only — please have it reviewed before publishing. */
const TIPS = [
  { id:"bath", tag:"Bath", hiTag:"स्नान", mins:3, tint:"#E0F1F6", icon:"wash", products:["wash","soap","water"],
    title:"Your newborn's first baths", hiTitle:"नवजात के पहले स्नान",
    excerpt:"Sponge baths, water temperature and how often to bathe.", hiExcerpt:"स्पंज बाथ, पानी का तापमान और कितनी बार नहलाएँ।",
    body:`<p>The first baths can feel nerve-wracking. A little preparation makes them calm and quick.</p>
<h4>Start with sponge baths</h4><p>Until the umbilical cord stump falls off (usually within one to three weeks), give gentle sponge baths instead of putting your baby in water.</p>
<h4>Get everything ready first</h4><ul><li>Warm the room and keep a towel, clean nappy and clothes within reach.</li><li>Use warm, not hot, water. Test it with your elbow or the inside of your wrist — it should feel comfortably warm.</li><li>Never leave your baby alone in or near water, even for a moment.</li></ul>
<h4>Keep it short and gentle</h4><p>Five to ten minutes is plenty. Use a small amount of mild wash, rinse well, then pat dry — especially in the folds of the neck, arms and thighs.</p>
<h4>How often?</h4><p>Two or three baths a week is enough for most newborns. On other days, clean the face, hands and nappy area with a soft wipe.</p>` },
  { id:"massage", tag:"Massage", hiTag:"मालिश", mins:3, tint:"#FBEFD0", icon:"oil", products:["oil","roll"],
    title:"A simple baby massage routine", hiTitle:"शिशु की मालिश का आसान तरीका",
    excerpt:"When to massage, what order to follow and when to skip it.", hiExcerpt:"कब मालिश करें, किस क्रम में करें और कब न करें।",
    body:`<p>Massage is a lovely way to bond, and many parents find it helps their baby settle.</p>
<h4>Pick the right moment</h4><p>Choose a time when your baby is awake and calm — not straight after a feed. Waiting 30 to 45 minutes after feeding works well.</p>
<h4>A simple order to follow</h4><ul><li>Warm a little oil between your palms.</li><li>Legs and feet: long, gentle strokes from thigh to ankle.</li><li>Tummy: slow circles in a clockwise direction.</li><li>Chest and arms: stroke outwards from the centre.</li><li>Back: lay your baby on their tummy and stroke from neck to bottom.</li></ul>
<h4>Watch your baby</h4><p>If your baby turns away, cries or stiffens, stop and try another day. Skip massage when your baby is unwell or has a fever, and avoid broken or irritated skin.</p>
<h4>New product? Patch-test first</h4><p>Try a small amount on a small area of skin and wait a day before using it more widely.</p>` },
  { id:"rash", tag:"Nappy", hiTag:"डायपर", mins:2, tint:"#E6F2D4", icon:"water", products:["water","aloe","diapers"],
    title:"Keeping nappy rash away", hiTitle:"डायपर रैश से बचाव",
    excerpt:"Simple habits that keep the nappy area calm and dry.", hiExcerpt:"आसान आदतें जो डायपर वाली जगह को सूखा और आरामदायक रखें।",
    body:`<p>Most nappy rash comes from skin staying wet for too long. A few habits make a big difference.</p>
<ul><li><b>Change often.</b> Change as soon as the nappy is wet or dirty.</li><li><b>Clean gently.</b> Wipe front to back with a soft, fragrance-free wipe. Don't scrub.</li><li><b>Let skin breathe.</b> Give a few minutes of nappy-free time before putting on a fresh one.</li><li><b>Not too tight.</b> Leave room for air between the nappy and the skin.</li></ul>
<h4>When to see a doctor</h4><p>Call your paediatrician if the rash doesn't improve in two or three days, has blisters or pus, spreads beyond the nappy area, or comes with a fever.</p>` },
  { id:"bag", tag:"Travel", hiTag:"सफ़र", mins:2, tint:"#FAE6C2", icon:"aloe", products:["aloe","mat","diapers"],
    title:"What to pack in the diaper bag", hiTitle:"डायपर बैग में क्या रखें",
    excerpt:"A checklist for outings, trips and train journeys.", hiExcerpt:"घूमने, सफ़र और ट्रेन यात्रा के लिए चेकलिस्ट।",
    body:`<p>A well-packed bag means fewer surprises. Here's a checklist you can reuse.</p>
<ul><li>Nappies — roughly one for every two to three hours out, plus two spare</li><li>A pack of wipes with a resealable lid</li><li>A changing mat or dry sheet</li><li>A spare set of clothes (and a spare top for you)</li><li>A burp cloth or soft towel</li><li>Small bags for used nappies and wet clothes</li><li>Feeding essentials for your baby's age</li><li>Any medicines your doctor has prescribed</li></ul>
<p>Restock the bag as soon as you're home, so it's ready for next time.</p>` }
];

/* ---------- What's inside ----------
   Key ingredients per product, taken from the product listings. The full
   ingredient list is on each pack — add more here if you like. */
const INGREDIENTS = {
  aloe:      { name:"Aloe vera",       hi:"एलोवेरा",        icon:"🌿", why:"Soothes and hydrates delicate skin.",                 hiWhy:"नाज़ुक त्वचा को आराम और नमी देता है।" },
  chamomile: { name:"Chamomile",       hi:"कैमोमाइल",       icon:"🌼", why:"A gentle flower extract known for calming skin.",      hiWhy:"त्वचा को शांत रखने के लिए जाना जाने वाला कोमल फूल का अर्क।" },
  vitE:      { name:"Vitamin E",       hi:"विटामिन E",       icon:"✨", why:"Helps keep skin soft and moisturised.",                hiWhy:"त्वचा को मुलायम और नम रखने में मदद करता है।" },
  jojoba:    { name:"Jojoba oil",      hi:"जोजोबा तेल",      icon:"💧", why:"A light oil that adds moisture without feeling greasy.", hiWhy:"हल्का तेल जो बिना चिपचिपाहट के नमी देता है।" },
  goatmilk:  { name:"Goat milk",       hi:"बकरी का दूध",     icon:"🥛", why:"Rich and nourishing for dry or delicate skin.",        hiWhy:"रूखी या नाज़ुक त्वचा के लिए भरपूर पोषण।" },
  water:     { name:"99% water",       hi:"99% पानी",        icon:"💧", why:"Mostly pure water, so there's very little else on baby's skin.", hiWhy:"ज़्यादातर शुद्ध पानी, ताकि शिशु की त्वचा पर और कुछ कम से कम लगे।" },
  glycerine: { name:"Glycerine",       hi:"ग्लिसरीन",        icon:"💦", why:"Draws in moisture to stop skin drying out.",            hiWhy:"नमी खींचकर त्वचा को सूखने से बचाता है।" },
  oat:       { name:"Oat extract",     hi:"ओट एक्सट्रैक्ट",  icon:"🌾", why:"A gentle, soothing ingredient for everyday washing.",   hiWhy:"रोज़ नहाने के लिए एक कोमल, आरामदायक तत्व।" },
  shea:      { name:"Shea butter",     hi:"शिया बटर",        icon:"🧈", why:"Helps lock in moisture after the bath.",                hiWhy:"नहाने के बाद नमी बनाए रखने में मदद करता है।" },
  coconut:   { name:"Cold-pressed coconut oil", hi:"कोल्ड-प्रेस्ड नारियल तेल", icon:"🥥", why:"A traditional massage oil, pressed without heat.", hiWhy:"पारंपरिक मालिश तेल, बिना गर्म किए निकाला गया।" },
  hing:      { name:"Hing (asafoetida) oil", hi:"हींग तेल", icon:"🌱", why:"Traditionally used for tummy comfort in Ayurveda.",   hiWhy:"आयुर्वेद में पेट के आराम के लिए पारंपरिक रूप से इस्तेमाल होता है।" },
  saunf:     { name:"Saunf (fennel) oil", hi:"सौंफ़ तेल",    icon:"🌿", why:"A traditional ingredient for easing gas.",             hiWhy:"गैस में आराम के लिए एक पारंपरिक तत्व।" },
  almond:    { name:"Almond oil",      hi:"बादाम तेल",       icon:"🌰", why:"Nourishes and softens skin.",                          hiWhy:"त्वचा को पोषण देता है और मुलायम बनाता है।" },
  neem:      { name:"Neem",            hi:"नीम",            icon:"🌿", why:"A plant ingredient in the cleaning formula that helps remove stains and odours.", hiWhy:"सफ़ाई फ़ॉर्मूले का पौधा-आधारित हिस्सा, जो दाग और गंध हटाने में मदद करता है।" },
  coconutClean:{ name:"Coconut-based cleansers", hi:"नारियल-आधारित क्लींज़र", icon:"🥥", why:"Plant-derived cleansers that wash baby clothes clean and fresh.", hiWhy:"पौधों से बने क्लींज़र जो बच्चों के कपड़ों को साफ़ और ताज़ा धोते हैं।" },
  fragrance: { name:"Allergen-free fragrance", hi:"एलर्जन-फ़्री ख़ुशबू", icon:"🌸", why:"An IFRA-certified, allergen-free fragrance for a fresh smell after every wash.", hiWhy:"IFRA-प्रमाणित, एलर्जन-फ़्री ख़ुशबू, हर धुलाई के बाद ताज़गी के लिए।" },
  olive:     { name:"Olive oil",       hi:"जैतून तेल",       icon:"🫒", why:"Adds gentle moisture to the soap.",                    hiWhy:"सोप में कोमल नमी जोड़ता है।" }
};
const INSIDE = {
  aloe:  { items:["aloe","chamomile","vitE","jojoba"], free:["Parabens","Alcohol"] },
  goat:  { items:["goatmilk"],                         free:["Parabens","Alcohol"] },
  water: { items:["water","vitE","glycerine"],         free:["Parabens","Alcohol","Fragrance"] },
  wash:  { items:["oat","shea"] },
  oil:   { items:["coconut"] },
  roll:  { items:["hing","saunf"] },
  soap:  { items:["glycerine","almond","olive"] },
  detergent: { items:["neem","coconutClean","fragrance"], free:["Phosphates","Sulphates","Parabens","Phthalates","Dyes"] }
};

/* ---------- Reviews ----------
   Add reviews parents have sent you directly (with their permission).
   { text, hiText, name, city, product, stars } */
const REVIEWS = [];

/* ---------- #NovelMoms photo wall ----------
   Photos parents have shared with permission. { src, handle } */
const MOM_PHOTOS = [];
const MOM_HASHTAG = "NovelMoms";

/* ---------- Weekly WhatsApp tips — sample tip per age ---------- */
const AGE_TIPS = [
  { id:"expecting", label:"Expecting", hiLabel:"गर्भावस्था", product:"water",
    tip:"Pack your hospital bag by week 36: newborn nappies, a pack of gentle wipes, a few soft outfits and a swaddle.",
    hiTip:"36वें हफ़्ते तक अस्पताल का बैग तैयार कर लें: नवजात डायपर, कोमल वाइप्स का एक पैक, कुछ मुलायम कपड़े और एक स्वैडल।" },
  { id:"0-3", label:"0–3 months", hiLabel:"0–3 महीने", product:"water",
    tip:"Clean the nappy area gently from front to back, then let the skin air-dry for a minute before the fresh nappy goes on.",
    hiTip:"डायपर वाली जगह को आगे से पीछे की ओर हल्के से साफ़ करें, फिर नया डायपर लगाने से पहले त्वचा को एक मिनट हवा में सूखने दें।" },
  { id:"3-6", label:"3–6 months", hiLabel:"3–6 महीने", product:"oil",
    tip:"A short massage after the bath is a lovely bonding ritual. Watch your baby's cues and stop if they seem unsettled.",
    hiTip:"नहाने के बाद छोटी-सी मालिश अपनापन बढ़ाती है। शिशु के इशारों पर ध्यान दें और बेचैन लगे तो रुक जाएँ।" },
  { id:"6-12", label:"6–12 months", hiLabel:"6–12 महीने", product:"aloe",
    tip:"Starting solids? Keep a pack of wipes at the high chair for messy faces and little hands.",
    hiTip:"ठोस आहार शुरू किया है? खाने की कुर्सी के पास वाइप्स रखें — गंदे चेहरे और नन्हे हाथों के लिए।" },
  { id:"1-3", label:"1–3 years", hiLabel:"1–3 साल", product:"aloe",
    tip:"Toddlers on the move: keep a resealable pack in every bag so the wipes never dry out.",
    hiTip:"चलते-फिरते बच्चे: हर बैग में एक रीसील पैक रखें, ताकि वाइप्स कभी न सूखें।" }
];

/* ---------- Product details (Products page) ----------
   "Best for" and how-to-use steps for each product. Please check these
   against the directions printed on each pack. */
const PRODUCT_INFO = {
  aloe:  { bestFor:"Everyday nappy changes, mealtimes and outings", hiBestFor:"रोज़ डायपर बदलना, खाना और बाहर जाना",
           use:["Peel back the label and open the lid.","Pull out one wipe and gently clean baby's skin.","Press the lid shut so the rest stay moist.","Throw used wipes in the bin. Don't flush them."],
           hiUse:["लेबल हटाकर ढक्कन खोलें।","एक वाइप निकालें और शिशु की त्वचा को हल्के से साफ़ करें।","ढक्कन दबाकर बंद करें ताकि बाकी वाइप्स नम रहें।","इस्तेमाल किए वाइप्स डस्टबिन में डालें, फ़्लश न करें।"] },
  goat:  { bestFor:"Dry or delicate skin that needs extra nourishment", hiBestFor:"रूखी या नाज़ुक त्वचा जिसे अतिरिक्त पोषण चाहिए",
           use:["Open the lid and pull out one wipe.","Clean gently. There's no need to rinse.","Press the lid shut after every use.","Throw used wipes in the bin. Don't flush them."],
           hiUse:["ढक्कन खोलें और एक वाइप निकालें।","हल्के से साफ़ करें, धोने की ज़रूरत नहीं।","हर बार इस्तेमाल के बाद ढक्कन बंद करें।","इस्तेमाल किए वाइप्स डस्टबिन में डालें, फ़्लश न करें।"] },
  water: { bestFor:"Newborns and very sensitive skin", hiBestFor:"नवजात और बहुत संवेदनशील त्वचा",
           use:["Open the lid and pull out one wipe.","Wipe gently from front to back during nappy changes.","Let the skin air-dry for a moment before a fresh nappy.","Press the lid shut after every use."],
           hiUse:["ढक्कन खोलें और एक वाइप निकालें।","डायपर बदलते समय आगे से पीछे की ओर हल्के से पोंछें।","नया डायपर लगाने से पहले त्वचा को थोड़ा हवा में सूखने दें।","हर बार इस्तेमाल के बाद ढक्कन बंद करें।"] },
  wash:  { bestFor:"Daily bath time, for hair and body", hiBestFor:"रोज़ नहाने के लिए, बाल और शरीर दोनों",
           use:["Wet baby's hair and body with warm water.","Lather a small amount in your palm and wash gently.","Rinse well and pat dry, especially in skin folds."],
           hiUse:["शिशु के बाल और शरीर गुनगुने पानी से गीले करें।","हथेली में थोड़ा-सा लेकर झाग बनाएँ और हल्के से धोएँ।","अच्छी तरह धोकर थपथपाकर सुखाएँ, ख़ासकर त्वचा की सिलवटों में।"] },
  oil:   { bestFor:"A gentle daily massage before or after the bath", hiBestFor:"नहाने से पहले या बाद में रोज़ की कोमल मालिश",
           use:["Warm a few drops between your palms.","Massage with long, gentle strokes.","Try it on a small patch of skin first, and avoid broken skin."],
           hiUse:["कुछ बूँदें हथेलियों में गर्म करें।","लंबे, कोमल स्ट्रोक से मालिश करें।","पहले त्वचा के छोटे हिस्से पर आज़माएँ, कटी-फटी त्वचा पर न लगाएँ।"] },
  roll:  { bestFor:"Gas and tummy discomfort", hiBestFor:"गैस और पेट की बेचैनी",
           use:["Roll gently around baby's navel in a clockwise direction.","Follow the age guidance and directions on the pack."],
           hiUse:["शिशु की नाभि के चारों ओर घड़ी की दिशा में हल्के से लगाएँ।","पैक पर दी गई उम्र संबंधी जानकारी और निर्देशों का पालन करें।"] },
  balm:  { bestFor:"Soothing skin after insect bites", hiBestFor:"कीड़े के काटने के बाद त्वचा को आराम",
           use:["Apply a small amount gently on the bite.","For external use only. Don't use on broken skin.","If irritation persists, consult your paediatrician."],
           hiUse:["काटे हुए हिस्से पर थोड़ा-सा हल्के से लगाएँ।","सिर्फ़ बाहरी इस्तेमाल के लिए। कटी-फटी त्वचा पर न लगाएँ।","जलन बनी रहे तो अपने शिशु रोग विशेषज्ञ से संपर्क करें।"] },
  detergent:{ bestFor:"Newborn and baby clothes, bibs and burp cloths", hiBestFor:"नवजात और बच्चों के कपड़े, बिब और बर्प क्लॉथ",
           use:["Check the care label on your baby's clothes.","Use it for hand wash or machine wash, adding the amount shown on the pack.","Rinse well and dry as usual."],
           hiUse:["शिशु के कपड़ों पर लगा केयर लेबल देखें।","हाथ से या मशीन में धुलाई के लिए, पैक पर बताई मात्रा डालें।","अच्छी तरह खंगालें और हमेशा की तरह सुखाएँ।"] },
  soap:  { bestFor:"A gentle, moisturising daily bath", hiBestFor:"रोज़ का कोमल, मॉइस्चराइज़िंग स्नान",
           use:["Lather the soap in wet hands.","Wash baby gently.","Rinse well and pat dry."],
           hiUse:["गीले हाथों में सोप का झाग बनाएँ।","शिशु को हल्के से नहलाएँ।","अच्छी तरह धोकर थपथपाकर सुखाएँ।"] }
};

/* ---------- Brand videos (Mum & baby page and product details) ---------- */
const VIDEOS = [
  { id:"baby-oil",      title:"The oldest ritual there is", hiTitle:"सबसे पुरानी रस्म", product:"oil" },
  { id:"baby-soap",     title:"Bath time, made gentle",     hiTitle:"कोमल स्नान का समय", product:"soap" },
  { id:"baby-shampoo",  title:"Splashes and giggles",       hiTitle:"छपाक और खिलखिलाहट", product:"wash" },
  { id:"turmeric-balm", title:"Nature's healing touch",     hiTitle:"प्रकृति का कोमल स्पर्श", product:"balm" },
  { id:"baby-detergent", title:"Soft on little clothes",     hiTitle:"नन्हे कपड़ों पर कोमल", product:"detergent" }
];

/* ---------- Google Analytics ----------
   Paste your GA4 Measurement ID (looks like "G-XXXXXXXXXX"). Leave "" to turn off. */
const GA_ID = "G-DGTXRTYKWN";

/* ---------- One page per product (file names, without .html) ---------- */
const PRODUCT_SLUGS = {
  aloe:"aloe-vera-baby-wipes", goat:"goat-milk-baby-wipes", water:"water-baby-wipes",
  wash:"head-to-toe-baby-wash", oil:"coconut-baby-oil", roll:"tummy-roll-on",
  balm:"after-bite-turmeric-balm", soap:"babio-baby-soap", detergent:"baby-liquid-detergent"
};
