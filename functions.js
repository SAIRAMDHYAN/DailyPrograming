
//Functions

// Function Decleration or Function Defination or Function Statement
function square(num){
  return num**2
}

console.log(square(5))

// Function Expression

let cube=function(num){
 return num**3
}
console.log(cube(5))


// IIFs

// (function multiply(num){
//     console.log(num * num);
// })(2);


//First class function

function square1(num){
    return num*2
}

function doubleedNum(fn){
   console.log(fn(6))
}

doubleedNum(square1)


// call back function

function greeting(name){
    console.log('Good morning '+ name)
}

function heigherOrderFunc(name,greeting){
    greeting(name)
   

}
heigherOrderFunc('sairam',greeting)

// Example with a delay using setTimeout
heigherOrderFunc('sairam', (name) => {
    setTimeout(() => {
        greeting(name);
    }, 3000);
});
heigherOrderFunc('sairam',greeting)


// Arrow function

let func1=(num1,num2)=> num1+num2
let func2=(num1,num2)=> {
    return num1+num2
}

console.log(func1(10,15))
console.log(func2(10,15))


///////   Difference between Arrow function and Normal Functon

//1.  Syntatical difference

//2. In arrow function its not important to use "return" statement. Wher in normal function its compulsory

//3. in Arrow func "arguments" keyword cannot be used,where in normal function can be used.

   const func3=function(){
    console.log(arguments)
   }

   func3(1,2,3,4,5)

// const func3=()=>{
//     console.log(arguments)
//    }

//    func3(1,2,3,4,5)


//4. in Arrow function it does not have "this" binding where as normal function has this binding.

let user={
     userName:'Sairam',
    arr1:function(){console.log('Greetings to ',this.userName)},//normal function

    arr2:()=>{console.log('Greetings to ',this.userName)}// arro function
    
} 

user.arr1()//Greetings to  Sairam
user.arr2()//Greetings to  undefined


/////   Rest and Spread operator


let func4=function(num1,num2,...num3){  //rest operator
    console.log(num1,num2,num3)
}

func4(1,2,3,4,5)


let func5=function(num1,num2,num3){  
    console.log(num1,num2,num3)
}

let arr5=[1,2,3,4,5]

func5(arr5)//[ 1, 2, 3, 4, 5 ] undefined undefined
func5(...arr5) //spread operator    //1 2 3 


// json


let students=[
    {name:'sairam',age:24,education:'B.sc'},
    {name:'muddu',age:25,education:'M.Tech'},
    {name:'Jaggu',age:30,education:'BE'}
]

let jsonData=JSON.stringify(students)

console.log(jsonData)

let parsedData=JSON.parse(jsonData)
console.log(parsedData)


// call apply bind

let stu1={
    f_name:'sairam',
    l_name:'dhyan',
    full_name:function(hometown,state){
        console.log(this.f_name+' '+this.l_name+ ' from ' +hometown+', '+state)
    }
}

// stu1.full_name()

let stu2={
    f_name:'swasthick',
    l_name:'Gowda',
}

// stu1.full_name.apply(stu2,['Chikkamagaluru','Karnataka'])

stu1.full_name.bind(stu2)('Chikkamagaluru','Karnataka')