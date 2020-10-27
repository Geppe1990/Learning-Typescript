var person = {
    name: "Giuseppe",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    category: [2, "author"]
};
person.category[1] = "administrator";
console.log(person.category);
var favoriteActivities; //Array di stringhe
var anyArray; //Array generico
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
