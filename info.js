
    let form = document.getElementById('form');
    let nameInput = document.getElementById('nameInput');
    let ageInput = document.getElementById('ageInput');
    let resultCard = document.getElementById('resultCard');
    let userName = document.getElementById('userName');
    let userAge = document.getElementById('userAge');


    form.addEventListener('submit', function(event) {
      event.preventDefault();

  
      let name = nameInput.value;     
      let age = parseInt(ageInput.value); 

     
      userName.textContent = "Name: " + name;
      userAge.textContent = "Age: " + age + " years old";

      resultCard.classList.remove('hidden');
    });