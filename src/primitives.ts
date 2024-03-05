const a: string = 'Hello world';
let b: number = 10;
const c: boolean = false;

let myName = "Some value";

let item: string;
item = ''; // it works
item += 'value'; // it works
//item = false; // TS Error: Type 'boolean' is not assignable to type 'string'.(2322)
//item = [1, 2]; // TS Error: Type 'number[]' is not assignable to type 'string'.(2322)