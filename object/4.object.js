
/**
 * 
 * Create a function nestedPropertyExists that takes an object and a dot-separated string representing a nested property (e.g., "a.b.c") and returns true if the nested property exists in the object, false otherwise.
 */



let data = {

    person: {
        name: "Alice",
        address: {
            city: "Wonderland",
            postalCode: "12345"
        },
        hobbies: ["reading", "traveling"]
    },
    company: {
        name: "TechCo",
        employees: 500,
        departments: {
            sales: {
                manager: "Bob",
                team: ["Alex", "Eva"]
            },
            development: {
                manager: "Charlie",
                team: ["David", "Frank"]
            }
        }
    }
};

console.log(Object.keys(data))
