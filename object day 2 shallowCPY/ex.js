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



    if(typeof obj!== "object"){
        return obj;
    }
    let resultObj = {};

    // let keys = Object.keys(obj)

    for (let key in obj) {
        // if (typeof (obj[key]) === Object || obj[key]!==null) {

            resultObj[key]=deepCpyObject((obj[key]))
        // }
    }

    return resultObj

    // console.log(keys)
}

const deepCopyedObj = deepCpyObject(profile);
console.log(profile )

// deepCopyedObj.address.pincode = 123
console.log( deepCopyedObj )