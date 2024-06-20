function getJson() {
  fetch('plants.json')
  .then(response => response.json())
  .then(data => {
    // Get the container to append cards
    const container = document.getElementById('plant-container');

    // Loop through each plant and create a card
    data.plants.forEach(plant => {
      const imageContainer = document.querySelector(".plant-image") 

      // Create image element
      const img = document.createElement('img');
      img.src = plant.ImageFilePath;
      img.classList.add('plant-image');
      imageContainer.appendChild(img);

      // TODO: Instead of appending all these elements to the card div
      // create divs for each section within the class and append to those sub divs
  
      // Create name element
      const name = document.createElement('h2');
      name.textContent = plant.Name;
      card.appendChild(name);

      //make div to fix button
      const plantInfo = document.createElement('div');
      plantInfo.classList.add('plant-info');
  
      // Create price element
      const price = document.createElement('p');
      price.textContent = `Price: $${plant.Price}`;
      plantInfo.appendChild(price);

      // Create detail element
      const detail = document.createElement('p');
      detail.textContent = `Detail: ${plant.Detail}`;
      plantInfo.appendChild(detail);

      // Create pet friendly element
      const petFriendly = document.createElement('p');
      petFriendly.textContent = `Pet Friendly: ${plant['Pet Friendly'] ? 'Yes' : 'No'}`;
      plantInfo.appendChild(petFriendly);
      card.appendChild(plantInfo);

      //create button for purchasing plants 
      const button = document.createElement('button');
      button.textContent = `Purchase`;
      button.classList.add('purchase-button');
      card.appendChild(button);

      // Append card to container means bring together
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
  

