//1.How can you use filter() to select only the strings longer than three characters from an array of strings?


// var strings = ["umesh", "kumar","mahto","he","she","it","they","jairam","hi"];


// var longerthanthree = strings.filter(str => str.length>3);

// console.log(longerthanthree);



//2. Given an array of integers, how would you filter out a specific value, say 5, using the filter() method?



// var numbers = [1,2,5,6,89,25,5,6,8,9,0];

// var filterednumbers = numbers.filter(num => num !== 5)

// console.log(filterednumbers);



//3.How can you use filter() to create an array of unique values from an array that contains duplicates?


// var numbers = [1,2,3,4,5,6,1,2,3,4,5,6];

//  var uniquenumbers = numbers.filter((num,index,array) => array.indexOf(num)===index);

//  console.log(uniquenumbers);



//4.How would you use filter() to select elements based on their index, for example, picking only the elements at even indices?


// var numbers = [1,2,5,7,9,0,3,7,9,26,89];

// var evenIndexNumbers = numbers.filter((current,index) => index%2 ===0);


// console.log(evenIndexNumbers);




//5.Arrays can contain falsy values (false, 0, "", null, undefined, and NaN). How can you use filter() to create a new array that excludes all falsy values?

// var array = [0,null,undefined,false,"","hello",1305];

// var filteredarray = array.filter(elem => !!elem); //!!elem converts each elements in the boolean value if the element is falsy ,it become `false` otherwise it becomes `true`,
// console.log(filteredarray);




//6.How can you use filter() to select elements that meet multiple conditions? For instance, from an array of numbers, select numbers that are greater than 10 and even.


// var numbers = [1,3,45,10,11,14,40,45,70,100,2,3]
// var filterednumber = numbers.filter(num => num>10 && num %2 ===0);
// console.log(filterednumber);



//7. How do you filter an array of objects based on multiple conditions, such as filtering objects where one property is greater than a certain value and another property equals a specific value?

// var arrayofobjects = [
//     {name:"umesh", age:22,gender:"male"},
//     {name:"namita", age:20,gender:"fmale"},
//     {name:"sunil", age:29,gender:"male"},
//     {name:"sonam", age:19,gender:"female"},
//     {name:"jairam", age:26,gender:"male"},
// ]

//  var filteredarray = arrayofobjects.filter(obj => obj.age>20 && obj.gender === "male")

//  console.log(filteredarray);


//8.  How can you filter an array of objects to only include objects where a specific property matches a given value?


// var arrayofobjects = [
//     {name:"umesh" ,age:21,class:12},
//     {name:"jairam" ,age:26,class:14},
//     {name:"sunil" ,age:22,class:13},
//     {name:"binod" ,age:20,class:11,gender:"male", mothername:"sukhiyadevi",},
// ]

// var specificValue = "binod";

// var filteredarray = arrayofobjects.filter(obj => obj.name === specificValue);

// console.log(filteredarray)



//9.How can you filter an array of objects based on multiple conditions? For instance, select users who are older than 30 and have a specific isActive status.


// var users = [
//     {name:"umesh" ,age:20,isActive:true},
//     {name:"jairam" ,age:40,isActive:true},
//     {name:"sunil" ,age:29,isActive:false},
//     {name:"dinesh" ,age:20,isActive:true},
//     {name:"binod" ,age:33,isActive:true},
// ]

// var ans = users.filter(user => user.age>30 && user.isActive);

// console.log(ans);

//10.How do you filter an array of objects to find elements where a string property contains a certain substring? For instance, find users whose names contain "um".

// var users = [
//     {name:"umesh" ,age:39,gender:"male"},
//     {name:"umrash" ,age:49,gender:"male"},
//     {name:"sunil" ,age:9,gender:"male"},
//     {name:"jairam" ,age:19,gender:"male"},
//     {name:"uma" ,age:29,gender:"female"},
// ]

// var ans = users.filter(user => user.age>20 &&user.gender === "female" && user.name.includes("um"));

// console.log(ans);



//11.How can you filter an array of objects based on a date property, such as finding all objects where the createdAt date is after a specific date?




// Sample array of objects with createdAt dates
// var items = [
//     { id: 1, createdAt: new Date('2023-01-15') },
//     { id: 2, createdAt: new Date('2023-02-20') },
//     { id: 3, createdAt: new Date('2023-03-10') },
//     { id: 4, createdAt: new Date('2023-04-05') }
// ];

// // Filter items where the createdAt date is after a specific date
// var filterItemsByDate = (arr, fromDate) => {
//     return arr.filter(item => item.createdAt > fromDate);
// };

// // Example: Filter items where createdAt is after March 1, 2023
// var fromDate = new Date('2023-03-01');
// var filteredItems = filterItemsByDate(items, fromDate);

// console.log(filteredItems);


//12. How do you filter an array to exclude objects that contain a specific value for a certain property? For example, excluding users with a specific userId.


// var users = [
//     {userId:1 ,name:"umesh"},
//     {userId:2 ,name:"binod"},
//     {userId:3 ,name:"jairam"},
//     {userId:4 ,name:"sunil"},
// ];


// var excludeUserId = 1;

// var ans= users.filter(user => user.userId !== excludeUserId);

// console.log(ans);




//13.ak array hai jismein bahut sare name  hai or hme ye batana hai ki ak hi name kitna baar repeat ho raha  hai?



// var arr = ["umesh" ,"jairam" , "sunil","bablu","umesh","jairam","bablu"];


// var obj = {};

// arr.forEach(function(val){
//     obj[val] = obj[val] ? obj[val]+1 : 1;
// })