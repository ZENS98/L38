const lang = {

vi:{
title:"CÔNG TY L38",
subtitle:"Thương mại & Dịch vụ Xuất Nhập Khẩu",

menuHome:"Trang chủ",
menuAbout:"Giới thiệu",
menuServices:"Dịch vụ",
menuContact:"Liên hệ",

aboutTitle:"Giới thiệu",
aboutText:"L38 là doanh nghiệp hoạt động trong lĩnh vực thương mại và xuất nhập khẩu.",

serviceTitle:"Lĩnh vực hoạt động",
serviceText:"Xuất nhập khẩu nông sản, thiết bị điện tử, kim khí điện máy và hàng tiêu dùng.",

contactTitle:"Thông tin liên hệ",
contactText:"Địa chỉ: 140/9 Đào Sư Tích, Phước Kiển, Nhà Bè, TP.HCM"
},

en:{
title:"L38 COMPANY",
subtitle:"Import Export Services & Trading",

menuHome:"Home",
menuAbout:"About",
menuServices:"Services",
menuContact:"Contact",

aboutTitle:"About",
aboutText:"L38 is a company specializing in trading and import export services.",

serviceTitle:"Business Areas",
serviceText:"Import export of agricultural products, electronics and consumer goods.",

contactTitle:"Contact",
contactText:"Address: Ho Chi Minh City, Vietnam"
},

jp:{
title:"L38会社",
subtitle:"輸出入サービス",

menuHome:"ホーム",
menuAbout:"会社紹介",
menuServices:"サービス",
menuContact:"連絡先",

aboutTitle:"会社紹介",
aboutText:"L38は貿易および輸出入サービスを提供する会社です。",

serviceTitle:"事業分野",
serviceText:"農産物、電子機器、消費財の輸出入。",

contactTitle:"連絡先",
contactText:"住所: ホーチミン市"
},

hi:{
title:"कंपनी L38",
subtitle:"आयात निर्यात सेवाएं",

menuHome:"होम",
menuAbout:"परिचय",
menuServices:"सेवाएं",
menuContact:"संपर्क",

aboutTitle:"परिचय",
aboutText:"L38 एक व्यापार और आयात निर्यात कंपनी है।",

serviceTitle:"सेवाएं",
serviceText:"कृषि उत्पाद और इलेक्ट्रॉनिक्स का आयात निर्यात।",

contactTitle:"संपर्क",
contactText:"पता: Ho Chi Minh City"
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
document.getElementById("serviceText").innerText = lang[l].serviceText;

document.getElementById("contactTitle").innerText = lang[l].contactTitle;
document.getElementById("contactText").innerText = lang[l].contactText;

}