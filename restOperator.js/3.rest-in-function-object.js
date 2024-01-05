const profile = {
    name:"Pankaj",
    city:"Pune",
    state: "Maharastara",
    email:"pankaj.teenwal@microsoft.com",
    salary: 4000000,
}

const getDataFromObj = ({name, city, salary, ...restData})=>{
    console.log("getMessageV2", name, city, salary, restData);
}

getDataFromObj(profile)