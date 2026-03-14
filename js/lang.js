const lang = {

vi:{
title:"CÔNG TY L38",
subtitle:"Thương mại & Dịch vụ Xuất Nhập Khẩu",

menuHome:"Trang chủ",
menuAbout:"Giới thiệu",
menuServices:"Dịch vụ",
menuContact:"Liên hệ",

aboutTitle:"Giới thiệu",
aboutText:`
<li>L38 Import Export là doanh nghiệp hoạt động trong lĩnh vực thương mại, dịch vụ và xuất nhập khẩu hàng hóa.</li>

<li>Công ty được thành lập với mục tiêu kết nối giao thương trong nước và quốc tế, cung cấp các giải pháp thương mại hiệu quả cho khách hàng và đối tác.</li>

<li>Với định hướng phát triển bền vững, L38 tập trung xây dựng hệ thống hoạt động chuyên nghiệp, minh bạch và đáng tin cậy trong lĩnh vực thương mại và logistics.</li>

<li>Chúng tôi luôn hướng tới việc tối ưu quy trình vận hành, nâng cao chất lượng dịch vụ và đảm bảo hiệu quả chuỗi cung ứng cho khách hàng.</li>
`,

serviceTitle:"Lĩnh vực hoạt động",
serviceText:`
<li>Phát triển mạng lưới đối tác trong nước và quốc tế nhằm mở rộng cơ hội thương mại và hợp tác lâu dài.</li>

<li>Cung cấp các dịch vụ xuất nhập khẩu, thương mại và hỗ trợ giao thương với quy trình rõ ràng và chuyên nghiệp.</li>

<li>Không ngừng nâng cao năng lực vận hành, quản lý và dịch vụ khách hàng để đáp ứng nhu cầu ngày càng cao của thị trường.</li>

<li>Cam kết xây dựng mối quan hệ hợp tác bền vững – minh bạch – cùng phát triển với khách hàng và đối tác.</li>
`,

contactTitle:"Thông tin liên hệ"
},

en:{
title:"L38 COMPANY",
subtitle:"Import Export Services & Trading",

menuHome:"Home",
menuAbout:"About",
menuServices:"Services",
menuContact:"Contact",

aboutTitle:"About",
aboutText:`
<li>L38 Import Export is a company operating in trading, services and import-export of goods.</li>

<li>The company was established to connect domestic and international trade and provide effective commercial solutions for customers and partners.</li>

<li>With a sustainable development orientation, L38 focuses on building a professional, transparent and reliable system in trade and logistics.</li>

<li>We continuously optimize operations, improve service quality and ensure supply chain efficiency for our customers.</li>
`,

serviceTitle:"Business Areas",
serviceText:`
<li>Developing a network of domestic and international partners to expand trade opportunities and long-term cooperation.</li>

<li>Providing professional import-export services and commercial trading support.</li>

<li>Continuously improving operational capacity, management and customer services.</li>

<li>Building sustainable, transparent and mutually beneficial partnerships with customers and partners.</li>
`,

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
<li>L38 Import Exportは、貿易・サービスおよび商品の輸出入分野で活動する企業です。</li>

<li>国内外の取引を結びつけ、顧客やパートナーへ効果的なビジネスソリューションを提供する目的で設立されました。</li>

<li>持続可能な発展を目指し、貿易と物流分野において専門的で透明性の高い運営体制を構築しています。</li>

<li>業務プロセスの最適化、サービス品質の向上、サプライチェーン効率の向上に取り組んでいます。</li>
`,

serviceTitle:"事業分野",
serviceText:`
<li>国内外のパートナーネットワークの拡大。</li>

<li>専門的な輸出入サービスおよび貿易支援。</li>

<li>運営能力・管理体制・顧客サービスの向上。</li>

<li>透明で持続可能なパートナーシップの構築。</li>
`,

contactTitle:"連絡先"
},

hi:{
title:"कंपनी L38",
subtitle:"आयात निर्यात सेवाएं",

menuHome:"होम",
menuAbout:"परिचय",
menuServices:"सेवाएं",
menuContact:"संपर्क",

aboutTitle:"परिचय",
aboutText:`
<li>L38 Import Export व्यापार, सेवाओं और वस्तुओं के आयात-निर्यात के क्षेत्र में कार्य करने वाली कंपनी है।</li>

<li>कंपनी की स्थापना घरेलू और अंतरराष्ट्रीय व्यापार को जोड़ने के उद्देश्य से की गई थी।</li>

<li>L38 व्यापार और लॉजिस्टिक्स में एक पेशेवर और पारदर्शी संचालन प्रणाली विकसित कर रही है।</li>

<li>हम संचालन प्रक्रियाओं को बेहतर बनाने और सेवा गुणवत्ता बढ़ाने के लिए निरंतर प्रयास करते हैं।</li>
`,

serviceTitle:"व्यवसाय क्षेत्र",
serviceText:`
<li>घरेलू और अंतरराष्ट्रीय व्यापार साझेदारी का विकास।</li>

<li>आयात-निर्यात और व्यापार सहायता सेवाएं।</li>

<li>प्रबंधन और ग्राहक सेवा क्षमता में सुधार।</li>

<li>पारदर्शी और दीर्घकालिक सहयोग संबंध बनाना।</li>
`,

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
document.getElementById("aboutText").innerHTML = lang[l].aboutText;

document.getElementById("serviceTitle").innerText = lang[l].serviceTitle;
document.getElementById("serviceText").innerHTML = lang[l].serviceText;

document.getElementById("contactTitle").innerText = lang[l].contactTitle;

}
