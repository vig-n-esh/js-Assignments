let quotes = [
{"quote":"Imagination is more important than knowledge.",
 "author":"Albert Einstein"},
{"quote":"It does not matter how slowly you go as long as you do not stop.",
 "author":"Confucius"},
{"quote":"All our dreams can come true, if we have the courage to pursue them.",
 "author":"Walt Disney"},
{"quote":"I never dreamed about success, I worked for it.",
 "author":"Estee Lauder"},
{"quote":"There is nothing more powerful in the world than the idea that came in time.",
 "author":"Victor Hugo"},
{"quote":"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
 "author":"Aristotle"},
{"quote":"Never bend your head. Always hold it high. Look the world straight in the eye. ",
 "author":"Helen Keller"},
{"quote":"Setting goals is the first step in turning the invisible into the visible.",
 "author":"Tony Robbins"},
{"quote":"You can’t give up! When you give up, you're like everybody else.",
 "author":"Chris Evert"},
{"quote":"He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
 "author":"Pabol Picasso"},
{"quote":"When you want something, all the universe conspires in helping you to achieve it.",
 "author":"Paulo Coelho"},
{"quote":"Victory is not always winning the battle...but rising every time you fall.",
 "author":"Napoleon Bonaparte"},
{"quote":"The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.",
 "author":"Socrates "},
{"quote":"Reality is created by the mind, we can change our reality by changing our mind.",
 "author":"Plato"}
]

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
btn.addEventListener('click', getquote);
function getquote(){
  let num = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[num].quote;
  author.innerHTML = "-" + quotes[num].author;

}

