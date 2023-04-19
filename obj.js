// Object Assign
const obj1 = {a : 1};
const obj2 = {b : 2};
const obj3 = {c : 3};

const mergedObj = Object.assign(obj1 , obj2, obj3);
console.log(mergedObj);


// object create 
let student = {
     name: "Anisha",
     Age: 21,
     marks: 78.9,
     display(){
        console.log("Name: ", this.name);
     }
};
let std1 = Object.create(student);
console.log(std1);



// object define properties
let obj = {};
Object.defineProperties(obj,{
   'name' :{
       value : 'clint',
       Writable : 'true',
   },
   'age' :{
       value : 36,
      writable : 'false',
   }
});
console.log(obj.age);


// object entries
let std = {
    name: 'Isha',
    age: 21,
}
let entry = Object.entries(std);
console.log(entry);


// object freeze
let std2 = {
    prop : function() {},
    foo: "bar", 
};
Object.freeze(std2)
std2.foo = "bar1";
console.log(std2.foo);



// object Get Own Property Name

const Student1 = {
    name: 'Isha',
    Age: 21,
    location: 'America',
};
const propertiesNames = Object.getOwnPropertyNames(Student1);
console.log(propertiesNames);



// object Get Own Property Symbol
const Symbol1 = Symbol('Symbol1');
const Symbol2 = Symbol('Symbol2');

const obj8 = {
    property1 : 'Value1',
    [Symbol1] : 'Value2',
    [Symbol2] : 'Value3',
};

const Symbols = Object.getOwnPropertySymbols(obj8);
console.log(Symbols);

