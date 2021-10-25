let posts = [
    {
        id: "A1",

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nomecognome1"],

        numeroLikes: 20,

        dataCreazione: "Due mesi fa"
    },

    {
        id: "A2",

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nomecognome2"],

        numeroLikes: 0,

        dataCreazione: "Un anno fa"
    },

    {
        id: "A3",

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nomecognome3"],

        numeroLikes: 10,

        dataCreazione: "3 mesi fa"
    },

    {
        id: "A4",

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nomecognome4"],

        numeroLikes: 30,

        dataCreazione: "4 mesi fa"
    },
]
const main = document.getElementById("main")
for (let index = 0; index < posts.length; index++) {
    if (posts[index].autore[1]) {
        console.log("true")
    }
    else {
        console.log("false")
    }
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
                <button class="A${index + 1}"><i class="fas fa-thumbs-up"></i>Mi piace</button>
                <p class="like_counter">Piace a <span class="L${index + 1}">${posts[index].numeroLikes}</span> persone</p>
            </div>
        </div>`;
    main.innerHTML += element;
}

for (let index = 0; index < posts.length; index++) {
    const element = document.querySelector(`.A${index + 1}`)
    element.addEventListener("click", function () {
        const idFinder = this.className;
        for (let index = 0; index < posts.length; index++) {
            if (idFinder == posts[index].id) {
                console.log(posts[index].numeroLikes)
                posts[index].numeroLikes = posts[index].numeroLikes + 1;
                document.querySelector(`.L${index + 1}`).innerHTML = posts[index].numeroLikes;
            }
        }
    })
}

