//map,filter,reduce


//map

let array1=[1,2,3,4,5]

let mappedArray=array1.map((num,i,arr)=>{
    return num*2
})

console.log(mappedArray)

//// Polyfill of map

// Array.prototype.myMap=function(cb) {
//     let temp=[]
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],i,this))
//     }
//     return temp
// }

// let array1=[1,2,3,4]

// let mappedArray=array1.myMap((num,i,arr)=>{
//     return num*2
// })

// console.log(mappedArray)


// forEach

array1=[1,2,3,4,5]

array1.forEach((num,i,arr)=>{
    console.log('forEach==>',num*3)
})

// filter

let array2=[1,2,3,4,5,6]

// let filteredArray=array2.filter((num,i,arr)=>{
//     return num%2===0     
// })

// console.log(filteredArray)


//polyfil

Array.prototype.myfilter=function(cb){
     
    let temp=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this))
        temp.push(this[i])
    }
    return temp
}


let filteredArray=array2.myfilter((num,i,arr)=>{
    return num %2===0     
})

console.log(filteredArray)


// reduce

// let sum=array1.reduce((accumulator,currentValue,i,arr)=>{
//     return accumulator+(currentValue*2)
// })

// console.log('sum===>',sum)

// reducer pollyphill

Array.prototype.myreducer=function(cb,initialvalue){
    var accumulator=initialvalue

    for(let i=0;i<this.length;i++){
     accumulator= accumulator?cb(accumulator,this[i],i,this):this[i]
    }
    return accumulator
}

let sum=array1.myreducer((accu,currentValue,i,arr)=>{
    return accu+currentValue

})

console.log('sum===>',sum)




/////////////////////////////////////


let students=[
    {name:'sairam',rollNum:1,marks:50},
    {name:'muddu',rollNum:2,marks:55},
    {name:'minnu',rollNum:3,marks:60},
    {name:'jaggu',rollNum:4,marks:90},
    {name:'hp',rollNum:5,marks:52},
]

//print only name in uppercase
for(let i=0;i<students.length;i++){
    console.log(students[i].name.toUpperCase())
}

//print only name
let name=students.forEach((obj,i,arr)=>console.log(obj.name))

//print only name as array in uppercase
let mappedName=students.map((obj,i,arr)=>obj.name.toUpperCase())
console.log('mappedName=>',mappedName)

// print name of students in uppercase with marks grater than 06 and rollNum>3
students.filter((stu)=>{ return stu.marks>=60 && stu.rollNum>3}).forEach((stu)=>console.log('student with distinction=>',stu.name.toUpperCase()))

let distiction=students.filter((stu)=>{ return stu.marks>=60 && stu.rollNum>3}).map((stu)=>stu.name.toUpperCase())
console.log('student with distinction=>',distiction)

// sum of marks of all students

let sumOfMarks=students.reduce((accum,curr)=> {return accum+curr.marks},0)

console.log('sumOfMarks=>',sumOfMarks)


// return total marks of student whose marks is grater than 60 after adding 20 marks have
// been added to those who scored less than 80

let totalAfterGrace=students.filter((stu)=>stu.marks<60).map((stud)=>stud.marks+20)

console.log(totalAfterGrace)
