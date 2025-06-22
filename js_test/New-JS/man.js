// const myJson = `{"Username": "Rashid", "Age": "20"}`;
// console.log(typeof myJson);
// console.log(myJson);

// const myObject = JSON.parse(myJson);
// console.log(typeof myObject);
// console.log(myObject);

// myObject["Username"] = "Reda";
// myObject["Age"] = 52;

// const convertJson = JSON.stringify(myObject)
// console.log(typeof convertJson);
// console.log(convertJson);


//------------------------------------------------Asynchronous vs Synchronous Programmin-----------------------------------------------

// console.log("1");
// console.log("2");
// window.alert("OPration");
// console.log("3");
// console.log("4");

// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Opration"), 2000);
// console.log("3");
// console.log("4");



//------------------------------------------------Call Stack And Web API-----------------------------------------------

// function one(){
//     console.log("one")
// }

// function two(){
//     one();
//     console.log("Two")
// }

// function three(){
//     two();
//     console.log("Three")
// }

// three();

// console.log("#########")

// console.log("One")
// console.log("Two")
// console.log("Three")

//------------------------------------------------Event Loop And Callback Queue-----------------------------------------------


// console.log("One");
// setTimeout(() =>{
//     console.log("Three")
// }, 0);
// setTimeout(() =>{
//     console.log("Four")
// }, 0);
// console.log("Two");

// let myNUmber = 50;
// myNUmber += 10;
// console.log(myNUmber)

//------------------------------------------------Request And Response From Real API-----------------------------------------------


/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   console.log(myRequest.readyState);
//   console.log(myRequest.status);
// //   if (this.readyState === 4 && this.status === 200) {
// //     console.log(this.responseText);
// //   }
// };

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {

//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let myJs = JSON.parse(this.responseText)
//     // console.log(myJs)
//     for(let i = 0; i < myJs.length; i++){
//         let div = document.createElement("div");
//         let repoName = document.createTextNode(myJs[i].node_id);
//         div.appendChild(repoName);
//         document.body.appendChild(div);
//     }
//   }
// };
//=====================================================================================================================
// let myReq = new XMLHttpRequest();
// myReq.open("GET", "articles.json");
// myReq.send();
// console.log(myReq);

// myReq.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 2000){
//         let mainData = JSON.parse(this.responseText)
//     }
//     for(let i =0; i < mainData.length; i++){
//         let div = document.createElement("div");
//         let repoName = document.createTextNode(myJs[i].node_id);
//         div.appendChild(repoName);
//         document.body.appendChild(div);
//     }

// }
//=====================================================================================================================


//------------------------------------------------Callback Hell Or Pyramid Of Doom-----------------------------------------------


// What Is Callback
// - A Function That Is Passed Into Another One As An Argument To Be Executed Later
// - Function To Handle Photos
// --- [1] Download Photo From URL
// --- [2] Resize Photo
// --- [3] Add Logo To The Photo
// --- [4] Show The Photo In Website


// function makeColor(e){
//     e.target.style.color = "blue";
// }

// let p = document.querySelector(".test");
// p.addEventListener("click", makeColor);

// function callBack(){
//     console.log("Iam Call Back")
// }
// setTimeout(callBack, 2000);

// setTimeout(() => {
//     console.log("Download Photo From URL");
//     setTimeout(() => {
//         console.log("Resize Photo");
//         setTimeout(() => {
//             console.log("Add Logo To The Photo");
//             setTimeout(() => {
//                 console.log("Show The Photo In Website");
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);


//------------------------------------------------Promise Intro And Syntax-----------------------------------------------

// const myPromise = new Promise((resolveFunction, rejcetFunction) => {
//     let conect = false;
//     if(conect){
//         resolveFunction("Connection Established");
//     } else {
//         rejcetFunction(Error("Connection Faild"));
//     }
// });


// let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
// let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

// myPromise.then(resolver, rejecter);

