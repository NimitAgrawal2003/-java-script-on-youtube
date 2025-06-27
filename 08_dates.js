// dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(typeof myDate);

 let mycreateddate = new Date(2023, 0, 23) // month start from zero in java script
 console.log(mycreateddate.toDateString());

 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
   

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
