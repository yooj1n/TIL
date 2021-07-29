const quotes = [
    {
        quote : "love what you have."
    },
    {
        quote : "It is not over till it is over."
    },
    {
        quote : "Only I can change my life, No one can do it for me."
    },
    {
        quote : "Better the last smile than the first laughter."
    },
    {
        quote : "Do not be afraid to give up the good to go for the great."
    },
    {
        quote : "Better late than never."
    },
    {
        quote : "Slow and steady win the race."
    },
    {
        quote : "Success does not come overnight."
    },
    {
        quote : "Habit is second nature."
    },
    {
        quote : "hahahaha"
    }
];

const quote = document.querySelector("#quote span:first-child");
const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
