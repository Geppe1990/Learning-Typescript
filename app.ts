const person: {
    name: string,
    age: number,
    hobbies: string[],
    category: [number, string], //questa è una touple
} = {
    name: "Giuseppe",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    category: [2, "author"]
};


person.category[1] = "administrator"
console.log(person.category)
let favoriteActivities: string[]; //Array di stringhe
let anyArray: any[]; //Array generico

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}