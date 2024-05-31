document.addEventListener('DOMContentLoaded', getMenu);

async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const data = await response.json();
        displayMenuItems(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayMenuItems(items) {
    const contentDiv = document.querySelector('.card-container');
    items.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = item.imgSrc;
        img.alt = item.name;

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');
        cardDiv.appendChild(img);

        const parent = document.createElement('div'); 
        parent.classList.add('pop');

        const cardchild1 = document.createElement('div');  
          
        const cardText = document.createElement('div');
        cardText.classList.add('card-name');
        cardText.textContent = item.name;

        const cardText2 = document.createElement('div');
        cardText2.classList.add('card-name');
        cardText2.textContent = `$${item.price}/-`;

        cardchild1.appendChild(cardText);
        cardchild1.appendChild(cardText2);
        parent.appendChild(cardchild1);

        const logoDiv = document.createElement('div');
        logoDiv.classList.add('logo');

        const logoImg = document.createElement('img');
        logoImg.src = 'g4.png';
        logoDiv.appendChild(logoImg);

        parent.appendChild(logoDiv);
        cardBodyDiv.appendChild(parent);
        cardDiv.appendChild(cardBodyDiv);

        contentDiv.appendChild(cardDiv);
    });
}

function takeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger', 'Fish Burger', 'Bacon Burger'];
            const order = {
                items: []
            };
            for (let i = 0; i < 3; i++) {
                const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
                order.items.push(randomBurger);
            }
            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

// Handling promises sequentially using async/await
async function handleOrderProcess() {
    try {
        const order = await takeOrder();
        console.log('Order:', order);

        const orderStatus = await orderPrep();
        console.log('Order Status:', orderStatus);

        const paymentStatus = await payOrder();
        console.log('Payment Status:', paymentStatus);

        if (paymentStatus.paid) {
            thankyouFnc();
        }
    } catch (error) {
        console.error('Error during the order process:', error);
    }
}

// Initiate order process for testing
handleOrderProcess();
