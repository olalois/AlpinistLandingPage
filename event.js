let card = [
    {
        id:1,
        image:"images/BLAQ-0013-min.jpg",
        title: "Women in Tech",
        note:"We’ll get you directly seated and inside for you to enjoy the show.",
        month:"JAN",
        date:"14",
    },
    {
        id:2,
        image:"images/BLAQ-0013-min.jpg",
        title: "Women in Tech",
        note:"We’ll get you directly seated and inside for you to enjoy the show.",
        month:"FEB",
        date:"14",
    },
    {
        id:3,
        image:"images/BLAQ-0013-min.jpg",
        title: "Women in Tech",
        note:"We’ll get you directly seated and inside for you to enjoy the show.",
        month:"MAR",
        date:"14",
    },
    {
        id:4,
        image:"images/BLAQ-0013-min.jpg",
        title: "Women in Tech",
        note:"We’ll get you directly seated and inside for you to enjoy the show.",
        month:"APR",
        date:"14",
    },
    {
        id:5,
        image:"images/BLAQ-0013-min.jpg",
        title: "Women in Tech",
        note:"We’ll get you directly seated and inside for you to enjoy the show.",
        month:"MAY",
        date:"14",
    }
]
function generateCards(){
    const container = document.getElementById("cards");

    card.forEach(function(cards){
        const cardsHtml = `
       <div class="card" id="${cards.id}">
                                <div class="card-img">
                                    <img src="${cards.image}" alt="">
                                </div>
                                <div class="card-flex">
                                    <div class="card-date">
                                        <div class="month">${cards.month}</div>
                                        <div class="date">${cards.date}</div>
                                    </div>
                                    <div class="card-writeup">
                                        <div class="card-header">${cards.title}</div>
                                        <div class="card-note">
                                           ${cards.note}</div>
                                    </div>
                                </div>
                            </div>`;
          container.innerHTML += cardsHtml
    })
}
window.onload = generateCards()
let hambugerNav = document.querySelector('.hambuger')
let navBar = document.querySelector('.nav-elements')
let close = document.querySelector(".close")


hambugerNav.addEventListener('click', function(){
    hambugerNav.style.display = "none"
    navBar.style.display = "flex"
});

close.addEventListener('click', function(){
    hambugerNav.style.display = "flex"
    navBar.style.display = "none"
})