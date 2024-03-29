function sendTravelerInfo() {
  // create a new FormData object
  const formData = new FormData();

  
  formData.append("name", "Javier");
  formData.append("country1", "Japan");
  formData.append("year1", 2022);
  formData.append("country2", "Mexico");
  formData.append("year2", 2021);
  formData.append("country3", "USA");
  formData.append("year3", 2021);

  // sending traveler's info to the server
  fetch('https://thejsway-server.herokuapp.com/api/countries', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to send data to the server');
    })
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('Error sending data to the server:', error);
    });
}