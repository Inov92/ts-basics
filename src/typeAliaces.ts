type ID = number | string; // it is possbly to specify Union types. Unions also applied for function inputs

type User = {
  id: ID; // it is possible to assign custom types for object property
  name: string;
};

function parseUser(user: User) {
  return `${user.id} ${user.name}`;
}

let userList: User[] = [
  { id: 1, name: "Ivan" },
  { id: "anonymous", name: "Guest" },
];

let userData: string = userList.map((user) => parseUser(user)).join("\n"); // Note that TS automatically understand parseUser() : string
console.log(userData);
