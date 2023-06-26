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
      return data.articles; // Return the data as a Promise
    } catch (error) {
      console.log('Error:', error);
    }
  }
  function updateUI(articles) {
    const outputContainer = document.getElementById('info');
  
    // Extract properties from the data object
    const news1 = data.articles[0];
    const news2 = data.articles[1];  
    // Create HTML markup
    const markup = `
      <h2>News Story: ${articles[0].title}</h2>
      <p>Description: ${article[1].description}</p>
      <h2>News Story: ${articles[1].title}</h2>
      <p>Description: ${articles[2].description}</p>
    `;
  
    // Update the HTML container with the generated markup
    outputContainer.innerHTML = markup;
  }
  fetchData().then((articles) => {
    updateUI(articles);
  });
  
   