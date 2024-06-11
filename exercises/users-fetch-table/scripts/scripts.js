fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
 .then(response => response.json())
 .then(data => {
    const tableBody = document.querySelector('#user-data');
    for (const user of data) {``
      const row = tableBody.insertRow();
      
      const nameCell = row.insertCell();
      nameCell.textContent = user.name;
      
      const usernameCell = row.insertCell();
      usernameCell.textContent = user.username;
      
      const emailCell = row.insertCell();
      emailCell.textContent = user.email;
      
      const companyCell = row.insertCell();
      companyCell.textContent = user.company.name;
      tableBody.appendChild(row);
    }
  })
 .catch(error => console.error('Error:', error));