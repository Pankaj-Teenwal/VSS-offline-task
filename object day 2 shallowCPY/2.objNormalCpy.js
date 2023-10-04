const profile = {
    uName : "pankaj",
    lName: "Teenwal",
    city:"Jhunjhunu",
    state: "Rajasthan",
    address:{
        pincode: 333704,
        wordNo: 18
    },
    hasLicense:true,
    hasVoterId: true, 
}

const cpyProfile = profile;

cpyProfile.uName="Arvind";

console.log({profile})
console.log({cpyProfile})

// these two objects are referencing to the same memory addresses, thats why its reflecting the changes in both the objects