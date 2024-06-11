async function deleteUserData() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("id");
  
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("User deleted:", data);
      window.location.href = "index.html";
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }