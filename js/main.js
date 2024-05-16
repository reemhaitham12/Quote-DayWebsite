const quotes = [
    {
        quote: `“Never trust anyone who has not brought a book with them.”`,
        writer: `- Lemony Snicket`
    },
    {
        quote: `“A room without books is like a body without a soul.”`,
        writer: `- Marcus Tullius Cicero`
    },
    {
        quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
        writer: `- Andre Gide, Autumn Leaves`
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
    {
        quote: `“Well done is better than well said.”`,
        writer: `- Benjamin Franklin`
    },
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        writer: `- Oscar Wilde`
    },
    {
        quote: `“It is during our darkest moments that we must focus to see the light.”`,
        writer: `- Aristotle`
    },
    {
        quote: `“Do one thing every day that scares you.”`,
        writer: `- Eleanor Roosevelt`
    },
];

let btn = document.getElementById("Qbtn");
let Writer = document.getElementById("writer");
let quote = document.getElementById("text");
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
});
