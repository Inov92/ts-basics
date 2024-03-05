// *** Record Utility ***
//Record<K, V>
// Useful for obeject descrpition

type Action = "Denied" | " ReadOnly" | "ReadWrite";
const policy: Record<"access", Action> = { access: "Denied" };

// Required<Type>
// ask to fill on all properties
type Car = {
  brand: string;
  owner?: string;
};

let buyedCar: Required<Car> = {
  brand: "Ga Ming",
  owner: "Ivan", // Mandatory to fill in
};

//Readonlt<Type> 
//creating inmutable objects

type Todo = {
    memo: string;
}

let mustBeDone: Readonly<Todo> = {
    memo: "Learn TypeSctypt"
}
//mustBeDone.memo = "Play CS"; Assignment is not allowed
