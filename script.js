

//Esercizio 1
console.log('-------Esercizio 1-------');
class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    ageComparison(userToCompare){
        if(this.age > userToCompare.age)
        {
            console.log(this.firstName + ' è più vecchio di ' + userToCompare.firstName);
        }
        else{
            console.log(userToCompare.firstName + ' è più vecchio di ' + this.firstName);

        }

    }
}


const mario = new User('Mario','Rossi', 30,'Roma')
const luca = new User('Luca','Bianchi', 45, 'Milano')
console.log(mario);
console.log(luca);
luca.ageComparison(mario);
mario.ageComparison(luca)


//Esercizio 2
console.log('-------Esercizio 2-------');

//pet-name
const petName = document.getElementById('pet-name')
//owner-pet-name
const ownerName = document.getElementById('owner-name')
//pet-species
const petSpecies = document.getElementById('pet-species')
//pet-breed
const petBreed = document.getElementById('pet-breed')


const pets = []




//classe oggetto pet
class Pet {
    constructor(_petName, _ownerName, _petSpecies, _petBreed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.petSpecies = _petSpecies
        this.petBreed = _petBreed
    }
}




//function renderList
const renderList = function () {
    const petsList = document.querySelector('ul')
    //svuoto ul
    petsList.innerHTML = ''
    //prendo tutti gli animali oggetto nell' array pets e li inserisco in li
    pets.forEach((pet)=> {
        const newLi = document.createElement('li')
        newLi.innerText = `${pet.petName} è un ${pet.petSpecies} di razza ${pet.petBreed} ed appartiene a ${pet.ownerName}`
        petsList.appendChild(newLi)

    })
}


const formReference = document.querySelector('form')
formReference.addEventListener('submit', function (e){
    e.preventDefault();
    const newPet = new Pet(petName.value, ownerName.value, petSpecies.value, petBreed.value)

pets.push(newPet)
petName.value = ''
ownerName.value = ''

renderList()
})






