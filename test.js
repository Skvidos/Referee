document.addEventListener('DOMContentLoaded', () => {
  fetch('https://skvidos.github.io/Referee/test.json')
    .then(response => response.json())
    .then(data => {
      const userDataDiv = document.getElementById('user-data');
      data.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
                  <h2>${user.name}</h2>
                  <p>Email: ${user.email}</p>
              `;
        userDataDiv.appendChild(userDiv);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
