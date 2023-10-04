const profile = {
    uName: "pankaj",
    lName: "Teenwal",
    city: "Jhunjhunu",
    state: "Rajasthan",
    address: {
        pincode: { a: 123, b: 456 },
        wordNo: 18
    },
    hasLicense: true,
    hasVoterId: true,
}


const deepCpy = (obj) => {
    let resultObj = {}

    for (let key in obj) {

        if (typeof (obj[key]) == "object") {
            resultObj[key] = deepCpy((obj[key]))
        }
        else {
            resultObj[key] = obj[key]
        }
    }

    return resultObj
}

const deepCpyObj = deepCpy(profile)

deepCpyObj.address.pincode.a = 4;
console.log(deepCpyObj)
console.log(profile)
