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