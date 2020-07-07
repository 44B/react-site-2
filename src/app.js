import './styles/styles.scss';

const className = (className) => { return document.querySelector(className); }
const container = className('single-product-list');
const img = className('.single-product-img');
const name = className('single-product-name');
const price = className('single-product-price');

const id = (id) => { return document.getElementById(id); }


const products = {
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

const cart = {
    data: null,
    load : () => {
        cart.data = localStorage.getItem('cart');
        if (cart.data == null) { cart.data = {}; }
        else { cart.data = JSON.parse(cart.data); }
    },
    save : () => {
        localStorage.setItem('cart', JSON.stringify(cart.data))
    },
    add : function() {
        if (cart.data[this.dataset.id] == undefined) {
        var product = products[this.dataset.id];
        cart.data[this.dataset.id] = {
            name : product['name'],
            desc : product['desc'],
            img : product['img'],
            price : product['price'],
            qty : 1
        };
        } else {
            cart.data[this.dataset.id]['qty']++;
        }
        // Save local storage + HTML update
        cart.save();
        cart.list();
    },
      
    list: () => {
        let container = document.getElementById("cart-info-items");
        let item = null, part = null, product = null;
        container.innerHTML = '';
        let isEmpty = (obj) => {
        for (var key in obj) {
          if(obj.hasOwnProperty(key)) { return false; }
        }
        return true;
      };
      if (isEmpty(cart.data)) {
        item = document.createElement("div");
        item.innerHTML = "Cart is empty";
        container.appendChild(item);
      } else {
        // List items
        let total = 0, subtotal = 0;
        for (var i in cart.data) {
          item = document.createElement("div");
          item.classList.add("c-item");
          product = cart.data[i];
  
          // Quantity
          part = document.createElement("input");
          part.type = "number";
          part.value = product['qty'];
          part.dataset.id = i;
          part.classList.add("c-qty");
          part.addEventListener("change", cart.change);
          item.appendChild(part);
  
          // Name
          part = document.createElement("span");
          part.innerHTML = product['name'];
          part.classList.add("c-name");
          item.appendChild(part);
  
          // Subtotal
          subtotal = product['qty'] * product['price'];
          total += subtotal;
          container.appendChild(item);
        }
  
        // EMPTY BUTTONS
        item = document.createElement("input");
        item.type = "button";
        item.value = "Empty";
        item.addEventListener("click", cart.reset);
        item.classList.add("c-empty");
        container.appendChild(item);
  
        // CHECKOUT BUTTONS
        item = document.createElement("input");
        item.type = "button";
        item.value = "Checkout - " + "$" + total;
        item.addEventListener("click", cart.checkout);
        item.classList.add("c-checkout");
        container.appendChild(item);
      }
    },
    change : () => {
        // change() : change quantity
        if (cart.value == 0) {
            delete cart.data[cart.dataset.id];
        } else {
            cart.data[cart.dataset.id]['qty'] = cart.value;
        }
        cart.save();
        cart.list();
    },
      
    reset : () => {
    // reset() : empty cart
        if (confirm("Empty cart?")) {
            cart.data = {};
            cart.save();
            cart.list();
        } 
    },
      
    checkout : () => {
    // checkout() : checkout the cart
    
        alert("TODO");
        // Forward to confirmation page or directly add name, tel, email fields in the cart list.
        // Send cart.data to the server and do further processing - email or save to database.
    }
};
      


    window.addEventListener('load', () => {
        const container = document.getElementById('single-product-list');
        let item = null, part = null;

        for (let i in products) {
            item = document.createElement("div");
            item.classList.add("single-product-item");
         
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

            part = document.createElement("input");
            part.type = "button";
            part.value = "Add to Cart";
            part.classList.add("single-product-add");
            part.onclick = cart.add;
            part.dataset.id = i;
            item.appendChild(part);

            
            container.appendChild(item);
            cart.load();
            cart.list();
        }

        
    });





// console.log(Object.entries(products))
// const map = new Map(Object.entries(products));
// console.log(map)

//function for cleaner code on rendering HTML (Not Working)
// const renderHTMLElement = (part, element, addClass) => {
//     part = document.createElement(element);
//     part.src = products[i][element];
//     part.classList.add(addClass);
//     return item.appendChild(part);
// }

// let size = Object.keys(products).length;