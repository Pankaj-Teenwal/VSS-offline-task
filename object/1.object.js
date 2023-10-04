// const obj ={}

// const setObject = (key, value)=>{
//     obj[key] = value;
// }

// setObject("name", "Pankaj");

// setObject("middleName", "Ratan Lal")
// obj.lastName = "Teenwal"
// // obj["lastName"] = "Ratan Lal"
// console.log(obj)





// const profile = {
//     uName: "pankaj",
//     lName: "Teenwal",
//     city: "Indore",
//     address: "Karol Bagh Grand",
//     age: 24,
// };

// profile.age = 25;
// const key = "nativePlace"
// profile[key] = "Mandawa";
// /*
// -if i know the keyName and i want to update the value of that key then i can simply do profile.age=25;
// -if or i can do this as well profile["nativePlace"] = "Mandawa" if the "nativePlace" key is avaliable in the object then it will update if its not avaliable then it will create a new key and add the value in that key.
// -or you can store the name of the key i an variable and you can pass that key variable Ex: const key = "place", profile[key] = "Mandawa" ;

// */ 
// console.log(profile)

// console.log(profile)



let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2010,
    cast: {
        actor1: "Leonardo DiCaprio",
        actor2: "Joseph Gordon-Levitt",
        actor3: "Elliot Page"
    }
};


movie['likedMovies'] = "Sashank Redemption";
movie[{uName:"pankaj"}] = 10;
console.log(movie)
console.log("printing object Object",movie['[object Object]'])