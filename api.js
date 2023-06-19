async function fetchData() {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=32716e5eab4e47cbbe0cb81df5e0b2d4',{
        method:'GET',
        header: {
            Authorization: 'Bearer 32716e5eab4e47cbbe0cb81df5e0b2d4'
        }
      });
      const data = await response.json();
      console.log(data)
      return data; // Return the data as a Promise
    } catch (error) {
      console.log('Error:', error);
    }
  }
  function updateUI(articles) {
    const outputContainer = document.getElementById('info');
  
    // Extract properties from the data object
    const news1 = articles;
    const news2 = articles;  
    // Create HTML markup
    const markup = `
      <h2>News Story: ${news1}</h2>
      <h2>News Story: ${news2}</h2>
    `;
  
    // Update the HTML container with the generated markup
    outputContainer.innerHTML = markup;
  }
  fetchData().then((articles) => {
    updateUI(articles);
  });
  
   