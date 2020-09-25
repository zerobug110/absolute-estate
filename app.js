                                //nav slider
//select variable

const navList = document.querySelector('.nav__list');
const navToggle = document.querySelector('.lines');

navToggle.addEventListener('click', ()=> {
    navList.classList.toggle('show');    
});

                        // review slider 
//review items
const reviews = [

    {
        id: 1,
        name: 'Buba Ceesay',
        date: ' 15 Feb 2020',
        description: 'got my house with 24hr of buying',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis inventore dicta aliquid reiciendis, neque quaerat velit maxime perspiciatis, sapiente reprehenderit nesciunt unde earum. Dolorem voluptatem fuga rerum et perferendis.'
    }, 

    {
        id: 1,
        name: 'Ousman Touray',
        date: ' 20 sep 2020',
        description: 'cheap amazing luxury homes',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aspernatur earum, vel suscipit dolore, nisi obcaecati eligendi saepe, est temporibus dolorem rerum nobis. Praesentium distinctio necessitatibus dolores neque eveniet.'
    },

    {
        id: 2,
        name: 'Abdou Janneh',
        date: ' 10 jan 2020',
        description: 'very easy to work with',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sunt assumenda impedit illum aut veritatis quas error eaque voluptatum! Error a, consequatur laborum necessitatibus consectetur quas quam amet magnam ad.'
    },

    {
        id: 3,
        name: 'Fatou Secka',
        date: ' 20 Feb 2020',
        description: 'finally got my dream house', 
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem adipisci ab impedit ut error nostrum quo mollitia dolorum veniam, saepe harum laboriosam placeat expedita doloremque vitae itaque rem est?a',
        
    }
];

//select items
const name = document.querySelector('.review__name');
const date = document.querySelector('.review__date');
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
    date.textContent = item.date;
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

