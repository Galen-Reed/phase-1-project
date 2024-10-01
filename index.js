const cardForm = document.getElementById('card-form');
document.addEventListener("DOMContentLoaded", function() {
     fetch('http://localhost:3000/cards')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach((card) => {
                cardDisplay(card);
            })
        })
        .catch(error => console.error('Error:', error));
})

function cardDisplay(data) {
    const cardContainer = document.getElementById('card-container');

    const manaCost = document.createElement('p');

    const rarity = document.createElement('p');


    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardName = document.createElement('h2');
    cardName.textContent = data.name;

    const cardImg = document.createElement('img');
    cardImg.src = data.imageUrl;

    cardImg.addEventListener("mouseover", function () {
        
        manaCost.textContent = data.manaCost;

        rarity.textContent = data.rarity;

    })

    cardImg.addEventListener("mouseout", function () {
        manaCost.textContent = '';
        rarity.textContent = '';
    })

    cardName.addEventListener("click", function(event) {
       const newItem = document.createElement('li');
       const listContainer = document.getElementById('list-container');
       const list = document.getElementById('list');
       newItem.textContent = data.name;
       list.appendChild(newItem); 
       listContainer.style.display= "block";
    })

    const cardText = document.createElement('p');
    cardText.textContent = data.text;

    cardDiv.append(cardName, cardImg, cardText, manaCost, rarity);

    cardContainer.appendChild(cardDiv);
}
/*
cardForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let entries = {};

    const formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
        entries[key] = value;
      }
      const jsonData = JSON.stringify(entries)

    fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => console.log('Success', data));
});
*/

