fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
        // Select the element where you want to insert the cards
        const contentDiv = document.querySelector('.card-container');

        // Iterate over the data and create card elements
        data.forEach(item => {
            // Create a div element for the card
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            // Create an img element for the card image
            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = item.imgSrc;
            img.alt = item.name;

            // Create a div element for the card body
            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');
            cardDiv.appendChild(img);

            const parent = document.createElement('div'); 
            parent.classList.add('pop');

            const cardchild1 = document.createElement('div');  
          
            // Create a paragraph element for the card text
            const cardText = document.createElement('div');
            cardText.classList.add('card-name');
            cardText.textContent = item.name;

            const cardText2 = document.createElement('div');
            cardText2.classList.add('card-name');
            cardText2.textContent = `$${item.price}/-`;

            // Append elements to the card body
            cardchild1.appendChild(cardText);
            cardchild1.appendChild(cardText2);
            parent.appendChild(cardchild1);

            // Create a div element for the logo
            const logoDiv = document.createElement('div');
            logoDiv.classList.add('logo');

            const logoImg = document.createElement('img');
            logoImg.src = 'g4.png'; // Set the src attribute to g4.png
            logoDiv.appendChild(logoImg);

            // Append the logo to the parent div
            parent.appendChild(logoDiv);

            // Append the parent div to the card body
            cardBodyDiv.appendChild(parent);
            
            // Append the card body to the card
            cardDiv.appendChild(cardBodyDiv);

            // Append the card to the content div
            contentDiv.appendChild(cardDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
