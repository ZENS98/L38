// lấy section
const sections = document.querySelectorAll(".section");

// lấy service card
const cards = document.querySelectorAll(".service-card");

// observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

// kích hoạt section animation
sections.forEach(section=>{
    observer.observe(section);
});

// kích hoạt card animation
cards.forEach(card=>{
    observer.observe(card);
});