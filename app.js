const id = (id) => { document.getElementById(id); }
const sweetsList = id('sweetsList');
let nHTML = '';

let imgs = [];

let createImage = (src, label, caption) => {
    label = label.replace(/"/g,"&quot;");
    caption = `<p>${caption}</p>`
    return '<img src="'+src+'" title="'+label+'" alt="'+label+'" />' + caption;
}

imgs.push(createImage("https://greedyeats.com/wp-content/uploads/2019/01/Super-thick-walnut-chocolate-chip-cookies.png", "Cookie", "Chocolate Chip Cookie"));
imgs.push(createImage("https://glutenfreeonashoestring.com/_main_site/wp-content/uploads/2018/04/Flourless-Fudge-Cookies-hero-image.jpg", "Fudge", "Chocolate Fudge"));
imgs.push(createImage("https://letthebakingbegin.com/wp-content/uploads/2013/11/Simple-Homemade-Sugar-Donuts-are-super-easy-to-make-and-are-so-so-delicious-Theyre-fluffy-soft-and-taste-much-better-than-any-bakery-donut.-1-4.jpg", "Donut", "Maher's Special"));
imgs.push(createImage("https://www.cookingclassy.com/wp-content/uploads/2013/09/baked-nutella-doughnuts6+srgb..jpg", "Donut", "Maple Donut"));
imgs.push(createImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSil50pL60fKS2tHTHeOn575a5EMreonW9OLw&usqp=CAU", "Cupcake", "Vanilla Cupcake W/ Vanilla Frost"));


imgs.forEach((img) => {
    nHTML += '<li>' + img + '<li>';
});

console.log(imgs);

const displayImage = () => {
    return document.getElementById("sweetsList").innerHTML = '<ul>' + nHTML + '<ul>';
}

displayImage();


/*
Links that helped:
https://www.w3schools.com/jsref/jsref_foreach.asp
https://stackoverflow.com/questions/24822631/object-htmlimageelement-showing-instead-of-image
*/

