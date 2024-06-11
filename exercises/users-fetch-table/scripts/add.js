async function addUserData() {
  try {
    const name = document.querySelector("#name").value;
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;

    const userData = {
      name: name,
      username: username,
      email: email,
    };

    const response = await fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log("User added:", data);
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// .fetch & .then solution
// function addUserData() {
//   const name = document.querySelector("#name").value;
//   const username = document.querySelector("#username").value;
//   const email = document.querySelector("#email").value;

//   const userData = {
//     name: name,
//     username: username,
//     email: email,
//   };

//   fetch("http://localhost:3000/users/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log("User added:", data);
//       window.location.href = "index.html";
//     })
//     .catch(error => {
//       console.error("Error adding user:", error);
//     });
// }