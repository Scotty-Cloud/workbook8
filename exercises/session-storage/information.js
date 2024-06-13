let name = localStorage.getItem("name");
let role = localStorage.getItem("role");

if (role === "instructor") {
  document.querySelector("#welcome-message").innerText = `Welcome Instructor ${name}`;
  document.querySelector("#lorem-ipsum").innerText = `The Greatest Instructor of All Time`;
  document.querySelector("#lorem-ipsum").classList.add("instructor-text");
} else if (role === "student") {
  document.querySelector("#welcome-message").innerText = `Welcome Student ${name}`;
  document.querySelector("#lorem-ipsum").innerText = `The Greatest Student of All Time`;
  document.querySelector("#lorem-ipsum").classList.add("student-text");
}