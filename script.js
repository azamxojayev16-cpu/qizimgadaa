const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionScreen =
    document.getElementById("questionScreen");

const letterScreen =
    document.getElementById("letterScreen");

const floatingHearts =
    document.getElementById("floatingHearts");


/* =========================
   YO'Q QOCHADI
========================= */

/* =========================
   YO'Q TUGMASI
========================= */

const noMessages = [
    "Yo‘q 😭",
    "Ishonchingiz komilmi? 🥺",
    "Yana bir o‘ylab ko‘ring 😭",
    "Men xafa bo‘laman-ku 🥹",
    "Bunaqa javob qabul qilinmaydi 😂",
    "Rostdan ham yo‘qmi? 😭",
    "Yurakdan o‘ylab ko‘ring ❤️",
    "Ha ni bossangiz bo‘ladi-ku 🥺",
    "Yo‘q deyishga qo‘ymayman 😂",
    "Oxirgi imkoniyat 😭❤️"
];

let noClickCount = 0;

const questionText =
    document.getElementById("questionText");

function escapeNo() {

    // Tugma HECH QACHON yo'qolmaydi
    noBtn.classList.add("running");

    // Keyingi yozuv
    noBtn.textContent =
        noMessages[
            noClickCount % noMessages.length
        ];

    noClickCount++;

    // Ekran chegaralaridan chiqib ketmasin
    const padding = 20;

    const maxX =
        window.innerWidth -
        noBtn.offsetWidth -
        padding;

    const maxY =
        window.innerHeight -
        noBtn.offsetHeight -
        padding;

    const x =
        padding +
        Math.random() * Math.max(maxX - padding, 0);

    const y =
        padding +
        Math.random() * Math.max(maxY - padding, 0);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}


/* Kompyuterda yaqinlashganda qochadi */
noBtn.addEventListener("mouseenter", escapeNo);


/* Telefonda bosilganda qochadi */
noBtn.addEventListener("touchstart", function(e) {

    e.preventDefault();

    escapeNo();

});

/* =========================
   HA BOSILGANDA
========================= */

yesBtn.addEventListener("click", function() {

    // Yurak portlashi
    heartExplosion();

    // Savolni yo'qotish
    questionScreen.style.display = "none";

    // Xatni chiqarish
    setTimeout(function() {

        letterScreen.classList.add("show");

    }, 700);

});


/* =========================
   YURAK PORTLASHI
========================= */

function heartExplosion() {

    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💓",
        "💘"
    ];

    for (let i = 0; i < 45; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "explosion-heart";

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            120 + Math.random() * 350;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        const rotate =
            Math.random() * 720 - 360;

        const size =
            15 + Math.random() * 25;

        heart.style.fontSize =
            size + "px";

        document.body.appendChild(heart);

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(${rotate}deg)
                        scale(1.4)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    900 + Math.random() * 700,

                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        setTimeout(function() {

            heart.remove();

        }, 1800);

    }

}


/* =========================
   FONDA UCHADIGAN YURAKLAR
========================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "float-heart";

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖"
    ];

    heart.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        12 + Math.random() * 18 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 6 + "s";

    floatingHearts.appendChild(heart);

    setTimeout(function() {

        heart.remove();

    }, 12000);

}


setInterval(createFloatingHeart, 700);