// console.log(myPromise);


//------------------------------------------------Promise - Then, Catch And Finally-----------------------------------------------


// Then    => Promise Is Successfull Use The Resolved Data
// Catch   => Promise Is Failed, Catch The Error
// Finally => Promise Successfull Or Failed Finally Do Something

// const myPromise = new Promise((resolveFunction, rejcetFunction) => {
//     let frindes = ["Rashid", "Ahmed"];
//     if(frindes.length === 4){
//         resolveFunction(frindes)
//     } else {
//         rejcetFunction(Error("Number Of Friends Is Not 4"))
//     }
// });

// myPromise
// .then((resolveVAlue) => {
//     resolveVAlue.length = 2;
//     return resolveVAlue;
// })
// .then((resolveVAlue) => {
//     resolveVAlue.length = 1;
//     return resolveVAlue;
// })
// .then((resolveVAlue) => {
//     console.log(`The Choosen Emplyee Is ${resolveVAlue}`)
// })
// .catch((rejectOption) => console.log(rejectOption))
// .finally(console.log("The OPration Is Done"));


//------------------------------------------------Promise And XHR-----------------------------------------------


// const getData = (apLink) => {
//     return new Promise((resolve, reject) => {
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function() {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText));
//             } else {
//                 reject(Error("Not Found"));
//             }
//         };
//         myRequest.open("GET", apLink);
//         myRequest.send();
//     });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
// .then((result) => {
//     result.length = 10;
//     return result;
// })
// .then((result) => console.log(result[2].name))



//------------------------------------------------Fetch API-----------------------------------------------


// fetch("https://api.github.com/users/elzerowebschool/repos")
// .then((turn) => {
//     console.log(turn);
//     let data = turn.json();
//     console.log(data);
//     return data;
// })
// .then((great) => {
//     great.length = 10;
//     return great;
// })
// .then((yum) => {
//     console.log(yum[1].id)
// })
//------------------------------------------------Promise All And All Settled And Race-----------------------------------------------


// const myFirstPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("I'am The First Promise")
//     }, 4000);
// });

// const mySecoundPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("I'am The Secound Promise")
//     }, 2000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("I'am The Third Promise")
//     }, 1000);
// });

// Promise.race([myFirstPromise, mySecoundPromise, myThirdPromise]).then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject),
// )


//------------------------------------------------Async And Training-----------------------------------------------


// function getData() {
//     return new Promise((res, rej) => {
//         let user = [];
//         if(user.length > 0){
//             res("User I'am Found")
//         } else {
//             rej("User I'am Not Found")
//         }
//     })
// }

// getData().then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject),
// )


// function getData() {
//         let user = ["Rashid"];
//         if(user.length > 0){
//             return Promise.resolve("User I'am Found")
//         } else {
//             return Promise.reject("User I'am Not Found")
//         }
// }

// getData().then(
//     (resolveValue) => console.log(resolveValue),
//     (rejectValue) => console.log(rejectValue),
// )


// async function getData() {
//     let user = ["Rashid"];
//     if(user.length > 0){
//         return "User I'am Found"
//     } else {
//         throw new Error("User I'am Not Found")
//     }
// }

// getData().then(
// (resolveValue) => console.log(resolveValue),
// (rejectValue) => console.log(rejectValue),
// )


//------------------------------------------------Await And Training-----------------------------------------------

// const myPromise = new Promise((res, rej) => 
//     {setTimeout(() => {
//         // res("Yes I'am Good")
//         rej(Error("Yes I'am Bad"))
// }, 2000);

// });

// async function getData() {
//     console.log("After My Promise")
//     // myPromise.then((resolveValue) => console.log(resolveValue))
//     console.log(await myPromise.catch((error) => console.log(error)))
//     console.log("Before My Promise")
// }

// getData();


//------------------------------------------------Try, Catch And Finally With Fetch-----------------------------------------------


