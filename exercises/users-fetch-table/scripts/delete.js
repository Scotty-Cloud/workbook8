async function deleteUserData() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("User deleted:", data);
  } catch (error) {
    console.error("Error deleting user:", error);
  } finally {
    window.location.href = "index.html";
  }
}

// fetch() & .then solution
// function deleteUserData() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const userId = urlParams.get("id");

//   fetch(`http://localhost:3000/users/${userId}`, {
//     method: "DELETE",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("User deleted:", data);
//     })
//     .catch((error) => {
//       console.error("Error deleting user:", error);
//     })
//     .finally(() => {
//       window.location.href = "index.html";
//     });
// }