

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => data.map((user) => console.log(user.name, user.email)))
//   .catch((error) => console.error("Error fetching data:", error));

// Twoo Way 


// async function fun() {

//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   data.map((user) => console.log(user.name, user.email))
// }
// fun()
//     .then((response) => console.log("API Fetch"))
//     .catch((error) => console.log("Error 404")); 


// Third Way

axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    response.data.forEach((user) => {
      console.log(user.name, user.email, user.address.street, user.address.geo.lng);
    });
  })
  .catch((error) => {
    console.error("Error 404", error);
  });
