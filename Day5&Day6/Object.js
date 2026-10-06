let empDetails={
    name: "John Doe",
    position: "Software Engineer",  
    salary: 75000,
    skills:["Java","MongoDB"],
    address:{
        city:"gUntur",
        PInCode:522034
    }
}
// seal() is used to prevent the addition or deletion of properties from an object, but it allows modification of existing properties.
Object.seal(empDetails);

empDetails.name="Jane Doe";
console.log(empDetails);


delete empDetails.position;
console.log(empDetails);

//Object Inbuilt functions
console.log(Object.keys(empDetails));
console.log(Object.values(empDetails));

//freeze() is used to prevent the modification of existing properties and also prevents the addition or deletion of properties from an object.
Object.freeze(empDetails);

empDetails.salary=80000;
console.log(empDetails);

delete empDetails.skills;
console.log(empDetails);    
