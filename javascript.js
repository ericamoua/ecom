function getJson() {
  fetch('plants.json')
  .then(response => response.json())
  .then(data => {
    // Get the container to append cards
    const container = document.getElementById('plant-container');

    // Loop through each plant and create a card
    data.plants.forEach(plant => {
      // Create card element
      const card = document.createElement('div');
      card.classList.add('card');

      // Create image element
      const img = document.createElement('img');
      img.src = plant.ImageFilePath;
      img.classList.add('plant-image');
      card.appendChild(img);

      // Create name element
      const name = document.createElement('h2');
      name.textContent = plant.Name;
      card.appendChild(name);

      // Create price element
      const price = document.createElement('p');
      price.textContent = `Price: $${plant.Price}`;
      card.appendChild(price);

      // Create detail element
      const detail = document.createElement('p');
      detail.textContent = `Detail: ${plant.Detail}`;
      card.appendChild(detail);

      // Create pet friendly element
      const petFriendly = document.createElement('p');
      petFriendly.textContent = `Pet Friendly: ${plant['Pet Friendly'] ? 'Yes' : 'No'}`;
      card.appendChild(petFriendly);

      //create button for purchasing plants 
      const button = document.createElement('button');
      button.textContent = `Purchase`;
      card.appendChild(button);

      // Append card to container
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

}

getJson();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
  
// Fetch data from JSON file
// fetch('plants.json')
//   .then(shop => shop.json())
//   .then(catalog => {
//     // Get the container to append cards
//     const container = document.getElementById('plant-cards');

//     // Loop through each plant and create a card
//     catalog.plants.forEach(plant => {
//       // Create card element
//       const card = document.createElement('div');
//       card.classList.add('card');

//       // Create image element
//       const img = document.createElement('img');
//       img.src = plant.ImageFilePath;
//       card.appendChild(img);

//       // Create name element
//       const name = document.createElement('h2');
//       name.textContent = plant.Name;
//       card.appendChild(name);

//       // Create price element
//       const price = document.createElement('p');
//       price.textContent = `Price: $${plant.Price}`;
//       card.appendChild(price);

//       // Create detail element
//       const detail = document.createElement('p');
//       detail.textContent = `Detail: ${plant.Detail}`;
//       card.appendChild(detail);

//       // Create pet friendly element
//       const petFriendly = document.createElement('p');
//       petFriendly.textContent = `Pet Friendly: ${plant['Pet Friendly'] ? 'Yes' : 'No'}`;
//       card.appendChild(petFriendly);

//       // Append card to container
//       container.appendChild(card);
//     });
//   })
//   .catch(error => console.error('Error fetching data:', error));
