function fetchProfile() {
  const username = document.getElementById('username').value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('No user file');
      }
      return response.json();
    })
    .then(data => {
      displayProfile(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayProfile(profile) {
  document.getElementById('profile-picture').src = profile.avatar_url;
  document.getElementById('profile-name').textContent = `Name: ${profile.name || 'Not available'}`;
  document.getElementById('profile-blog').textContent = `Blog: ${profile.blog || 'Not available'}`;
  document.getElementById('profile-created-at').textContent = `Created At: ${profile.created_at || 'Not available'}`;

  // populate the table
  const tableBody = document.getElementById('userTableBody');
  tableBody.innerHTML = '';
  const row = tableBody.insertRow();
  row.insertCell().textContent = profile.name || 'Not available';
  row.insertCell().textContent = profile.blog || 'Not available';
  row.insertCell().textContent = profile.created_at || 'Not available';
}