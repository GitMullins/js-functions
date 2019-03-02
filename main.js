// David Mullins
// Britney Spears
// Tori Amos
// Sam Smith
// John Doe

// const firstName = 'David';
// const lastName = 'Mullins'
// console.log(`${firstName} ${lastName}`);

// const firstName1 = 'Britney';
// const lastName1 = 'Spears';

// console.log(`${firstName1} ${lastName1}`);

// const firstName2 = 'Tori';
// const lastName2 = 'Amos';

const namePrinter = (firstName, lastName) =>{
    console.log(`${firstName} ${lastName}`);
};

namePrinter('David', 'Mullins');
namePrinter('John', 'Doe');


const nuggetizer = (animal) => {
    return `processed ${animal}`;
};

console.log(nuggetizer('pig'));

const dogBreed = (breed) =>{
    return `my favorite dog breed is ${breed}`;
};

console.log(dogBreed('border collie'));



const dogBreedDiv = document.getElementById('dog-breeds');
dogBreedDiv.innerHTML = dogBreed('lab');

const nuggetizerDiv = document.getElementById('animal');
nuggetizerDiv.innerHTML = nuggetizer('chiKn');
nuggetizerDiv.innerHTML = nuggetizer('kitten');

const printToDom = (divId, textToPrint) =>{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreed('lab'));
printToDom('animal', nuggetizer('chiKn'));
printToDom('animal', nuggetizer('kitten'));
printToDom('animal', ' mmmmmmmmm');


let bandNumber = 1;
const addBand = (bandName) => {
    //do stuff
    const bandText = `<h5>${bandNumber}. ${bandName}</h5>`;
    bandNumber += 1
    printToDom('band-list', bandText);
};

addBand('Metalica') // 1. Metalica
addBand('Slayer')   // 2. Slayer
