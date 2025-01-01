let cards = [
    {
        id:1,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["./images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:2,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:3,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:4,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:5,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:6,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:7,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:8,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:9,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    },
    {
        id:10,
        image:"images/profile-picture.svg",
        title:"President",
        name:"Akin-Thomas Bishop",
        socials: ["images/twiterlogo.svg", "images/instagramlogo.svg", "images/linkedinlogo.svg"],
        handles:["https://x.com/Bishopakint?s=09","https://www.instagram.com/akinthomasbishop/","https://www.linkedin.com/in/bishopabimbola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]
    }
]

function generateCards(){
    const container = document.getElementById("profile");

    cards.forEach(function(card){
        const cardHtml = `
        <div class="card" id="${card.id}">
                        <div class="card-img">
                            <img src="${card.image}" alt="">
                        </div>
                        <div class="card-title">
                            ${card.title}
                        </div>
                        <div class="card-name">
                            ${card.name}
                        </div>
                        <div class="card-socials">
                            <ul>
                                <li><a href="${card.handles[0]}"><img src="${card.socials[0]}" alt=""></a></li>
                                <li><a href="${card.handles[1]}"><img src="${card.socials[1]}" alt=""></a></li>
                                <li><a href="${card.handles[2]}"><img src="${card.socials[2]}" alt=""></a></li>
                            </ul>
                        </div>
                    </div>`;
          container.innerHTML += cardHtml
    })
}
window.onload = generateCards()