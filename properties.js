// //items
// const properties = [
//     {
//         id: 1,
//         location: 'kololi',
//         area: 310,
//         img: '../images/projects1.jpg',
//         category: 'buy',
//     },
//     {
//         id: 2,
//         location: 'sanyang',
//         area: 220,
//         img: '../images/projects2.jpg',
//         category: 'buy',
//     },
//     {
//         id: 3,
//         location: 'tanji',
//         area: 300,
//         img: '../images/projects3.jpg',
//         category: 'buy',
//     },
//     {
//         id: 4,
//         location: 'gunjur',
//         area: 205,
//         img: '../images/projects4.jpg',
//         category: 'buy',
//     },
//     {
//         id: 5,
//         location: 'kotu',
//         area: 500,
//         img: '../images/projects5.jpg',
//         category: 'buy',
//     },
//     {
//         id: 6,
//         location: 'manjai',
//         area: 510,
//         img: '../images/projects6.jpg',
//         category: 'buy',
//     },
//     {
//         id: 7,
//         location: 'brikama',
//         area: 9423,
//         img: '../images/projects7.jpg',
//         category: 'rent',
//     },
//     {
//         id: 8,
//         location: 'kerr serign',
//         area: 290,
//         img: '../images/projects8.jpg',
//         category: 'buy',
//     },
//     {
//         id: 9,
//         location: 'sallagi',
//         area: 321,
//         img: '../images/projects9.jpg',
//         category: 'buy',
//     },
//     {
//         id: 10,
//         location: 'kololi',
//         area: 2000,
//         img: '../images/projects10.jpg',
//         category: 'buy',
//     },
//     {
//         id: 11,
//         location: 'bakoteh',
//         area: 930,
//         img: '../images/projects11.jpg',
//         category: 'rent',
//     },
//     {
//         id: 12,
//         location: 'brufut',
//         area: 1230,
//         img: '../images/projects12.jpg',
//         category: 'rent',
//     },
//     {
//         id: 13,
//         location: 'barra',
//         area: 1320,
//         img: '../images/projects13.jpg',
//         category: 'rent',
//     },
//     {
//         id: 14,
//         location: 'basse',
//         area: 2930,
//         img: '../images/projects14.jpg',
//         category: 'rent',
//     },
//     {
//         id: 15,
//         location: 'bansang',
//         area: 1030,
//         img: '../images/projects15.jpg',
//         category: 'rent',
//     },
//     {
//         id: 16,
//         location: 'farafenni',
//         area: 230,
//         img: '../images/projects16.jpg',
//         category: 'buy',
//     },
//     {
//         id: 17,
//         location: 'foni',
//         area: 1123,
//         img: '../images/projects17.jpg',
//         category: 'rent',
//     },
//     {
//         id: 18,
//         location: 'nyumi',
//         area: 430,
//         img: '../images/projects18.jpg',
//         category: 'rent',
//     },
// ];


// const projectsContainer = document.querySelector('.projects__container');
// const  filterBtns = document.querySelectorAll('.filter__list');


// //load items
// window.addEventListener('DOMContentLoaded', ()=> {
//     displayPropertyItems(properties);
// });


// //filter items
// filterBtns.forEach( btn => {
//     btn.addEventListener('click', (event) => {
//         event.preventDefault();
//         const category = event.currentTarget.dataset.id;
//         const propertyCategory = properties.filter( (propertyItems) => {
//             if(propertyItems.category === category) {
//                 return propertyItems;
//             }
                        
//         });
//         //console.log(propertyCategory);
//         if(category === 'all') {
//             displayPropertyItems(properties);
            
//         }
//         else {
//             displayPropertyItems(propertyCategory);
//         }
//     });
// });


// const displayPropertyItems = propertiesItems => {
//     let displayProperties = propertiesItems.map( item => {
//         //console.log(item);
//         return `
//             <div class="project">
//                 <div class="project__img-box">
//                     <img src="${item.img}" alt="" class="project__img">
//                 </div>
//                 <div class="project__info">
//                     <div class="project__icons">
//                         <p class = "project__location">
//                             <svg class="project__icon">
//                                 <use xlink:href = "images/sprite.svg#icon-location"</use>
//                             </svg>
//                             ${item.location}
//                         </p>
//                         <p class = "project__location">
//                             <svg class="project__icon">
//                                 <use xlink:href = "images/sprite.svg#icon-edit-crop"</use>
//                             </svg>
//                             ${item.area} M<sup>2</sup>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         `;
//     });
//     displayProperties = displayProperties.join('');
//     projectsContainer.innerHTML = displayProperties;
// };