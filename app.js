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
        text: 'this is the best car repair shope in the country their work is perfect and is the best anyone can get just hit em up and they will get ur car running as soon as possible with any worry. and i am rocking and rolling with breakdown'
    }, 

    {
        id: 1,
        name: 'Ousman Touray',
        date: ' 20 sep 2020',
        description: 'cheap amazing luxury homes',
        text: 'i got my car wrap and it has been 6 years now and my color is amazing and has not got a single pill of. redeye really gor an eye for beauty. this is my sixth time wrapping my car but with redeye is the best ever'
    },

    {
        id: 2,
        name: 'Abdou Janneh',
        date: ' 10 jan 2020',
        description: 'very easy to work with',
        text: 'redeye is definitely the best i upgraded my interior and engine the leather seats i had installed are still in good condition and they increase my engine power by 30ph and the lighting is still as bright as new. checkout redeye for ur car repair'
    },

    {
        id: 3,
        name: 'Fatou Secka',
        date: ' 10 jan 2020',
        description: 'finally got my dream car', 
        text: 'My parents used this car for 10 years and it was giving my problems for the past 4 yeas till i finally got in contact with redeye and it is the best decision to have ever made  because after they repair and maintenance my car. my car is unbreakable',
        
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
