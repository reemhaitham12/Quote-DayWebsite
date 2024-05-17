const quotes = [
    {
        quote: `“It does not do to dwell on dreams and forget to live.”`,
        writer: `- J.K. Rowling`,
        photo:`./image/image17.jpg`
    },
    {
        quote: `“A room without books is like a body without a soul.”`,
        writer: `- Marcus Tullius Cicero`,
        photo:`./image/image3.jpg`
    },
    {
        quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
        writer: `- Andre Gide`,
        photo:`./image/image13.jpg`
    },
    {
        quote: `“You only live once, but if you do it right, once is enough.”`,
        writer: `- Mae West`,
        photo:`./image/image5.jpg`
    },
    {
        quote: `“Be the change that you wish to see in the world.”`,
        writer: `- Mahatma Gandhi`,
        photo:`./image/image6.jpg`
    },
    {
        quote: `“If you tell the truth, you don't have to remember anything.”`,
        writer: `- Mark Twain`,
        photo:`./image/image7.jpg`
    },
    {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        writer: `- Elbert Hubbard`,
        photo:`./image/image8.jpg`
    },
    {
        quote: `“Well done is better than well said.”`,
        writer: `- Benjamin Franklin`,
        photo:`./image/image9.jpg`
    },
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        writer: `- Oscar Wilde`,
        photo:`./image/image10.jpg`
    },
    {
        quote: `“It is during our darkest moments that we must focus to see the light.”`,
        writer: `- Aristotle`,
        photo:`./image/image11.jpg`
    },
    {
        quote: `“Do one thing every day that scares you.”`,
        writer: `- Eleanor Roosevelt`,
        photo:`./image/image12.jpg`
    },
    {
        quote: `“So many books, so little time.”`,
        writer: `- Frank Zappa`,
        photo:`./image/image1.jpg`
    },
    {
        quote: `“We accept the love we think we deserve.”`,
        writer: `- Stephen Chbosky`,
        photo:`./image/image15.jpg`
    },
    {
        quote: `“Without music, life would be a mistake.”`,
        writer: `- Friedrich Nietzsche`,
        photo:`./image/image16.jpg`
    },
];

let btn = document.getElementById("Qbtn");
let Writer = document.getElementById("writer");
let quote = document.getElementById("text");
let imgWriter = document.getElementById("photo")
let shuffledQuotes = quotes.slice(); 
let currentIndex = shuffledQuotes.length;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

btn.addEventListener("click", function () {
    if (currentIndex <= 0) {
        shuffleArray(shuffledQuotes);
        currentIndex = shuffledQuotes.length;
    }
    currentIndex--;
    quote.innerHTML = shuffledQuotes[currentIndex].quote;
    Writer.innerHTML = shuffledQuotes[currentIndex].writer;
    imgWriter.src=shuffledQuotes[currentIndex].photo;
});
