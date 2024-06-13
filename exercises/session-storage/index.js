function storeData(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let role = document.querySelector('input[name="role"]:checked').value;
  localStorage.setItem("name", name);
  localStorage.setItem("role", role);
  location.href = "information.html";
}
