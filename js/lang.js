const lang = {

vi:{
title:"CÔNG TY L38",
subtitle:"Import Export Services & Trading",

menuHome:"Trang chủ",
menuAbout:"Giới thiệu",
menuServices:"Dịch vụ",
menuContact:"Liên hệ",

aboutTitle:"Giới thiệu công ty",
aboutText:`
Công ty L38 hoạt động trong lĩnh vực thương mại, dịch vụ và xuất nhập khẩu hàng hóa.
Chúng tôi hướng đến việc kết nối giao thương trong nước và quốc tế, cung cấp các giải pháp thương mại hiệu quả cho khách hàng và đối tác.
`,

serviceTitle:"Lĩnh vực hoạt động",

service1:"Import Export",
service1Text:"Dịch vụ xuất nhập khẩu hàng hóa trong và ngoài nước.",

service2:"Trade",
service2Text:"Kết nối đối tác và phát triển thương mại quốc tế.",

service3:"Logistics",
service3Text:"Hỗ trợ vận chuyển và thủ tục xuất nhập khẩu.",

contactTitle:"Thông tin liên hệ"
},

en:{
title:"L38 COMPANY",
subtitle:"Import Export Services & Trading",

menuHome:"Home",
menuAbout:"About",
menuServices:"Services",
menuContact:"Contact",

aboutTitle:"About Company",
aboutText:`
L38 Import Export is a company operating in trading, services and import-export activities.
We aim to connect domestic and international trade and provide effective commercial solutions for customers and partners.
`,

serviceTitle:"Business Areas",

service1:"Import Export",
service1Text:"Import and export services for domestic and international goods.",

service2:"Trade",
service2Text:"Connecting partners and developing international trade.",

service3:"Logistics",
service3Text:"Transportation support and import-export procedures.",

contactTitle:"Contact Information"
},

jp:{
title:"L38会社",
subtitle:"輸出入サービス & 貿易",

menuHome:"ホーム",
menuAbout:"会社紹介",
menuServices:"サービス",
menuContact:"連絡先",

aboutTitle:"会社紹介",
aboutText:`
L38 Import Exportは貿易・サービスおよび商品の輸出入分野で活動する企業です。
国内外のビジネスを結びつけ、顧客とパートナーに効果的なソリューションを提供します。
`,

serviceTitle:"事業分野",

service1:"輸出入",
service1Text:"国内外の商品の輸出入サービス。",

service2:"貿易",
service2Text:"国際貿易パートナーシップの構築。",

service3:"物流",
service3Text:"輸送および輸出入手続きのサポート。",

contactTitle:"連絡先"
},

hi:{
title:"कंपनी L38",
subtitle:"आयात निर्यात सेवाएं",

menuHome:"होम",
menuAbout:"परिचय",
menuServices:"सेवाएं",
menuContact:"संपर्क",

aboutTitle:"कंपनी परिचय",
aboutText:`
L38 Import Export व्यापार, सेवाओं और आयात-निर्यात के क्षेत्र में कार्य करने वाली कंपनी है।
हम घरेलू और अंतरराष्ट्रीय व्यापार को जोड़ने और ग्राहकों को प्रभावी समाधान प्रदान करने का लक्ष्य रखते हैं।
`,

serviceTitle:"व्यवसाय क्षेत्र",

service1:"आयात निर्यात",
service1Text:"घरेलू और अंतरराष्ट्रीय वस्तुओं का आयात निर्यात।",

service2:"व्यापार",
service2Text:"अंतरराष्ट्रीय व्यापार साझेदारी।",

service3:"लॉजिस्टिक्स",
service3Text:"परिवहन और आयात निर्यात प्रक्रियाओं का समर्थन।",

contactTitle:"संपर्क जानकारी"
}

};


function setLang(l){

document.getElementById("title").innerText = lang[l].title;
document.getElementById("subtitle").innerText = lang[l].subtitle;

document.getElementById("menuHome").innerText = lang[l].menuHome;
document.getElementById("menuAbout").innerText = lang[l].menuAbout;
document.getElementById("menuServices").innerText = lang[l].menuServices;
document.getElementById("menuContact").innerText = lang[l].menuContact;

document.getElementById("aboutTitle").innerText = lang[l].aboutTitle;
document.getElementById("aboutText").innerText = lang[l].aboutText;

document.getElementById("serviceTitle").innerText = lang[l].serviceTitle;

document.getElementById("service1").innerText = lang[l].service1;
document.getElementById("service1Text").innerText = lang[l].service1Text;

document.getElementById("service2").innerText = lang[l].service2;
document.getElementById("service2Text").innerText = lang[l].service2Text;

document.getElementById("service3").innerText = lang[l].service3;
document.getElementById("service3Text").innerText = lang[l].service3Text;

document.getElementById("contactTitle").innerText = lang[l].contactTitle;

}