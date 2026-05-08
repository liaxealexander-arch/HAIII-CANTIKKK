/* FLOATING HEARTS */

const heartsContainer = document.querySelector(".hearts");

for(let i = 0; i < 50; i++){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
    (12 + Math.random() * 24) + "px";

    heart.style.animationDuration =
    (5 + Math.random() * 6) + "s";

    heart.style.animationDelay =
    Math.random() * 5 + "s";

    heartsContainer.appendChild(heart);
}

/* BUTTON */

const yesBtn = document.getElementById("yes");

const laterBtn = document.getElementById("later");

const card = document.getElementById("card");

/* YES */

yesBtn.onclick = () => {

    card.innerHTML = `

    <div class="result">

        <h1>YEAYYYY 💖</h1>

        <p>
            sekarang kamu resmi jadi<br>
            <b>teman rasa pacar</b> aku 😆💕
            <br><br>
            makasii udah nerima akuu ✨
        </p>

    </div>

    `;
};

/* LATER */

laterBtn.onclick = () => {

    card.innerHTML = `

    <div class="result">

        <h1>hehe okii 🙈</h1>

        <p>
            aku tunggu jawaban terbaik dari kamu yaa 💖
        </p>

    </div>

    `;
};
