const profile = {
    name:"Pankaj",
    city:"Pune",
    state: "Maharastara",
    email:"pankaj.teenwal@microsoft.com",
    salary: 4000000,
}

const {name, city, ...restData} = profile;

console.log("BachahuaData:", restData);



