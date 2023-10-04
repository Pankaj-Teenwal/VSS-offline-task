// object deepcopy using recursion


const profile = {
    uName: "pankaj",
    lName: "Teenwal",
    city: "Jhunjhunu",
    state: "Rajasthan",
    address: {
        pincode: {
            A: 123,
            B: 333704
        },
        wordNo: 18
    },
    hasLicense: true,
    hasVoterId: true,
}

const deepCpyObject = (obj) => {
    let resultObj = {};


    for (let key in obj) {
        if (typeof (obj[key]) == "object") {
            resultObj[key]=deepCpyObject((obj[key]))
        }
        else {
            resultObj[key] = obj[key]
        }
    }

    return resultObj

    
}

const deepCopyedObj = deepCpyObject(profile);

deepCopyedObj.address.pincode.A = 578
console.log(profile )
console.log(deepCopyedObj )