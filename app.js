const id = (id) => { document.getElementById(id); }
const sweetsList = id('sweetsList');
let nHTML = '';

let imgs = [];

let createImage = (src,label) => {
    label = label.replace(/"/g,"&quot;");
    return '<img src="'+src+'" title="'+label+'" alt="'+label+'" />';
}

imgs.push(createImage("https://greedyeats.com/wp-content/uploads/2019/01/Super-thick-walnut-chocolate-chip-cookies.png", "Cookie"));

imgs.forEach((img) => {
    nHTML += '<li>' + img + '<li>';
});

console.log(imgs);
document.getElementById("sweetsList").innerHTML = '<ul>' + nHTML + '<ul>';