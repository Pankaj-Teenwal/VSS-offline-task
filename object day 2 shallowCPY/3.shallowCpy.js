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

let profileCpy = {...profile};


profileCpy.address.pincode=12345;
console.log({profile})
console.log({profileCpy})

//this is called the shallow cpy in this case all the first level keys are stored at new location but for the nested level it will still point to the previeous object reference.

