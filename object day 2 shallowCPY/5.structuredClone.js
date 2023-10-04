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


const profileCpy = structuredClone(profile);

profileCpy.uName= "Arvind";
profileCpy.address.pincode = 333001

console.log(profileCpy)