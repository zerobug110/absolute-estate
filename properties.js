//items
const properties = [
    {
        id: 1,
        location: 'kololi',
        area: 310,
        img: 'https://cdn.pixabay.com/photo/2016/07/25/17/05/new-home-1540875__340.jpg',
        category: 'buy',
    },
    {
        id: 2,
        location: 'sanyang',
        area: 220,
        img: 'https://cdn.pixabay.com/photo/2016/07/25/17/02/new-home-1540871__340.jpg',
        category: 'buy',
    },
    {
        id: 3,
        location: 'tanji',
        area: 300,
        img: 'https://cdn.pixabay.com/photo/2016/08/31/15/33/new-home-1633889__340.jpg',
        category: 'buy',
    },
    {
        id: 4,
        location: 'gunjur',
        area: 205,
        img: 'https://cdn.pixabay.com/photo/2018/01/08/18/25/house-3069940__340.jpg',
        category: 'buy',
    },
    {
        id: 5,
        location: 'kotu',
        area: 500,
        img: 'https://cdn.pixabay.com/photo/2016/07/29/13/53/new-home-1553256__340.jpg',
        category: 'buy',
    },
    {
        id: 6,
        location: 'manjai',
        area: 510,
        img: 'https://cdn.pixabay.com/photo/2016/07/25/16/59/new-1540863__340.jpg',
        category: 'buy',
    },
    {
        id: 7,
        location: 'brikama',
        area: 423,
        img: 'https://cdn.pixabay.com/photo/2016/07/25/17/11/new-home-1540889__340.jpg',
        category: 'rent',
    },
    {
        id: 8,
        location: 'kerr serign',
        area: 290,
        img: 'https://cdn.pixabay.com/photo/2019/03/26/17/29/new-home-4083221__340.jpg',
        category: 'buy',
    },
    {
        id: 9,
        location: 'sallagi',
        area: 321,
        img: 'https://cdn.pixabay.com/photo/2016/09/12/13/22/new-home-1664262__340.jpg',
        category: 'buy',
    },
    {
        id: 10,
        location: 'kololi',
        area: 600,
        img: 'https://cdn.pixabay.com/photo/2018/01/08/16/02/house-3069655__340.jpg',
        category: 'buy',
    },
    {
        id: 11,
        location: 'bakoteh',
        area: 930,
        img: 'https://cdn.pixabay.com/photo/2016/09/12/13/22/new-home-1664262__340.jpg',
        category: 'rent',
    },
    {
        id: 12,
        location: 'brufut',
        area: 1230,
        img: 'https://cdn.pixabay.com/photo/2016/09/23/14/58/new-home-1689871__340.jpg',
        category: 'rent',
    },
    {
        id: 13,
        location: 'barra',
        area: 1320,
        img: 'https://cdn.pixabay.com/photo/2017/10/11/15/59/new-home-2841442__340.jpg',
        category: 'rent',
    },
    {
        id: 14,
        location: 'basse',
        area: 2930,
        img: 'https://cdn.pixabay.com/photo/2016/07/20/18/04/new-home-1530833__340.jpg',
        category: 'rent',
    },
    {
        id: 15,
        location: 'bansang',
        area: 1030,
        img: 'https://cdn.pixabay.com/photo/2016/09/25/13/25/multi-family-1693705__340.jpg',
        category: 'rent',
    },
    {
        id: 16,
        location: 'farafenni',
        area: 230,
        img: 'https://cdn.pixabay.com/photo/2016/08/17/15/05/new-home-1600663__340.jpg',
        category: 'buy',
    },
    {
        id: 17,
        location: 'foni',
        area: 423,
        img: 'https://cdn.pixabay.com/photo/2016/09/14/16/38/new-home-1669789__340.jpg',
        category: 'rent',
    },
    {
        id: 18,
        location: 'nyumi',
        area: 430,
        img: 'https://cdn.pixabay.com/photo/2016/09/20/11/31/new-home-1682330__340.jpg',
        category: 'rent',
    },
];


const projectsContainer = document.querySelector('.projects__container');
const  filterBtns = document.querySelectorAll('.filter__list');


//load items
window.addEventListener('DOMContentLoaded', ()=> {
    displayPropertyItems(properties);
});


//filter items
filterBtns.forEach( btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const category = event.currentTarget.dataset.id;
        const propertyCategory = properties.filter( (propertyItems) => {
            if(propertyItems.category === category) {
                return propertyItems;
            }
                        
        });
        //console.log(propertyCategory);
        if(category === 'all') {
            displayPropertyItems(properties);
            
        }
        else {
            displayPropertyItems(propertyCategory);
        }
    });
});


const displayPropertyItems = propertiesItems => {
    let displayProperties = propertiesItems.map( item => {
        //console.log(item);
        return `
            <div class="project">
                <div class="project__img-box">
                    <img src="${item.img}" alt="" class="project__img">
                </div>
                <div class="project__info">
                    <div class="project__icons">
                        <p class = "project__location">
                            <svg class="project__icon">
                                <use xlink:href = "images/sprite.svg#icon-location"</use>
                            </svg>
                            ${item.location}
                        </p>
                        <p class = "project__location">
                            <svg class="project__icon">
                                <use xlink:href = "images/sprite.svg#icon-edit-crop"</use>
                            </svg>
                            ${item.area} M<sup>2</sup>
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
    displayProperties = displayProperties.join('');
    projectsContainer.innerHTML = displayProperties;
};