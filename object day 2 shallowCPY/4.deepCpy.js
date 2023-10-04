//when we create deep copy of a object then it creates a new object and its a indepemdent object its not have any reference of the previous object.
/*
-ways to create deep copy of the object.

1. Json.parse((json.stringify(obj)))
2.structured clone(obj)
3.Lodesh deepcopy (third-party library)
4.Recursion deep copy


*/

//json.parse(json.stringfy(obj))

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


const profileCPy = JSON.parse(JSON.stringify(profile));

//How json.stringfy works first its convert object to string and then JSON.parse() convert it the new fresh object.

profileCPy.uName="arvind"
profileCPy.address.pincode=123;

console.log(profileCPy)
