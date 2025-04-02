console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', () => {
  // Challenge 1: Fetch and display dog images
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const dogImageContainer = document.getElementById('dog-image-container');
  
  // Challenge 2 & 3: Fetch and display dog breeds
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const dogBreedsList = document.getElementById('dog-breeds');
  let allBreeds = []; // Store all breeds for filtering
  
  // Challenge 4: Breed filter
  const breedDropdown = document.getElementById('breed-dropdown');

  // Challenge 1: Fetch and display dog images
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Random dog image';
        dogImageContainer.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching images:', error));

  // Challenge 2: Fetch and display dog breeds
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      allBreeds = Object.keys(data.message); // Store all breeds
      renderBreeds(allBreeds); // Initial render
    })
    .catch(error => console.error('Error fetching breeds:', error));

  // Function to render breeds (used by Challenge 2 and 4)
  function renderBreeds(breeds) {
    dogBreedsList.innerHTML = ''; // Clear current list
    breeds.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      
      // Challenge 3: Change color on click
      li.addEventListener('click', () => {
        li.style.color = '#ff69b4'; // Change to pink (or any color you prefer)
      });
      
      dogBreedsList.appendChild(li);
    });
  }

  // Challenge 4: Filter breeds by selected letter
  breedDropdown.addEventListener('change', (event) => {
    const selectedLetter = event.target.value;
    const filteredBreeds = allBreeds.filter(breed => 
      breed.startsWith(selectedLetter)
    );
    renderBreeds(filteredBreeds);
  });
});