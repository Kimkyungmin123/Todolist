const quotes = [
    {
        quote: "Working hard for something we don't care about is called stressed, working hard for something we love is called passion.",
        author: "- Simon Sinek -",
    },
    {
        quote: "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new."
        ,
        author: "- Brian Tracy -",
    },
    {
        quote: "Don't let the fear of losing be greater than the excitement of winning.",
        author: "- Robert Kiyosaki -",
    },
    {
        quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author: "- Dale Carnegie -",
    },
    {
        quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will."
        ,
        author: "- Vince Lombardi-",
    },
    {
        quote: "It is your determination and persistence that will make you a successful person.",
        author: "- Kenneth J Hutchins -",
    },
    {
        quote: "You can waste your life drawing lines. Or you can live your life crossing them.",
        author: "- Shonda Rhimes -",
    },
    {
        quote: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
        author: "- Alex Rodriguez -",
    },
    {
        quote: "Respect a man, he will do the more.",
        author: "- James Howell -",
    },
    {
        quote: "Action is the foundational key to all success.",
        author: "- Pablo Picasso -",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote=(quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerHTML= todaysQuote.quote;
author.innerHTML= todaysQuote.author;
