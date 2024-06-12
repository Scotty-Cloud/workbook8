// fetch() & .then solution
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
      nameCell.innerText = user.name;

      let usernameCell = row.insertCell();
      usernameCell.innerText = user.username;

      let emailCell = row.insertCell();
      emailCell.innerText = user.email;

      let editAnchor = document.createElement("a");
      editAnchor.href = `edit.html?id=${user.id}`;
      editAnchor.innerText = "Edit"
      let editCell = row.insertCell()
      editCell.appendChild(editAnchor)
      
      let deleteAnchor = document.createElement("a");
      deleteAnchor.href = `delete.html?id=${user.id}`
      deleteAnchor.innerText = "Delete"
      let deleteCell = row.insertCell()
      deleteCell.appendChild(deleteAnchor)

      tableBody.appendChild(row);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAndDisplayUserData();