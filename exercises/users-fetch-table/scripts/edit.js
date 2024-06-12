async function editTableOfUsers() {
  let urlParams = new URLSearchParams(window.location.search);
  let userId = urlParams.get("id");
  await fetchUserData(userId);
}

async function fetchUserData(userId) {
  try {
    let response = await fetch(`http://localhost:3000/users/${userId}`);
    let user = await response.json();
    document.querySelector("#name").value = user.name;
    document.querySelector("#username").value = user.username;
    document.querySelector("#email").value = user.email;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

async function editUserData() {
  try {
    let urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get("id");

    let name = document.querySelector("#name").value;
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;

    let userData = {
      name: name,
      username: username,
      email: email,
    };

    let response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    let data = await response.json();
    console.log("User updated:", data);
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

editTableOfUsers();

// fetch() & .then
// function editTableOfUsers() {
//   let urlParams = new URLSearchParams(window.location.search);
//   let userId = urlParams.get("id");
//   fetchUserData(userId);
// }

// function fetchUserData(userId) {
//   fetch(`http://localhost:3000/users/${userId}`)
//     .then((response) => response.json())
//     .then((user) => {
//       document.querySelector("#name").value = user.name;
//       document.querySelector("#username").value = user.username;
//       document.querySelector("#email").value = user.email;
//     })
//     .catch((error) => {
//       console.error("Error fetching user data:", error);
//     });
// }

// function editUserData() {
//   let urlParams = new URLSearchParams(window.location.search);
//   let userId = urlParams.get("id");

//   let name = document.querySelector("#name").value;
//   let username = document.querySelector("#username").value;
//   let email = document.querySelector("#email").value;

//   let userData = {
//     name: name,
//     username: username,
//     email: email,
//   };

//   fetch(`http://localhost:3000/users/${userId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("User updated:", data);
//       window.location.href = "index.html";
//     })
//     .catch((error) => {
//       console.error("Error updating user:", error);
//     });
// }

// editTableOfUsers();