// const myPromise = new Promise((res, rej) => 
//     {setTimeout(() => {
//         // rej(Error("No I'am Bad"))
//         rej("No I'am Bad")
// }, 2000);

// });

// async function getData() {
//     console.log("After My Promise")

//     try {
//         console.log(await myPromise)
//     } catch (resolve) {
//         console.log(`I'am: ${resolve}`)
//     } finally {
//         console.log("Before My Promise")
//     }


// }
// getData();

// async function fetchData() {
//     console.log("Before My Promise")

//     try {
//         let myData = await fetch("https://api.github.com/users/elzerowebschool/repos")
//         console.log(await myData.json());
//     }
//     catch (resolve) {
//         console.log(`Reson: ${resolve}`)
//     } finally {
//         console.log("After My Promise")
//     }

    
// }

// fetchData();

//-----------------------------------------------------------------------------------------------


// let myReq = new XMLHttpRequest();
// myReq.open("GET", "articles.json");
// myReq.send();
// console.log(myReq);

// const myPromise = new Promise((res, rej) => {
//     let div = document.createElement("div");

// })

// let myData = (aplink) => {
//     return new Promise((resolve, reject) => {
//         let myReq = new XMLHttpRequest();
//         myReq.onload = function(){
//             if(this.readyState === 4 && this.status === 200){
//                 resolve(JSON.parse(this.responseText));
//             } else {
//                 reject(Error("Not found data"))
//             }
//         };
//         myReq.open("GET", aplink);
//         myReq.send();
//     })
// }

// myData("./articles.json")
// .then((result) => {
//     result.length = 5;
//     return result;
// })
// .then((result) => {
//     for(let i = 0; i < result.length; i++){
//         let div = document.createElement("div");
        
//         let title = document.createElement("h3");
//         let titleText = document.createTextNode(result[i].title);
//         title.appendChild(titleText);
        
//         let description = document.createElement("p");
//         let titleTextp = document.createTextNode(result[i].description);
//         description.appendChild(titleTextp);

//         div.appendChild(title);
//         div.appendChild(description);

//         document.body.appendChild(div);
//     }
// }).catch((rej) => {
//     return rej;
// })


// class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       alert(resolve);
//       // resolve with this.num*2 after 1000ms
//       setTimeout(() => resolve(this.num * 2), 1000); // (*)
//     }
//   }
  
//   async function f() {
//     // waits for 1 second, then result becomes 2
//     let result = await new Thenable(1);
//     alert(result);
//   }
  
//   f();

// function getRoot2() {
//   return Math.SQRT2;
// }

// getRoot2();

//====================================================

//-- Find The Missing Letter

// function findMissingLetterIn (givenLetter) {

//   let letters = 'abcdefghijklmnopqrstuvwxyz';
//   let start = letters.indexOf(givenLetter[0]);

//   for (let i = 0; i < givenLetter.length; i++) {

//     // console.log(givenLetter[i]);
//     // console.log(letters[start + i]);
//     // console.log('######');

//     if (givenLetter[i] === letters[start + i]) {
//       return 'No Missing In Somthing';
//     }
//   }
// }

// // console.log(findMissingLetterIn('defgi')) // h
// // console.log(findMissingLetterIn('abcdeghi')) // f
// console.log(findMissingLetterIn('xyz')) // No Missing In Somthing

//====================================================

//-- Number To Reversed Array


// function convert(n) {

//   let str = n.toString();
//   let newArray = str.split('');
//   let reverced = newArray.reverse();

//   return reverced;
  
// }

// console.log(convert(12345678))


// Find Longest Word in a String


function longestWord(sentece) {
  let array = sentece.split(' ');
  let longestWord  = 0;

  for (let i = 0; i < array.length; i++) {

    if (array[i].length > longestWord) {
      longestWord = array[i].length;
    }

  }
  return longestWord;

}

console.log(longestWord("In Programing We Love Rashid Toooooooooooo Much"))