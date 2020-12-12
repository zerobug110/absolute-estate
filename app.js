                                //nav slider
//select variable

const navList = document.querySelector('.nav__list');
const navToggle = document.querySelector('.lines');

navToggle.addEventListener('click', ()=> {
    navList.classList.toggle('show');    
});

//generate the current date

const currentDate = document.getElementById('current-date');

currentDate.innerHTML = new Date().getFullYear();


                        // review slider 
//review items
const reviews = [

    {
        id: 1,
        name: 'Buba Ceesay',
        date: ' 15 Feb 2020',
        description: 'got my house with 24hr of buying',
        text: 'I bought a 7 bedroom mansion in less than 24 hours. i was planning on buy a house last summer after checking few real estate website it was difficult to fine a 7 bedroom in duplex. after a week i found absolute estate and but a 7 bedroom in less than 24 hours just sign few documents and made the payment'
    }, 

    {
        id: 1,
        name: 'Ousman Touray',
        date: ' 20 sep 2020',
        description: 'cheap amazing luxury homes',
        text: 'i have grown up alway moving form one house to another, my parents never had their own house. I was alway dreaming of getting my own house some day. after 20 years my dream has come true all thanks to absolute estate for giving me flexible payment plan'
    },

    {
        id: 2,
        name: 'Abdou Janneh',
        date: ' 10 jan 2020',
        description: 'very easy to work with',
        text: 'i have rented in absolute estate apartments for the last seven years it pretty easy all the tenders are well responsible people and the environment is super quite and all problem that i have get fixed as soon as possible with quality use all around the house '
    },

    {
        id: 3,
        name: 'Fatou Secka',
        date: ' 10 jan 2020',
        description: 'The project span is quick', 
        text: 'I have many encounters with different real estate companies and all of them never finished they project in time. when they gave me a contract time of 5 months to complete my store building but to my surprise just one month before our contract end i got house keys fully finished',
        
    }
];

//select items
const name = document.querySelector('.review__name');
const reviewDate = document.querySelector('.review__date');
const  description = document.querySelector('.figcaption');
const text = document.querySelector('.review__paragraph');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//set starting item 
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', ()=>{
    //console.log('window loaded');
    showPerson(currentItem);
});

//show person base on item 

let showPerson = () => { 
    const item = reviews[currentItem];
    name.textContent = item.name;
    reviewDate.textContent = item.date;
    description.textContent = item.description;
    text.textContent = item.text;
}

//show next person

next.addEventListener('click', (event) => {
    event.preventDefault();
    currentItem++;

    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson()
});

// show prev person
prev.addEventListener('click', (event) => {
    event.preventDefault();
    currentItem--;

    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});
