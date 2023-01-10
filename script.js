// Edit testObject and Create objectTestClone
const testObject = {
    name: "qwerty",
    surname: "Shekin"
}

testObject.age = 23;    
debugger;

const objectTestClone = {};
Object.assign(objectTestClone, testObject);

delete testObject.age;

testObject.name = "Egor";
debugger;


//Count workers salary 
let sum = 0;
const salary = { 
    Marie: 7,
    Gleb: 8
};
salary.Egor = 10;

if(salary === null) alert(sum);
else{
    for(i in salary){
        sum += salary[i];
    }
    // alert(sum);
}
debugger;

// X2 numbers in object 'menu'
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu){
    for(i in menu){
        if(typeof(menu[i]) ===  'number') menu[i] *= 2;
    }
}

console.log(sum);

multiplyNumeric(menu);
debugger;