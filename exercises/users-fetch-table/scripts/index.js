// fetch('http://localhost:3000/users', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//  .then(response => response.json())
//  .then(data => {
//     let tableBody = document.querySelector('#user-data');
//     for (let user of data) {``
//       let row = tableBody.insertRow();

//       let nameCell = row.insertCell();
//       nameCell.textContent = user.name;

//       let usernameCell = row.insertCell();
//       usernameCell.textContent = user.username;

//       let emailCell = row.insertCell();
//       emailCell.textContent = user.email;

//       let companyCell = row.insertCell();
//       companyCell.textContent = user.company.name;
//       tableBody.appendChild(row);
//     }
//   })
//  .catch(error => console.error('Error:', error));

async function fetchAndDisplayUserData() {
  try {
    let response = await fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    let tableBody = document.querySelector("#user-data");
    tableBody.innerText = "";
    for (let user of data) {
      let row = tableBody.insertRow();

      let nameCell = row.insertCell();
      nameCell.textContent = user.name;

      let usernameCell = row.insertCell();
      usernameCell.textContent = user.username;

      let emailCell = row.insertCell();
      emailCell.textContent = user.email;

      let companyCell = row.insertCell();
      companyCell.textContent = user.company.name;

      tableBody.appendChild(row);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAndDisplayUserData();