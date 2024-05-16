// fill in javascript code here
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let name = document.getElementById("name").value;
      let empID = document.getElementById("employeeID").value;
      let department = document.getElementById("department").value;
      let exp = document.getElementById("exp").value;
      let email = document.getElementById("email").value;
      let mbl = document.getElementById("mbl").value;
  
      if (name && empID && department && exp && email && mbl) {
        const newRow = document.createElement("tr");
  
        const newname = document.createElement("td");
        newname.textContent = name;
  
        const newEmpID = document.createElement("td");
        newEmpID.textContent = empID;
  
        const newDepartment = document.createElement("td");
        newDepartment.textContent = department;
  
        const newExp = document.createElement("td");
        newExp.textContent = exp;
  
        const newEmail = document.createElement("td");
        newEmail.textContent = email;
  
        const newMbl = document.createElement("td");
        newMbl.textContent = mbl;
  
        const newRole = document.createElement("td");
        newRole.textContent = getRole(exp);
  
        const newDelete = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
          const row = this.parentNode.parentNode;
          row.parentNode.removeChild(row);
        };
        newDelete.appendChild(deleteButton);
  
        
        newRow.appendChild(newname);
        newRow.appendChild(newEmpID);
        newRow.appendChild(newDepartment);
        newRow.appendChild(newExp);
        newRow.appendChild(newEmail);
        newRow.appendChild(newMbl);
        newRow.appendChild(newRole);
        newRow.appendChild(newDelete);
  
        tableBody.appendChild(newRow);
  
        document.getElementById("name").value = '';
        document.getElementById("employeeID").value = '';
        document.getElementById("department").value = '';
        document.getElementById("exp").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mbl").value = '';
      } else {
        alert('Please fill in all inputs');
      }
    });
  });
  function getRole(experience) {
    if (experience > 5) {
      return 'Senior';
    } else if (experience >= 2 && experience <= 5) {
      return 'Junior';
    } else {
      return 'Fresher';
    }
  }
  