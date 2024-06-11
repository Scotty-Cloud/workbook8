async function editTableOfUsers() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  await fetchUserData(userId);
}

async function fetchUserData(userId) {
  try {
    const response = await fetch(`http://localhost:3000/users/${userId}`);
    const user = await response.json();
    document.querySelector("#name").value = user.name;
    document.querySelector("#username").value = user.username;
    document.querySelector("#email").value = user.email;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

async function editUserData() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    const name = document.querySelector("#name").value;
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;

    const userData = {
      name: name,
      username: username,
      email: email,
    };

    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log("User updated:", data);
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

editTableOfUsers();