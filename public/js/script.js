document.getElementById('fetchData').addEventListener('click', async function() {
    const displayDiv = document.getElementById('dataDisplay');
    displayDiv.innerHTML = '<p>Loading cat facts...</p>'; // Show a loading message

    try {
        const response = await fetch('/api/items'); 
        const data = await response.json();
        displayDiv.innerHTML = ''; // Clear loading message
        data.forEach(item => {
            const para = document.createElement('p');
            para.innerText = item.fact; 
            displayDiv.appendChild(para);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        displayDiv.innerHTML = '<p>Error loading cat facts. Please try again later.</p>';
    }
});
