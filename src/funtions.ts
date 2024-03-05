//function that returns string and accepts only valid user
//a return type annotation is not mandatory. TS can do it automatically
function printUser(user: {id: number; name: string; isPremium?: boolean}) : string  {
    let star = user.isPremium ? '*' : '-';
    return `${star} ${user.id} ${user.name}`;
}

let users: {id: number; name: string; isPremium?: boolean}[] = 
[
    {id: 1, name: "Ivan", isPremium: true},
    {id: 2, name: "Alex", isPremium: false},
    {id: -1, name: "Alex"}
];

// NOTE: if contract change compile error occured
users.forEach((user) => {
    console.log(printUser(user))
});

// Contextual typing applies to arrow functions
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
    console.log(s.toLowerCase());
});