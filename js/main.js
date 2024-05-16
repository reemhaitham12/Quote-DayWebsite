const quotes = [
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        writer: `- Albert Einstein`
    },
    {
        quote: `“A room without books is like a body without a soul.”`,
        writer: `- Marcus Tullius Cicero`
    },
    {
        quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        writer: `- Bernard M. Baruch`
    },
    {
        quote: `“You only live once, but if you do it right, once is enough.”`,
        writer: `- Mae West`
    },
    {
        quote: `“Be the change that you wish to see in the world.”`,
        writer: `- Mahatma Gandhi`
    },
    {
        quote: `“If you tell the truth, you don't have to remember anything.”`,
        writer: `- Mark Twain`
    },
    {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        writer: `- Elbert Hubbard`
    },
];

let btn = document.getElementById("Qbtn");
let Writer = document.getElementById("writer");
let quote = document.getElementById("text");
let photo = document.getElementById("ImageWriter");
btn.addEventListener("click", function () {
    for (let x = 1; x <= quotes.length; x++) {
        const random = Math.floor(Math.random() * quotes.length);
        quote.innerHTML = quotes[random].quote;
        Writer.innerHTML = quotes[random].writer;
        photo.innerHTML = quotes[random].image;
    }
})
