document.addEventListener('DOMContentLoaded', function () {
  // fetch data from the URL
  fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
    // convert the data to JSON format
    .then(response => response.json())

    .then(data => {
      // creat id and find table
      const tableBody = document.getElementById('paintingsBody');
      // loop through each painting 
      data.forEach(painting => {
        // create a new row in the table
        const row = tableBody.insertRow();
        row.insertCell().textContent = painting.name;
        row.insertCell().textContent = painting.year;
        row.insertCell().textContent = painting.artist;
      });
    })
    // create error message
    .catch(error => console.error('Error fetching data:', error));
});