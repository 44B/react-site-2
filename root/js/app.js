const id = (id) => { return document.getElementById(id); }
//Displaying array of Item Picturees w/ Captions
const sweetsList = id('single-item-sweets-list');
const searchBar = id('search-bar');
let nHTML = '';

let imgs = [];

let createImage = (src, label, caption, dataItem) => {
    label = label.replace(/"/g,"&quot;");
    caption = `<br><a>${caption}</a><br>`
    return '<img src="'+src+'" title="'+label+'" alt="'+label+'" data-item="'+dataItem+'"/>' + caption;
}

imgs.push(createImage("https://greedyeats.com/wp-content/uploads/2019/01/Super-thick-walnut-chocolate-chip-cookies.png", "Cookie", "Chocolate Chip Cookie", "sweets"));
imgs.push(createImage("https://glutenfreeonashoestring.com/_main_site/wp-content/uploads/2018/04/Flourless-Fudge-Cookies-hero-image.jpg", "Fudge", "Chocolate Fudge", "sweets"));
imgs.push(createImage("https://letthebakingbegin.com/wp-content/uploads/2013/11/Simple-Homemade-Sugar-Donuts-are-super-easy-to-make-and-are-so-so-delicious-Theyre-fluffy-soft-and-taste-much-better-than-any-bakery-donut.-1-4.jpg", "Donut", "Sugar Donut", "sweets"));
imgs.push(createImage("https://www.cookingclassy.com/wp-content/uploads/2013/09/baked-nutella-doughnuts6+srgb..jpg", "Donut", "Maple Donut", "sweets"));
imgs.push(createImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSil50pL60fKS2tHTHeOn575a5EMreonW9OLw&usqp=CAU", "Cupcake", "Vanilla Cupcake W/ Vanilla Frost", "sweets"));
imgs.push(createImage("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg", "Cupcake", "Chocolate Cupcake W/ Chocolate Frost", "sweets"));


imgs.forEach((img) => {
    nHTML += '<li>' + img + '<li>';
});

console.log(imgs);

const displayImage = () => {
    return sweetsList.innerHTML = '<ul>' + nHTML + '<ul>';
}
displayImage();

//searchFilter
searchBar.addEventListener('keyup', (e) => {
    let aTags = sweetsList.getElementsByTagName("a"); //Get All p Elements
    let searchText = e.target.value.toLowerCase(); //Get written in input
    if (searchText != "") {
      for (let i = 0; i < aTags.length; i++) { //Loop to check every p content with input value
         if (aTags[i].textContent != searchText) { //if p content not equal input value
            aTags[i].parentElement.style.display = "none"; //Hide Parent
           }
        }
    }
});

//cart button info
let cartInfoButton = id('cart-info-btn');
cartInfoButton.addEventListener('click', (e) => {
    console.log(e.target.value);
});
/*
Links that helped:
https://www.w3schools.com/jsref/jsref_foreach.asp
https://stackoverflow.com/questions/24822631/object-htmlimageelement-showing-instead-of-image
*/

