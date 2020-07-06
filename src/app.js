import './styles/styles.scss';

const className = (className) => { return document.querySelector(className)}
const container = className('single-product-list');
const img = className('.single-product-img');
const name = className('single-product-name');
const price = className('single-product-price');

export const products = {
    1: {
        name : "Chocolate Chip Cookie",
        img : "https://greedyeats.com/wp-content/uploads/2019/01/Super-thick-walnut-chocolate-chip-cookies.png",
        price : .99
    },
    2: {
        name : "Chocolate Fudge",
        img : "https://glutenfreeonashoestring.com/_main_site/wp-content/uploads/2018/04/Flourless-Fudge-Cookies-hero-image.jpg",
        price : 2.99
    },
    3: {
        name : "Sugar Coated Donut",
        img : "https://letthebakingbegin.com/wp-content/uploads/2013/11/Simple-Homemade-Sugar-Donuts-are-super-easy-to-make-and-are-so-so-delicious-Theyre-fluffy-soft-and-taste-much-better-than-any-bakery-donut.-1-4.jpg",
        price : 2.49
    },
    4: {
        name : "Maple Donut",
        img : "https://www.cookingclassy.com/wp-content/uploads/2013/09/baked-nutella-doughnuts6+srgb..jpg",
        price : 1.99
    },
    5: {
        name : "Vanilla Cupcake W/ Vanilla Frost",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSil50pL60fKS2tHTHeOn575a5EMreonW9OLw&usqp=CAU",
        price : 2.99
    },
    6: {
        name : "Chocolate Cupcake W/ Chocolate Frost",
        img : "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg",
        price : 3.49
    }
};

let size = Object.keys(products).length;

const renderProducts = () => {
    window.addEventListener('load', () => {
        const container = document.getElementById('single-product-list');
        let item, part = null;
        
        for (let i in products) {
            item = document.createElement("div");
            item.classList.add("single-product-item")

            part = document.createElement("img");
            part.src = products[i]['img'];
            part.classList.add("single-product-img");
            item.appendChild(part);

            part = document.createElement("p");
            part.innerHTML = products[i]['name'];
            part.classList.add('single-product-name');
            item.appendChild(part);

            part = document.createElement("p");
            part.innerHTML = products[i]['price'];
            part.classList.add('single-product-price');
            item.appendChild(part);
            
            container.appendChild(part);
        }
    });
}

renderProducts();


// console.log(Object.entries(products))
// const map = new Map(Object.entries(products));
// console.log(map)
