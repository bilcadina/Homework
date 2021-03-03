var employees = [{
id: 1,
firstName: "Solly",
lastName: "Coon",
email: "scoon0@miitbeian.gov.cn",
gender: "Male",
salary:"293.27"
}, {
 id: 2,
firstName: "Myron",
lastName: "Clissold",
email: "mclissold1@over-blog.com",
gender: "Male",
salary: "463.44"
},{
id: 3,
firstName: "Perla",
lastName: "Fauguel",
email: "pfauguel2@discovery.com",
gender: "Female",
salary: "764.17"
}, {
id: 4,
firstName: "Aundrea",
lastName: "Kegan",
email: "akegan3@tripod.com",
gender: "Female",
salary: "574.63"
}, {
id: 5,
firstName: "Eadith",
lastName: "Chene",
email: "echene4@prnewswire.com",
gender: "Female",
salary: "417.37"
}, {
id: 6,
firstName: "Lorette",
lastName: "Tuther",
email: "ltuther5@admin.ch",
gender: "Female",
salary: "377.40"
},{
id: 7,
firstName: "Robenia",
lastName: "Robins",
email: "rrobins6@networkadvertising.org",
gender: "Female",
salary: "206.26"
},{
id: 8,
firstName: "Moe",
lastName: "Bottoms",
email: "mbottoms7@php.net",
gender: "Male",
salary: "425.70"
},{
id: 9,
firstName: "Talia",
lastName: "Cutsforth",
email: "tcutsforth8@delicious.com",
gender: "Female",
salary: "711.72" 
},{
id: 10,
firstName: "Ives",
lastName: "Crennan",
email: "icrennan@microsoft.com",
gender: "Male",
salary: "668.98"
}];


//ex1
function collectFirstName(employees) {
    // console.info("employees: ", employees);
    if (!employees) {
        //console.info("you did not provide any value");
    }

    var firstNames = employees.map(function (employee) {
        return employee.firstName
    });
   // console.log(firstNames);

}        
    collectFirstName(employees);


//ex2

function calculateAverageSalary() {
    var sum = 0;
    employees.forEach( employee  => sum = sum + (+employee.salary));
    return sum/10;
    
}

// var average = calculateAverageSalary();
//console.log("average", average);

//ex3 
function calculateAverageFemSalary() {
    var sum = 0;
    var counter = 0;
    employees.forEach( employee  => {
        if (employee.gender == "Female") {
            counter = counter + 1;
            sum = sum + (+employee.salary)
        }
    });
   // console.log('counter: ', counter);
    return sum/counter;
}

var average = calculateAverageFemSalary();
//console.log("average", average);

//ex4

function splitEmployees (employees, filterCriteria) {
    var maleEmployees = employees.filter( employee => employee.gender == filterCriteria)
    //console.log(maleEmployees);
}


splitEmployees(employees, 'Male');
splitEmployees(employees, 'Female');

//ex5
function convertEmployeesToObject() {
    let newObject = {};
    for ( let i=0; i < employees.length; i++) {
        if (employees[i] !== undefined) {
            Object.assign(newObject, { [employees[i].lastName]: employees[i]});
        }
    }

    console.log('newObject: ', newObject);
}

convertEmployeesToObject();


