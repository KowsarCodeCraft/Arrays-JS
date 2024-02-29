// Example of basic Arrays

//let vegetables = ["Caroot","Brocoli","Tomatoo","Spinach","Cucumber" ]
//console.log(vegetables);
//console.log(vegetables.length);// This is basically to see the length of the arrays information. Here it will be 5  as there are 5 vegetables item.
//Also length works as a property in JS which will show the value. 
//let marks = [50, 70, 80, 80, 40]
//console.log(marks);
//console.log(marks.length);

//Array indices(indices is plural of index)

// using array we can change anything as per our need. Example given below.
//let marks = [50, 70, 80, 80, 40]
//marks[1] = 20
//console.log(marks);//Here 70 changes to 20. As per index no 70 is in 1 serial/position. So we put serial 1 inside the array under the same variable name and mention the required new no
//let vegetables = ["Caroot","Brocoli","Tomatoo","Spinach","Cucumber" ]
//vegetables[2] = "Potatoo"
//console.log(vegetables);// Here Tomatoo replaced by the Potatoo

//How to use loop in arrays

//for loop

//let cities = ["Helsinki", "Tampere", "Oulu", "Turku"]
//for (let index = 0; index < cities.length; index++) {
    //console.log(cities[2]);
    
//}

//for-of loop

//let cities = ["Helsinki", "Tampere", "Oulu", "Turku"]
//for (let city of cities) {
    //console.log(city);
//}

//Practice : find out the average marks from a calss of a student

//let marks = [85, 97, 44, 37, 76, 60];

//let sum = 0;

//for (let value of marks) {
    //sum = sum + value
//}

//let avg = sum/marks.length
//console.log("avg marks of the class = ", avg);

//practice > find out the value after 10% applying

//Using for off loop

//let items = [250, 645, 300, 900, 50];
//let i = 0;

//for (let value of items) {
   // let offer = value/10;
    //items[i] = items[i] - offer;
   // console.log(`value after offer = ${items[i]}`);
   // i++
//}

//Using for loop
//let items = [280, 800, 3000, 1580, 170];

//for (let i = 0; i < items.length; i++) {
    //let offer = items[i] / 10;
    //items[i] = items[i] - offer
    //items[i] -=  offer// this is second option write a code
//}
//console.log(items);

// Using diffrent array method

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix" ]
//console.log(companies);
//companies.shift()

//companies.splice(2, 1, "ola")
//console.log(companies);

//companies.push("Amazon")
//console.log(companies);




