let posts = [
    {
        id: "A1",

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["", "nome cognome1"],

        numeroLikes: 20,

        dataCreazione: "20 giorni fa"
    },

    {
        id: "A2",

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nome cognome2"],

        numeroLikes: 0,

        dataCreazione: "Un mese fa"
    },

    {
        id: "A3",

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nome cognome3"],

        numeroLikes: 10,

        dataCreazione: "Due mesi fa"
    },

    {
        id: "A4",

        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nullaLorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet inventore labore laudantium rerum quidem autem temporibus eum obcaecati facere nulla.",

        immagine: "https://unsplash.it/300/300?image=",


        autore: ["https://unsplash.it/300/300?image=", "nome cognome4"],

        numeroLikes: 30,

        dataCreazione: "Quattro mesi fa"
    },
]
const main = document.getElementById("main")

/* AGGIUNTA ELEMENTO */
for (let index = 0; index < posts.length; index++) {
    element = `<div class="container">
            <div class="information">
                <img class="image_${index + 1}" src="${posts[index].autore[0]}"  alt="Random Image">
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
                <button class="A${index + 1}"><i class="fas fa-thumbs-up"></i> Mi piace</button>
                <p class="like_counter">Piace a <span class="L${index + 1}">${posts[index].numeroLikes}</span> persone</p>
            </div>
        </div>`;
    main.innerHTML += element;

    /* aggiunto controllo e fix per l'immagine rimossa */
    const imgFinder = document.querySelector(`.image_${index + 1}`)
    const arrPlace = getInitial(posts[index].autore[1])
    imgFinder.alt = arrPlace;
    let imgsrc = imgFinder.getAttribute("src")
    if (imgsrc == "") {
        imgFinder.classList.add("removeImage")
    }

}

/* aggiunta evento like+ */
for (let index = 0; index < posts.length; index++) {
    const element = document.querySelector(`.A${index + 1}`)
    element.addEventListener("click", function () {
        const idFinder = this.className;
        for (let index = 0; index < posts.length; index++) {
            if (idFinder == posts[index].id) {
                posts[index].numeroLikes = posts[index].numeroLikes + 1;
                document.querySelector(`.L${index + 1}`).innerHTML = posts[index].numeroLikes;
            }
        }
    })
}

/* funzione per ottenere le iniziali */
function getInitial(arr) {
    let placeholder = [];
    placeholder = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == " ") {
            placeholder = placeholder + arr[index + 1]
        }
    }
    return placeholder;
}


