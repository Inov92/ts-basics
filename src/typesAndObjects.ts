let user: {id: number; name: string};

// You can use , or ; to separate the properties, and the last separator is optional either way.
user = {
    id: 1,
    name: 'Ivan'
};

//Compilation error. id typy is wrong, name is mandatory
// user = {
//     id: '1'
// }

//Optional properties are marked with :?
let book: {name: string; iban?: boolean}

book = {name: "Puss in Boots"};

if (book.iban === undefined) {
    console.log("Optional property is allowed by ?:");
};

// *** ARRAYS ***
let heroes : string[] = [];
heroes.push("Ayaka");
heroes.push("Yoimiya");
//heroes.push(112); Error due to type check