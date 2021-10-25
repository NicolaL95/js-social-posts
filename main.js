const posts = [
    {
        id: 1,

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nomecognome1"],

        numeroLikes: 20,

        dataCreazione: "19/10/2021"
    },

    {
        id: 2,

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nomecognome2"],

        numeroLikes: 0,

        dataCreazione: "11/10/2020"
    },

    {
        id: 3,

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nomecognome3"],

        numeroLikes: 10,

        dataCreazione: "12/10/2020"
    },

    {
        id: 4,

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nomecognome4"],

        numeroLikes: 30,

        dataCreazione: "10/10/2020"
    },
]
const main = document.getElementById("main")
for (let index = 0; index < posts.length; index++) {
    element = `<div class="container">
            <div class="information">
                <img src="${posts[index].autore[0]}" alt="Random Image">
                <div class="information_text">
                    <p class="user_name">${posts[index].autore[1]}</p>
                    <p class="date">${posts[index].dataCreazione}</p>
                </div>
            </div>
            <div class="desc">
                ${posts[index].contenuto}
            </div>
            <div class="hero_image">
                <img src="${posts[index].immagine}" alt="Random Image">
            </div>
            <div class="interaction">
                <button><i class="fas fa-thumbs-up"></i>Mi piace</button>
                <p class="like_counter">Piace a <span>${posts[index].numeroLikes}</span> persone</p>
            </div>
        </div>`;
    main.innerHTML += element;
}