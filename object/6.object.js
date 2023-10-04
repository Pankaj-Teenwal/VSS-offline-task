let profile = {
    id: 1,
    username: "example_user",
    email: "user@example.com",
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    address: {
        street: "123 Main St",
        city: "Exampleville",
        state: "CA",
        zipCode: "12345"
    },
    phone: "123-456-7890",
    dob: "1993-01-15",
    isMarried: false,
    isStudent: true,
    isActive: true,
    accountBalance: 1000.50,
    languages: ["English", "Spanish"],
    hobbies: ["Reading", "Traveling"],
    socialMediaProfiles: {
        facebook: "https://facebook.com/example_user",
        twitter: "https://twitter.com/example_user"
    },
    employment: {
        company: "Example Company",
        position: "Software Engineer",
        yearsOfExperience: 5
    },
    education: {
        university: "Example University",
        degree: "Bachelor of Science",
        major: "Computer Science",
        graduationYear: 2015
    },
    emergencyContact: {
        name: "Jane Doe",
        relationship: "Spouse",
        phone: "234-567-8901"
    },
    favoriteColors: ["Blue", "Green"],
    height: 175,
    weight: 70.5,
    bloodType: "O+"
}

let keys= [];

for(let key in profile){
    keys.push(key);
}

console.log({keys});

let values = Object.values(profile);

console.log({values})
//object.keys() & Object.values() gives array of keys and values respectively, but for keys we will get array of string and for values it gives data as it is.


console.log(profile.hasOwnProperty("education"))

if("education" in profile){
    console.log("Education Key Avaliable in Profile")
}