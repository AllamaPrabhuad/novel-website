/* Extra languages: Kannada, Tamil, Telugu, Marathi.
   English text → translation. Hindi lives in app.js and covers the full site;
   these cover menus, buttons, headings and product labels. Anything not listed
   stays in English. Add more lines any time — the English text must match exactly. */
const LANG_NAMES = { en:"English", hi:"हिंदी", kn:"ಕನ್ನಡ", ta:"தமிழ்", te:"తెలుగు", mr:"मराठी" };

const I18N = {
kn: {
  "Products":"ಉತ್ಪನ್ನಗಳು","Mum & baby":"ಅಮ್ಮ ಮತ್ತು ಮಗು","Tips":"ಸಲಹೆಗಳು","Factory":"ಕಾರ್ಖಾನೆ","Quality":"ಗುಣಮಟ್ಟ","Recognition":"ಮನ್ನಣೆ","FAQ":"ಪ್ರಶ್ನೋತ್ತರ","Shop now":"ಈಗಲೇ ಖರೀದಿಸಿ",
  "Order online":"ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ","Need it now?":"ಈಗಲೇ ಬೇಕೆ?","⚡ In minutes":"⚡ ನಿಮಿಷಗಳಲ್ಲಿ","Buy on":"ಖರೀದಿಸಿ","Order on":"ಆರ್ಡರ್ ಮಾಡಿ",
  "Aloe vera":"ಅಲೋವೆರಾ","Goat milk":"ಮೇಕೆ ಹಾಲು","99% water":"99% ನೀರು",
  "Best seller in baby wipes":"ಬೇಬಿ ವೈಪ್ಸ್‌ನಲ್ಲಿ ಬೆಸ್ಟ್ ಸೆಲ್ಲರ್","Parents keep coming back.":"ಪೋಷಕರು ಮತ್ತೆ ಮತ್ತೆ ಬರುತ್ತಾರೆ.","That's the whole story.":"ಅದೇ ನಮ್ಮ ಕಥೆ.",
  "packs sold every month":"ಪ್ಯಾಕ್‌ಗಳು ಪ್ರತಿ ತಿಂಗಳು ಮಾರಾಟ","parents who ordered again":"ಪೋಷಕರು ಮತ್ತೆ ಆರ್ಡರ್ ಮಾಡಿದ್ದಾರೆ","on Flipkart, from 4.28 lakh+ ratings":"Flipkart‌ನಲ್ಲಿ, 4.28 ಲಕ್ಷ+ ರೇಟಿಂಗ್‌ಗಳಿಂದ",
  "pouches of monthly capacity":"ಪೌಚ್‌ಗಳ ಮಾಸಿಕ ಸಾಮರ್ಥ್ಯ","packs reaching Indian homes today":"ಪ್ಯಾಕ್‌ಗಳು ಇಂದು ಭಾರತೀಯ ಮನೆಗಳನ್ನು ತಲುಪುತ್ತಿವೆ",
  "The Novel baby range":"Novel ಬೇಬಿ ಶ್ರೇಣಿ","Everything baby's skin needs, nothing it doesn't.":"ಮಗುವಿನ ಚರ್ಮಕ್ಕೆ ಬೇಕಾದ್ದೆಲ್ಲಾ, ಬೇಡದ್ದು ಏನೂ ಇಲ್ಲ.",
  "Baby wipes":"ಬೇಬಿ ವೈಪ್ಸ್","Baby care":"ಬೇಬಿ ಕೇರ್","Baby essentials":"ಮಗುವಿನ ಅಗತ್ಯ ವಸ್ತುಗಳು","Full details →":"ಸಂಪೂರ್ಣ ವಿವರ →",
  "See all products, ingredients & how to use →":"ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು, ಪದಾರ್ಥಗಳು ಮತ್ತು ಬಳಸುವ ವಿಧಾನ ನೋಡಿ →",
  "Bestseller":"ಬೆಸ್ಟ್‌ಸೆಲ್ಲರ್","Baby laundry":"ಬೇಬಿ ಲಾಂಡ್ರಿ","Buy online":"ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಖರೀದಿಸಿ", "Watch":"ನೋಡಿ", "Bottles & toys":"ಬಾಟಲ್ ಮತ್ತು ಆಟಿಕೆಗಳು","Novel moments":"Novel ಕ್ಷಣಗಳು","Made for little moments.":"ಪುಟ್ಟ ಕ್ಷಣಗಳಿಗಾಗಿ ತಯಾರಿಸಲಾಗಿದೆ.","A day with Novel":"Novel ಜೊತೆ ಒಂದು ದಿನ","From the first bath to the last cuddle.":"ಮೊದಲ ಸ್ನಾನದಿಂದ ಕೊನೆಯ ಅಪ್ಪುಗೆಯವರೆಗೆ.","India's first":"ಭಾರತದಲ್ಲೇ ಮೊದಲು","For newborns":"ನವಜಾತ ಶಿಶುಗಳಿಗೆ","Tear-free":"ಕಣ್ಣೀರು-ರಹಿತ",
  "Explore Novel":"Novel ಅನ್ನು ಅನ್ವೇಷಿಸಿ","Everything a parent wants to know, in one place.":"ಪೋಷಕರು ತಿಳಿಯಬೇಕಾದ್ದೆಲ್ಲಾ, ಒಂದೇ ಕಡೆ.",
  "Parenting tips":"ಪೋಷಕರಿಗೆ ಸಲಹೆಗಳು","Our factories":"ನಮ್ಮ ಕಾರ್ಖಾನೆಗಳು","Where to buy":"ಎಲ್ಲಿ ಖರೀದಿಸಬೇಕು","Open →":"ತೆರೆಯಿರಿ →",
  "Shop Novel baby care":"Novel ಬೇಬಿ ಕೇರ್ ಖರೀದಿಸಿ","Pick your marketplace.":"ನಿಮ್ಮ ಮಾರುಕಟ್ಟೆ ಆಯ್ಕೆಮಾಡಿ.","Delivered in minutes":"ನಿಮಿಷಗಳಲ್ಲಿ ಡೆಲಿವರಿ",
  "Fast delivery across India":"ಭಾರತದಾದ್ಯಂತ ವೇಗದ ಡೆಲಿವರಿ","Great deals all year":"ವರ್ಷವಿಡೀ ಉತ್ತಮ ಡೀಲ್‌ಗಳು","Everyday low prices":"ಪ್ರತಿದಿನ ಕಡಿಮೆ ಬೆಲೆ","At your door in minutes":"ನಿಮಿಷಗಳಲ್ಲಿ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ",
  "Best for":"ಯಾವುದಕ್ಕೆ ಉತ್ತಮ","Key ingredients":"ಮುಖ್ಯ ಪದಾರ್ಥಗಳು","Free from":"ಇವುಗಳಿಂದ ಮುಕ್ತ","How to use":"ಬಳಸುವ ವಿಧಾನ",
  "Product details":"ಉತ್ಪನ್ನದ ವಿವರ","Know exactly what you're buying.":"ನೀವು ಏನು ಖರೀದಿಸುತ್ತಿದ್ದೀರಿ ಎಂದು ನಿಖರವಾಗಿ ತಿಳಿಯಿರಿ.",
  "Parabens":"ಪ್ಯಾರಬೆನ್‌ಗಳು","Alcohol":"ಆಲ್ಕೋಹಾಲ್","Fragrance":"ಸುಗಂಧ",
  "Shop":"ಖರೀದಿ","Explore":"ಅನ್ವೇಷಿಸಿ","Contact":"ಸಂಪರ್ಕ","Made with care in India":"ಭಾರತದಲ್ಲಿ ಕಾಳಜಿಯಿಂದ ತಯಾರಿಸಲಾಗಿದೆ",
  "Questions? Chat with us":"ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಿ","Chat with us on WhatsApp":"WhatsApp‌ನಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಿ",
  "Home":"ಮುಖಪುಟ","Buy":"ಖರೀದಿಸಿ","Product":"ಉತ್ಪನ್ನ"
},
ta: {
  "Products":"தயாரிப்புகள்","Mum & baby":"அம்மா & குழந்தை","Tips":"குறிப்புகள்","Factory":"தொழிற்சாலை","Quality":"தரம்","Recognition":"அங்கீகாரம்","FAQ":"கேள்வி-பதில்","Shop now":"இப்போதே வாங்குங்கள்",
  "Order online":"ஆன்லைனில் ஆர்டர் செய்யுங்கள்","Need it now?":"இப்போதே வேண்டுமா?","⚡ In minutes":"⚡ நிமிடங்களில்","Buy on":"வாங்க","Order on":"ஆர்டர் செய்ய",
  "Aloe vera":"கற்றாழை","Goat milk":"ஆட்டுப் பால்","99% water":"99% தண்ணீர்",
  "Best seller in baby wipes":"பேபி வைப்ஸில் பெஸ்ட் செல்லர்","Parents keep coming back.":"பெற்றோர் மீண்டும் மீண்டும் வருகிறார்கள்.","That's the whole story.":"அதுதான் எங்கள் கதை.",
  "packs sold every month":"பேக்குகள் ஒவ்வொரு மாதமும் விற்பனை","parents who ordered again":"பெற்றோர் மீண்டும் ஆர்டர் செய்தனர்","on Flipkart, from 4.28 lakh+ ratings":"Flipkart-இல், 4.28 லட்சம்+ மதிப்பீடுகளில்",
  "pouches of monthly capacity":"பவுச்களின் மாதாந்திரத் திறன்","packs reaching Indian homes today":"பேக்குகள் இன்று இந்திய வீடுகளைச் சென்றடைகின்றன",
  "The Novel baby range":"Novel பேபி வரிசை","Everything baby's skin needs, nothing it doesn't.":"குழந்தையின் சருமத்திற்குத் தேவையானது எல்லாம், தேவையில்லாதது எதுவும் இல்லை.",
  "Baby wipes":"பேபி வைப்ஸ்","Baby care":"பேபி கேர்","Baby essentials":"குழந்தைக்கான அத்தியாவசியங்கள்","Full details →":"முழு விவரம் →",
  "See all products, ingredients & how to use →":"அனைத்து தயாரிப்புகள், பொருட்கள் & பயன்படுத்தும் முறையைப் பாருங்கள் →",
  "Bestseller":"பெஸ்ட்செல்லர்","Baby laundry":"பேபி லாண்ட்ரி","Buy online":"ஆன்லைனில் வாங்குங்கள்", "Watch":"பாருங்கள்", "Bottles & toys":"பாட்டில் & பொம்மைகள்","Novel moments":"Novel தருணங்கள்","Made for little moments.":"சின்னச் சின்ன தருணங்களுக்காக.","A day with Novel":"Novel உடன் ஒரு நாள்","From the first bath to the last cuddle.":"முதல் குளியல் முதல் கடைசி அணைப்பு வரை.","India's first":"இந்தியாவில் முதன்முறை","For newborns":"பிறந்த குழந்தைகளுக்கு","Tear-free":"கண்ணீர் வராதது",
  "Explore Novel":"Novel-ஐ ஆராயுங்கள்","Everything a parent wants to know, in one place.":"பெற்றோர் தெரிந்துகொள்ள விரும்புவது எல்லாம், ஒரே இடத்தில்.",
  "Parenting tips":"பெற்றோருக்கான குறிப்புகள்","Our factories":"எங்கள் தொழிற்சாலைகள்","Where to buy":"எங்கே வாங்குவது","Open →":"திறக்க →",
  "Shop Novel baby care":"Novel பேபி கேர் வாங்குங்கள்","Pick your marketplace.":"உங்கள் சந்தையைத் தேர்ந்தெடுங்கள்.","Delivered in minutes":"நிமிடங்களில் டெலிவரி",
  "Fast delivery across India":"இந்தியா முழுவதும் விரைவான டெலிவரி","Great deals all year":"ஆண்டு முழுவதும் சிறந்த சலுகைகள்","Everyday low prices":"தினமும் குறைந்த விலை","At your door in minutes":"நிமிடங்களில் உங்கள் வீட்டு வாசலில்",
  "Best for":"எதற்கு சிறந்தது","Key ingredients":"முக்கியப் பொருட்கள்","Free from":"இவை இல்லாதது","How to use":"பயன்படுத்தும் முறை",
  "Product details":"தயாரிப்பு விவரங்கள்","Know exactly what you're buying.":"நீங்கள் என்ன வாங்குகிறீர்கள் என்பதைச் சரியாகத் தெரிந்துகொள்ளுங்கள்.",
  "Parabens":"பாராபென்கள்","Alcohol":"ஆல்கஹால்","Fragrance":"வாசனை",
  "Shop":"வாங்க","Explore":"ஆராயுங்கள்","Contact":"தொடர்புக்கு","Made with care in India":"இந்தியாவில் அக்கறையுடன் தயாரிக்கப்பட்டது",
  "Questions? Chat with us":"கேள்விகள் உள்ளதா? எங்களுடன் பேசுங்கள்","Chat with us on WhatsApp":"WhatsApp-இல் எங்களுடன் பேசுங்கள்",
  "Home":"முகப்பு","Buy":"வாங்க","Product":"தயாரிப்பு"
},
te: {
  "Products":"ఉత్పత్తులు","Mum & baby":"అమ్మ & బిడ్డ","Tips":"చిట్కాలు","Factory":"ఫ్యాక్టరీ","Quality":"నాణ్యత","Recognition":"గుర్తింపు","FAQ":"ప్రశ్నలు-జవాబులు","Shop now":"ఇప్పుడే కొనండి",
  "Order online":"ఆన్‌లైన్‌లో ఆర్డర్ చేయండి","Need it now?":"ఇప్పుడే కావాలా?","⚡ In minutes":"⚡ నిమిషాల్లో","Buy on":"కొనండి","Order on":"ఆర్డర్ చేయండి",
  "Aloe vera":"కలబంద","Goat milk":"మేక పాలు","99% water":"99% నీరు",
  "Best seller in baby wipes":"బేబీ వైప్స్‌లో బెస్ట్ సెల్లర్","Parents keep coming back.":"తల్లిదండ్రులు మళ్లీ మళ్లీ వస్తున్నారు.","That's the whole story.":"అదే మా కథ.",
  "packs sold every month":"ప్యాక్‌లు ప్రతి నెలా అమ్ముడవుతున్నాయి","parents who ordered again":"తల్లిదండ్రులు మళ్లీ ఆర్డర్ చేశారు","on Flipkart, from 4.28 lakh+ ratings":"Flipkartలో, 4.28 లక్షల+ రేటింగ్‌లతో",
  "pouches of monthly capacity":"పౌచ్‌ల నెలవారీ సామర్థ్యం","packs reaching Indian homes today":"ప్యాక్‌లు ఈరోజు భారతీయ ఇళ్లకు చేరుతున్నాయి",
  "The Novel baby range":"Novel బేబీ శ్రేణి","Everything baby's skin needs, nothing it doesn't.":"బిడ్డ చర్మానికి కావలసినదంతా, అక్కర్లేనిది ఏదీ లేదు.",
  "Baby wipes":"బేబీ వైప్స్","Baby care":"బేబీ కేర్","Baby essentials":"బిడ్డకు అవసరమైనవి","Full details →":"పూర్తి వివరాలు →",
  "See all products, ingredients & how to use →":"అన్ని ఉత్పత్తులు, పదార్థాలు & వాడే విధానం చూడండి →",
  "Bestseller":"బెస్ట్‌సెల్లర్","Baby laundry":"బేబీ లాండ్రీ","Buy online":"ఆన్‌లైన్‌లో కొనండి", "Watch":"చూడండి", "Bottles & toys":"బాటిల్స్ & బొమ్మలు","Novel moments":"Novel క్షణాలు","Made for little moments.":"చిన్ని క్షణాల కోసం.","A day with Novel":"Novel‌తో ఒక రోజు","From the first bath to the last cuddle.":"మొదటి స్నానం నుండి చివరి కౌగిలింత వరకు.","India's first":"భారతదేశంలో మొదటిది","For newborns":"నవజాత శిశువులకు","Tear-free":"కన్నీళ్లు రానిది",
  "Explore Novel":"Novel‌ను తెలుసుకోండి","Everything a parent wants to know, in one place.":"తల్లిదండ్రులు తెలుసుకోవాలనుకునేదంతా, ఒకే చోట.",
  "Parenting tips":"పేరెంటింగ్ చిట్కాలు","Our factories":"మా ఫ్యాక్టరీలు","Where to buy":"ఎక్కడ కొనాలి","Open →":"తెరవండి →",
  "Shop Novel baby care":"Novel బేబీ కేర్ కొనండి","Pick your marketplace.":"మీ మార్కెట్‌ప్లేస్‌ను ఎంచుకోండి.","Delivered in minutes":"నిమిషాల్లో డెలివరీ",
  "Fast delivery across India":"భారతదేశమంతటా వేగవంతమైన డెలివరీ","Great deals all year":"ఏడాది పొడవునా గొప్ప డీల్స్","Everyday low prices":"ప్రతిరోజూ తక్కువ ధరలు","At your door in minutes":"నిమిషాల్లో మీ ఇంటి వద్దకు",
  "Best for":"దేనికి ఉత్తమం","Key ingredients":"ముఖ్య పదార్థాలు","Free from":"వీటి నుండి ముక్తం","How to use":"వాడే విధానం",
  "Product details":"ఉత్పత్తి వివరాలు","Know exactly what you're buying.":"మీరు ఏమి కొంటున్నారో ఖచ్చితంగా తెలుసుకోండి.",
  "Parabens":"పారాబెన్‌లు","Alcohol":"ఆల్కహాల్","Fragrance":"సువాసన",
  "Shop":"కొనండి","Explore":"తెలుసుకోండి","Contact":"సంప్రదించండి","Made with care in India":"భారతదేశంలో శ్రద్ధతో తయారైంది",
  "Questions? Chat with us":"ప్రశ్నలు ఉన్నాయా? మాతో మాట్లాడండి","Chat with us on WhatsApp":"WhatsAppలో మాతో మాట్లాడండి",
  "Home":"హోమ్","Buy":"కొనండి","Product":"ఉత్పత్తి"
},
mr: {
  "Products":"उत्पादने","Mum & baby":"आई आणि बाळ","Tips":"टिप्स","Factory":"कारखाना","Quality":"गुणवत्ता","Recognition":"ओळख","FAQ":"प्रश्नोत्तरे","Shop now":"आत्ताच खरेदी करा",
  "Order online":"ऑनलाइन ऑर्डर करा","Need it now?":"आत्ताच हवे आहे?","⚡ In minutes":"⚡ काही मिनिटांत","Buy on":"खरेदी करा","Order on":"ऑर्डर करा",
  "Aloe vera":"कोरफड","Goat milk":"शेळीचे दूध","99% water":"99% पाणी",
  "Best seller in baby wipes":"बेबी वाइप्समध्ये बेस्ट सेलर","Parents keep coming back.":"पालक पुन्हा पुन्हा परत येतात.","That's the whole story.":"हीच आमची कहाणी.",
  "packs sold every month":"पॅक दर महिन्याला विकले जातात","parents who ordered again":"पालकांनी पुन्हा ऑर्डर केली","on Flipkart, from 4.28 lakh+ ratings":"Flipkart वर, 4.28 लाख+ रेटिंगमधून",
  "pouches of monthly capacity":"पाउचची मासिक क्षमता","packs reaching Indian homes today":"पॅक आज भारतीय घरांपर्यंत पोहोचत आहेत",
  "The Novel baby range":"Novel बेबी श्रेणी","Everything baby's skin needs, nothing it doesn't.":"बाळाच्या त्वचेला हवे ते सर्व, नको ते काहीच नाही.",
  "Baby wipes":"बेबी वाइप्स","Baby care":"बेबी केअर","Baby essentials":"बाळाच्या गरजेच्या वस्तू","Full details →":"संपूर्ण माहिती →",
  "See all products, ingredients & how to use →":"सर्व उत्पादने, घटक आणि वापरण्याची पद्धत पाहा →",
  "Bestseller":"बेस्टसेलर","Baby laundry":"बेबी लॉन्ड्री","Buy online":"ऑनलाइन खरेदी करा", "Watch":"पहा", "Bottles & toys":"बाटल्या आणि खेळणी","Novel moments":"Novel क्षण","Made for little moments.":"छोट्या क्षणांसाठी बनवलेले.","A day with Novel":"Novel सोबत एक दिवस","From the first bath to the last cuddle.":"पहिल्या आंघोळीपासून शेवटच्या मिठीपर्यंत.","India's first":"भारतात पहिले","For newborns":"नवजात बाळांसाठी","Tear-free":"डोळ्यांना न झोंबणारे",
  "Explore Novel":"Novel जाणून घ्या","Everything a parent wants to know, in one place.":"पालकांना जाणून घ्यायचे सर्व काही, एकाच ठिकाणी.",
  "Parenting tips":"पालकत्व टिप्स","Our factories":"आमचे कारखाने","Where to buy":"कुठे खरेदी करावे","Open →":"उघडा →",
  "Shop Novel baby care":"Novel बेबी केअर खरेदी करा","Pick your marketplace.":"तुमचे मार्केटप्लेस निवडा.","Delivered in minutes":"काही मिनिटांत डिलिव्हरी",
  "Fast delivery across India":"संपूर्ण भारतात जलद डिलिव्हरी","Great deals all year":"वर्षभर उत्तम ऑफर्स","Everyday low prices":"दररोज कमी किमती","At your door in minutes":"काही मिनिटांत तुमच्या दारात",
  "Best for":"कशासाठी उत्तम","Key ingredients":"मुख्य घटक","Free from":"यांपासून मुक्त","How to use":"वापरण्याची पद्धत",
  "Product details":"उत्पादनाची माहिती","Know exactly what you're buying.":"तुम्ही नेमके काय खरेदी करत आहात ते जाणून घ्या.",
  "Parabens":"पॅराबेन्स","Alcohol":"अल्कोहोल","Fragrance":"सुगंध",
  "Shop":"खरेदी","Explore":"जाणून घ्या","Contact":"संपर्क","Made with care in India":"भारतात काळजीपूर्वक बनवलेले",
  "Questions? Chat with us":"प्रश्न आहेत? आमच्याशी बोला","Chat with us on WhatsApp":"WhatsApp वर आमच्याशी बोला",
  "Home":"मुख्यपृष्ठ","Buy":"खरेदी करा","Product":"उत्पादन"
}
};

