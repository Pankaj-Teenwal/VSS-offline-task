let employee = {
    name: "Alice",
    job: {
        title: "Software Engineer",
        department: "Engineering"
    },
    salary: 80000
};


const changeSalary = (newSalary)=>{
    employee["salary"] = newSalary;
    employee.job["title"] = "Pankaj"
    return employee;
}



console.log(changeSalary(1050000));