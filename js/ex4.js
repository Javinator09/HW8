function submitForm() {
  const formElement = document.getElementById('myForm');
  const formData = new FormData(formElement);
  displayFormData(formData);
}

function displayFormData(formData) {
  const table = document.createElement('table');
  table.classList.add('formDataTable');

  formData.forEach(function(value, key) {
    const row = table.insertRow();
    const cellKey = row.insertCell();
    const cellValue = row.insertCell();
    cellKey.textContent = key;
    cellValue.textContent = value;
  });

  const tableDisplay = document.getElementById('tableDisplay');
  tableDisplay.innerHTML = '';
  tableDisplay.appendChild(table);
}

function cancelForm() {
  document.getElementById('myForm').reset();
  document.getElementById('tableDisplay').innerHTML = '';
}