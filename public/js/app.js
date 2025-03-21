document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetchData');
  const dataContainer = document.getElementById('dataContainer');

  fetchButton.addEventListener('click', async () => {
    try {
      // Clear previous data
      dataContainer.innerHTML = '';

      // Fetch data from API
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Display data
      data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'data-item';
        card.innerHTML = `
          <h3>${item.name}</h3>
          <p><strong>Role:</strong> ${item.role}</p>
          <p><strong>Email:</strong> ${item.email}</p>
        `;
        dataContainer.appendChild(card);
      });
    } catch (error) {
      dataContainer.innerHTML = `<p class="error">Error loading data: ${error.message}</p>`;
    }
  });
});