/* Page titles and the home headline in each language (used by build.py too). */
const I18N_HEADLINES = {
  index:       { kn:'ಭಾರತದ ಅತಿ ಹೆಚ್ಚು ಮಾರಾಟವಾಗುವ ಬೇಬಿ ವೈಪ್ಸ್. <span class="pull">ಪ್ರತಿ ಬಾರಿಯೂ ಮೃದು.</span>', ta:'இந்தியாவின் அதிகம் விற்பனையாகும் பேபி வைப்ஸ். <span class="pull">ஒவ்வொரு முறையும் மென்மை.</span>', te:'భారతదేశంలో అత్యధికంగా అమ్ముడయ్యే బేబీ వైప్స్. <span class="pull">ప్రతిసారీ మృదువుగా.</span>', mr:'भारतातील सर्वाधिक विकले जाणारे बेबी वाइप्स. <span class="pull">प्रत्येक वेळी कोमल.</span>' },
  products:    { kn:"ಮೊದಲ ವೈಪ್‌ನಿಂದ ಮೊದಲ ಸ್ನಾನದವರೆಗೆ, ಮೃದುವಾದ ಆರೈಕೆ.", ta:"முதல் வைப் முதல் முதல் குளியல் வரை, மென்மையான பராமரிப்பு.", te:"మొదటి వైప్ నుండి మొదటి స్నానం వరకు, మృదువైన సంరక్షణ.", mr:"पहिल्या वाइपपासून पहिल्या आंघोळीपर्यंत, कोमल काळजी." },
  mums:        { kn:"ನಿಮ್ಮಿಬ್ಬರಿಗಾಗಿ ತಯಾರಿಸಲಾಗಿದೆ.", ta:"உங்கள் இருவருக்காகவும்.", te:"మీ ఇద్దరి కోసం.", mr:"तुम्हा दोघांसाठी." },
  tips:        { kn:"ದೊಡ್ಡ ಮೊದಲ ಕ್ಷಣಗಳಿಗೆ ಪುಟ್ಟ ಮಾರ್ಗದರ್ಶಿಗಳು.", ta:"பெரிய முதல் தருணங்களுக்கு சிறிய வழிகாட்டிகள்.", te:"పెద్ద తొలి క్షణాలకు చిన్న గైడ్‌లు.", mr:"मोठ्या पहिल्या क्षणांसाठी छोटे मार्गदर्शक." },
  factory:     { kn:"ನಾವು ಹೊರಗುತ್ತಿಗೆ ನೀಡುವುದಿಲ್ಲ. ಕಾರ್ಖಾನೆ ನಮ್ಮದೇ.", ta:"நாங்கள் வெளியே கொடுப்பதில்லை. தொழிற்சாலை எங்களுடையதே.", te:"మేము అవుట్‌సోర్స్ చేయము. ఫ్యాక్టరీ మాదే.", mr:"आम्ही आउटसोर्स करत नाही. कारखाना आमचाच आहे." },
  quality:     { kn:"ಪರೀಕ್ಷೆಯಲ್ಲಿ ಉತ್ತೀರ್ಣವಾಗದೆ ಯಾವ ಬ್ಯಾಚ್ ಕೂಡ ಹೊರಹೋಗುವುದಿಲ್ಲ.", ta:"தேர்ச்சி பெறாமல் எந்த பேட்சும் வெளியே செல்லாது.", te:"పరీక్షలో పాస్ కాకుండా ఏ బ్యాచ్ బయటకు వెళ్లదు.", mr:"पास झाल्याशिवाय कोणतीही बॅच बाहेर जात नाही." },
  recognition: { kn:"ಲಕ್ಷಾಂತರ ಪೋಷಕರ ನಂಬಿಕೆ.", ta:"லட்சக்கணக்கான பெற்றோரின் நம்பிக்கை.", te:"లక్షలాది తల్లిదండ్రుల నమ్మకం.", mr:"लाखो पालकांचा विश्वास." },
  faq:         { kn:"ಒಳ್ಳೆಯ ಪ್ರಶ್ನೆಗಳು. ನೇರ ಉತ್ತರಗಳು.", ta:"நல்ல கேள்விகள். நேரடி பதில்கள்.", te:"మంచి ప్రశ్నలు. సూటి జవాబులు.", mr:"चांगले प्रश्न. सरळ उत्तरे." },
  shop:        { kn:"ನೀವು ಈಗಾಗಲೇ ಬಳಸುವ ಆ್ಯಪ್‌ನಿಂದಲೇ ಆರ್ಡರ್ ಮಾಡಿ.", ta:"நீங்கள் ஏற்கனவே பயன்படுத்தும் ஆப்பிலேயே ஆர்டர் செய்யுங்கள்.", te:"మీరు ఇప్పటికే వాడే యాప్ నుండే ఆర్డర్ చేయండి.", mr:"तुम्ही आधीच वापरत असलेल्या ॲपवरूनच ऑर्डर करा." }
};
